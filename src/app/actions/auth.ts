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
  try {
    const validatedFields = SignupFormSchema.safeParse({
      usertype: formData.get("usertype"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { usertype, name, email, phone, password } =
      validatedFields.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { errors: { email: ["Email already in use"] } };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 1️⃣ Create User
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role:
          usertype === "teacher"
            ? Role.TEACHER
            : Role.STUDENT,
      },
    });

    // 2️⃣ Create profile based on role
    if (user.role === Role.TEACHER) {
      await prisma.teacher.create({
        data: { userId: user.id },
      });

      await prisma.profile.create({
        data: {
          userId: user.id,
          firstName: name,
          email: email,
          phoneNumber: phone,
        },
      });
    }

    if (user.role === Role.STUDENT) {
      await prisma.student.create({
        data: { userId: user.id },
      });

      await prisma.profile.create({
        data: {
          userId: user.id,
          firstName: name,
          email: email,
          phoneNumber: phone,
        },
      });
    }

    // 3️⃣ Create session
    await createSession(user.id);

    return { success: true, message: "Signup successful!" };
  } catch (error) {
    console.error("Signup error:", error);

    return {
      errors: {
        general: ["Something went wrong. Please try again."],
      },
    };
  }
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
