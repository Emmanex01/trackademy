'use server'
import { SignupFormSchema, FormState } from '../../lib/definitions'
import bcrypt from 'bcrypt'
import prisma from "@/lib/prisma";
import { Role } from '../generated/prisma/enums';

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  try {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
      usertype: formData.get('usertype'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
    });

    // 1️⃣ Validation failed
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { usertype, name, email, phone, password } = validatedFields.data;

    // 2️⃣ Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { errors: { email: ['This email is already in use.'] } };
    }

    // Check for existing user by email
    const existingNumber = await prisma.user.findUnique({ where: { phone } });
    if (existingNumber) {
      return { errors: { phone: ['This phone is already in use.'] } };
    }

    // 3️⃣ Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: usertype === 'teacher' ? Role.TEACHER : Role.STUDENT,
      },
    });

    // 4️⃣ Always return a FormState object
    return { success: true };
  } catch (error) {
    console.error('Error during signup:', error);
    return {
      errors: {
        general: ['An unexpected error occurred. Please try again later.'],
      },
    };
  }
}
