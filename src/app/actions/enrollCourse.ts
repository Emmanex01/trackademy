'use server'
import { getUser } from "@/lib/dal";
import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";

export async function enrollCourse(courseId: string) {
  try {
    const user = await getUser();
    
    if (!user) redirect('/login'); 
    if (user.role !== "STUDENT") {
      return { status: 'error', message: 'Only Students are allowed to enroll.' };
    }

    const student = await prisma.student.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });

    if (!student) {
      return { status: 'error', message: 'Student profile not found.' };
    }

    // 1. Verify the course actually exists first
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });
    if (!course) return { status: 'error', message: 'Course not found.' };

    // 2. Attempt to create the enrollment
    // We rely on a Unique Constraint in the DB (studentId + courseId) 
    // to prevent duplicates safely.
    await prisma.enrollment.create({
      data: { 
        studentId: student.id, 
        courseId 
      },
    });

    // 3. Clear the cache so the UI updates immediately
    revalidatePath(`/courses/${courseId}`);
    revalidatePath('/dashboard');

    return { status: 'success', message: 'Successfully enrolled!' };

  } catch (error: any) {
    // 4. Handle unique constraint violation (Prisma error P2002)
    if (error.code === 'P2002') {
      return { status: 'info', message: 'You are already enrolled in this course.' };
    }

    console.error("Enrollment error:", error);
    return { status: 'error', message: 'An unexpected error occurred.' };
  }
}