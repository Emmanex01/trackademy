import { Session } from 'inspector/promises';
import { use } from 'react'
import * as z from 'zod'
 
export const SignupFormSchema = z.object({
  usertype: z.enum(['student', 'teacher']),
  name: z
    .string()
    .min(2, { error: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  phone: z
    .string()
    .min(10, { error: 'Please enter a valid phone number.' })
    .max(15, { error: 'Please enter a valid phone number.' })
    .trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),
})

export const LoginFormSchema = z.object({
  usertype: z.enum(['student', 'teacher']),
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),
})
 
export type FormState = {
  errors?: {
    usertype?: string[];
    name?: string[];
    email?: string[];
    phone?: string[];
    password?: string[];
    general?: string[];
  };
  success?: boolean;
};

export type SessionPayload = {
  sessionId: number;
  role: 'STUDENT' | 'TEACHER';
  expiresAt: Date;
}
