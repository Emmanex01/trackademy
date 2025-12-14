import prisma from "@/lib/prisma";
import getStudentCourses from "../student/course";
 // Assuming the function at the bottom is in this file or imported

// 1. Define the shape your UI expects
export type CourseCard = {
  id: string;
  title: string;
  description: string | null;
  starNumber: number;
  progress: string;
  author: string;
  status: string;
};

export async function getUserDB(userId: number) {
  // 1. Get user role
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      role: true,
      student: { select: { userId: true } },
      teacher: { select: { userId: true } },
    },
  });

  if (!user) return [];

  user
  // ------------------------------------------------------
  // STUDENT → Return enrolled courses (formatted)
  // ------------------------------------------------------
  // if (user.role === "STUDENT") {
  //   // Re-use your existing function since it already formats correctly
  //   return await getStudentCourses(userId);
  // }

  // let rawCourses:any = [];

  // ------------------------------------------------------
  // TEACHER → Return courses created by this teacher
  // ------------------------------------------------------
  // if (user.role === "TEACHER") {
  //   rawCourses = await prisma.course.findMany({
  //     where: {
  //       teacher: { userId: userId } 
  //     },
  //     include: {
  //       teacher: {
  //         include: { user: true },
  //       },
  //       lessons: true,
  //     },
  //   });
  // }
}