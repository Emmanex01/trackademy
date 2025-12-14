'use server'
import { getUser } from "@/lib/dal";
import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation';
import { toast } from "react-toastify";

export async function enrollCourse(courseId: string) {
  const user = await getUser();
  
  // Keep strict auth redirects on the server
  if (!user) redirect('/login'); 
  if (user.role !== "STUDENT") return { status: 'error', message: 'Only Student Are Allowed to Enroll Into a Course.' };

  const student = await prisma.student.findUnique({
    where: { userId: user.id },
    select: { id: true },
  });

  if (!student) return { status: 'error', message: 'You cannot be found in the DB' };

  const existing = await prisma.enrollment.findFirst({
    where: { studentId: student.id, courseId },
  });

  // CHANGE STARTS HERE
  if (existing) {
    // Return state instead of toasting/redirecting immediately
    return { status: 'info', message: 'You are already enrolled in this course.' };
  }

  await prisma.enrollment.create({
    data: { studentId: student.id, courseId },
  });
  
  // Return success status
  return { status: 'success', message: 'Successfully enrolled!' };
}