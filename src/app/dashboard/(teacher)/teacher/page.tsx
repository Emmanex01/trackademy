import Header from '@/components/dashboard/Header';
import Schedules from '@/components/dashboard/Schedules';
import Stats from '@/components/dashboard/Stats'
import TeacherStats from '@/components/dashboard/TeacherStats';
import React from 'react'
import StudentPerformace from './_components/StudentPerformace';
import RecentActivity from './_components/RecentActivities';
import PerformanceMetrics from './_components/PerformanceMatrics';
import QuickActions from './_components/QuickAction';
import CoursePerformance from './_components/CoursePerformance';
import { getUser } from '@/lib/dal';
import { getTeacherLessons } from '@/lib/teacher/teacher';
import { redirect } from 'next/navigation';

const TeacherPage = async () => {
  const stats = {
    totalStudents: 120,
    avgEngagement: 75,
    thisWeek: 15,
    liveSessions: 3
  };

  const courses = [
  {
    title: "Digital Marketing",
    engagement: 92,
    completion: 88,
  },
  {
    title: "UX Design Fundamentals",
    engagement: 78,
    completion: 82,
  },
  {
    title: "Product Management 101",
    engagement: 83,
    completion: 78,
  },
];

  const user = await getUser();
  if (user?.role !== "TEACHER") {
    redirect("/");
  }
  const lessons = await getTeacherLessons(user?.id);
  console.log("Teacher Id:", user?.id);
  console.log("Teacher Lessons:", lessons);
  // Add error handling in case teacher is not found
  if (!user) {
    return (
      <div>
        <Header name="Hello" description="Teacher not found" />
        <div>Teacher data not available</div>
      </div>
    )
  }

  // getTeacherData('cmiq7rswt00033wfkj9ynhe7x');
  return (
    <div>
      <Header name={`Hello ${user?.name}`} description="Welcome to your dashboard"/>
      <TeacherStats stats={stats}/>
      <Schedules activity="Today's Schedule" action='View Calender' lessons={lessons}/>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-2 mt-10'>
        <div className='flex flex-col gap-4'>
          <StudentPerformace/>
          <CoursePerformance courses={courses}/>
        </div>
        <div className='flex flex-col gap-4'>
          <PerformanceMetrics/>
          <RecentActivity/>
          <QuickActions/>
        </div>
      </div>
    </div>
  )
}

export default TeacherPage
