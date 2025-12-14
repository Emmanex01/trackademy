import prisma  from "@/lib/prisma";
import { getUser } from "../dal";

export async function getStudentDashboard(userId: number | undefined) {
  // Fetch all enrollment + course + lesson progress data
  const student = await prisma.student.findUnique({
    where: { userId },
    include: {
      stats: true,
      progresses: true,
      goals: true,
      activities: true,
      achievements: {
        include: {
          achievement: true,
        }
      },
      enrollments: {
        include: {
          course: {
            include: {
              lessons: {
                include: {
                  progress: true
                }
              }
            }
          }
        }
      }
    }
  });
  const enrollments = student?.enrollments || [];


  // Total Courses
  const totalCourses = enrollments.length;

  // Completed courses
  const completedCourses = enrollments.filter(e =>
  e.course.lessons.length > 0 &&
  e.course.lessons.every(lesson =>
    (lesson.progress[0]?.progress ?? 0) >= 100
  )
).length;


  // Overall progress
  const totalLessons = enrollments.reduce(
    (sum, e) => sum + e.course.lessons.length,
    0
  );
  console.log('Total Lessons:', totalLessons);

  const completedLessons = enrollments.reduce(
  (sum, e) =>
    sum + e.course.lessons.filter(
      l => (l.progress[0]?.progress ?? 0) >= 100
    ).length,
  0
);


  const progress = totalLessons === 0
    ? 0
    : totalLessons;

  const avgPercentProgress =  enrollments.reduce((sum, e) => {
    const courseLessons = e.course.lessons;
    if (courseLessons.length === 0) return sum;
    const courseProgress = courseLessons.reduce((lessonSum, lesson) => {
      return lessonSum + (lesson.progress[0]?.progress ?? 0);
    }, 0) / courseLessons.length;
    return sum + courseProgress;
  }, 0) / (totalCourses || 1);

  const progressPercent = Math.round(avgPercentProgress);

  return {
    totalCourses,
    completedCourses,
    progress,
    progressPercent
  };
}

export default async function getStudentCourses(userId: number | undefined) {
  const student = await prisma.student.findUnique({
    where: { userId },
    include: {
      stats: true,
      progresses: true,
      goals: true,
      activities: true,
      achievements: {
        include: {
          achievement: true,
        }
      },
      enrollments: {
        include: {
          course: {
            include: {
              lessons: {
                include: {
                  progress: true
                }
              }
            }
          }
        }
      }
    }
  });
  if (!student) {
    return (
      []
    );
  }
  const courses = student.enrollments.map(e => e.course);
  const formattedCourses = courses.map(course => {
    const totalLessons = course.lessons.length;

    const completed = course.lessons.filter(l =>
      l.progress.length > 0 && l.progress[0].completed
    ).length;

    const progress = totalLessons === 0
      ? 0
      : Math.round((completed / totalLessons) * 100);

    const hasLiveLesson = course.lessons.some(l => l.isLive);
    const id = course.id;
    const videoUrl = course.lessons[0]?.videoUrl || undefined;

    return {
      id,
      title: course.courseName,
      description: course.summary,
      starNumber: 4.9,
      progress: `${progress}%`,
      author: course.lessons[0]?.author || 'Unknown',
      status: hasLiveLesson ? "Live Now" : "Continue",
      videoUrl
    };
});

console.log(formattedCourses);
  return formattedCourses;
}