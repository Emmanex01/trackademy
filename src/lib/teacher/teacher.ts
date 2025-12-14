import prisma from "@/lib/prisma";

export async function getTeacherDashboard(userId: number | undefined) {
  // Fetch teacher + all courses + lessons + enrollments + student progress
  const teacher = await prisma.teacher.findUnique({
    where: { userId },
    include: {
      courses: {
        include: {
          lessons: {
            include: {
              progress: true
            }
          }
        }
      }
    }
  });

  if (!teacher) {
    return {
      totalCourses: 0,
      totalLessons: 0,
      totalStudents: 0,
      avgCompletion: 0,
      upcomingLiveLessons: [],
      courseStats: []
    };
  }

  const courses = teacher.courses;

  // 🔹 Total courses
  const totalCourses = courses.length;

  // 🔹 Total lessons across all courses
  const totalLessons = courses.reduce(
    (sum, course) => sum + course.lessons.length,
    0
  );

  // 🔹 Total unique students across all courses
  const enrollments = await prisma.enrollment.findMany({
    where: {
      courseId: {
        in: courses.map(c => c.id)
      }
    },
    select: { studentId: true }
  });

  const totalStudents = new Set(enrollments.map(e => e.studentId)).size;

  // 🔹 Average course completion %
  let totalPercent = 0;

  courses.forEach(course => {
    const lessons = course.lessons;

    if (lessons.length === 0) return;

    const coursePercent =
      lessons.reduce((sum, lesson) => {
        const progress = lesson.progress[0]?.progress ?? 0;
        return sum + progress;
      }, 0) / lessons.length;

    totalPercent += coursePercent;
  });

  const avgCompletion =
    totalCourses === 0 ? 0 : Math.round(totalPercent / totalCourses);

  // 🔹 Upcoming live lessons
  const upcomingLiveLessons = courses
    .flatMap(c => c.lessons)
    .filter(
      l => l.isLive && l.date > new Date()
    )
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  // 🔹 Per-Course Statistics (optional UI use)
  const courseStats = courses.map(course => {
    const lessons = course.lessons;
    const totalLessons = lessons.length;

    const avgProgress =
      totalLessons === 0
        ? 0
        : Math.round(
            lessons.reduce((sum, l) => sum + (l.progress[0]?.progress ?? 0), 0) /
            totalLessons
          );

    return {
      id: course.id,
      name: course.courseName,
      totalLessons,
      avgProgress
    };
  });

  return {
    totalCourses,
    totalLessons,
    totalStudents,
    avgCompletion,
    upcomingLiveLessons,
    courseStats
  };
}

export async function getTeacherLessons(userId: number | undefined) {
  const teacher = await prisma.teacher.findUnique({
    where: { userId },
    include: {
      courses: {
        include: {
          lessons: true
        }
      }
    }
  });
  if (!teacher) {
    return [];
  }

  const lessons = teacher.courses.flatMap(c => c.lessons);
  return lessons;
}

export async function getTeachersIdAndName(userId: number) {
  if (!userId) return null;
  const teacher = await prisma.teacher.findUnique({
    where: { userId },
    select: {
      id: true,
      user: {
        select: {
          name: true // This gets the name from the 'User' table
        }
      }
    }
  });

  if (!teacher) {
    console.log("Teacher profile not found. Creating one now...");
    try {
        await prisma.teacher.create({
        data: {
          userId: userId
        }
      });
      return getTeachersIdAndName(userId);
    } catch (error) {
      console.error("Error creating teacher profile:", error);
      return null;
    }
    
  }
  return teacher;
}
