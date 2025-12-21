'use server'
import { SignupFormSchema, FormState, LoginFormSchema } from '../../lib/definitions'
import bcrypt from 'bcrypt'
import prisma from "@/lib/prisma";
import { Role } from '../generated/prisma/enums';
import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';


export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { usertype, name, email, phone, password } = validatedFields.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use a transaction to ensure either EVERYTHING saves or NOTHING saves
    const newUser = await prisma.$transaction(async (tx) => {
      // 1. Check if user exists (or let the create fail if email is unique)
      const existingUser = await tx.user.findUnique({ where: { email } });
      if (existingUser) {
        throw new Error("EMAIL_EXISTS");
      }

      // 2. Create User
      const user = await tx.user.create({
        data: {
          name,
          email,
          phone,
          password: hashedPassword,
          role: usertype === "teacher" ? Role.TEACHER : Role.STUDENT,
        },
      });

      // 3. Create Role-Specific Record
      if (user.role === Role.TEACHER) {
        await tx.teacher.create({ data: { userId: user.id } });
      } else {
        await tx.student.create({ data: { userId: user.id } });
      }

      // 4. Create Profile (Common for both)
      await tx.profile.create({
        data: {
          userId: user.id,
          firstName: name, // Note: You might want to split name into first/last
          email: email,
          phoneNumber: phone,
        },
      });

      return user;
    });

    // Create session AFTER transaction succeeds
    await createSession(newUser.id);

  } catch (error: any) {
    if (error.message === "EMAIL_EXISTS") {
      return { errors: { email: ["Email already in use"] } };
    }
    
    console.error("Signup error:", error);
    return {
      errors: { general: ["Something went wrong. Please try again."] },
    };
  }
  return { success: true };
}

 
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete({ name: "session", path: "/" });
  return redirect("/");
}

export async function login(state: FormState, formData: FormData): Promise<FormState> {
  try {
    // Validate form fields
    const ValidatedFields = LoginFormSchema.safeParse({
      usertype: formData.get('usertype'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    // 1️⃣ Validation failed
    if (!ValidatedFields.success) {
      return {
        errors: ValidatedFields.error.flatten().fieldErrors,
      };
    }

    const { usertype, email, password } = ValidatedFields.data;

    // 2️⃣ Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { errors: { email: ['No account found with this email.'] } };
    }
    // 3️⃣ Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { errors: { password: ['Incorrect password.'] } };
    }
    // 4️⃣ Verify user role
    const expectedRole = usertype === 'teacher' ? Role.TEACHER : Role.STUDENT;  
    if (user.role !== expectedRole) {
      return { errors: { usertype: ['User role does not match.'] } };
    }
    // 5️⃣ Create user session
    await createSession(user.id);
    return { success: true };
  } catch (error) {
    console.error('Error during login:', error);
    return {
      errors: {
        general: ['An unexpected error occurred. Please try again later.'],
      },
    };
  }
}
