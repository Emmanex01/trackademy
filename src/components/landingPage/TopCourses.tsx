import ShowCoursesList from './ShowCoursesList';
import prisma from '@/lib/prisma';

const TopCourses = async () => {
  const courses = await prisma.course.findMany();
  return (
    <ShowCoursesList courses={courses} />
  )
}

export default TopCourses
