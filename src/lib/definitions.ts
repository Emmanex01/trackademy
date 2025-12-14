import { Role } from '@/app/generated/prisma/enums';
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
  message?: string;
};

export type SessionPayload = {
  sessionId: number;
  role: Role;
  expiresAt: Date;
}

// export const createCourseSchema = z.object({
//   courseName: z.string().min(3, "Course name must be at least 3 characters"),
//   summary: z.string().optional(),
//   teacherId: z.string().min(1, "A teacher must be selected"),
//   duration: z
//     .number({ message: "Duration must be a number" })
//     .min(1, "Duration must be at least 1 hour"),
//   startDate: z.string().refine(value => !isNaN(Date.parse(value)), {
//     message: "Invalid date"
//   })
// });

// export type CreateCourseSchema = z.infer<typeof createCourseSchema>;
const lessonSchema = z.object({
title: z.string().min(1, "Title is required"),
author: z.string().min(1, "Author is required"),
videoUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
date: z.string().refine((v) => !v || !isNaN(Date.parse(v)), "Invalid date").optional(),
duration: z.number().min(1, "Must be at least 1 minute").optional()
});


const resourceSchema = z.object({
title: z.string().min(1, "Title is required"),
description: z.string().optional(),
categories: z.array(z.string()).optional(),
type: z.string().optional(),
author: z.string().optional()
});


export const createCourseSchema = z.object({
courseName: z.string().min(3, "Course name must be at least 3 characters"),
summary: z.string().optional(),
teacherId: z.string().min(1, "Select a teacher"),
duration: z.number().min(1, "Duration must be at least 1"),
startDate: z.string().refine((v) => !isNaN(Date.parse(v)), "Invalid date"),
lessons: z.array(lessonSchema).optional(),
resources: z.array(resourceSchema).optional()
});


export type CreateCourseFormValues = z.infer<typeof createCourseSchema>;

  export const profileFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  location: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
  bio: z.string().optional(),
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>;