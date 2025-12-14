import Header from '@/components/dashboard/Header'
import StudentCourses from '@/components/dashboard/StudentCourses'
import StudentCourseStats from '@/components/dashboard/StudentCourseStat'
import { getUserDB } from '@/lib/allData/data';
import { getUser } from '@/lib/dal'
import getStudentCourses from '@/lib/student/course';
import { redirect } from "next/navigation";

const CoursePage = async () => {
  const user = await getUser();
  console.log("User Info:", user);
  if (!user) redirect("/login");
  console.log("Fetching courses for user ID:", user.id);
  if (user.role !== "STUDENT") {
    redirect("/dashboard");
  }
  const formattedCourses = await getStudentCourses(user.id);
  console.log("Formatted Courses:", formattedCourses);

  return (
    <div>
      <Header
        name="My Course"
        description="Continue your learning journey and track your progress"
      />
      <StudentCourseStats />
      <StudentCourses courses={formattedCourses} />
    </div>
  );
};

export default CoursePage;

