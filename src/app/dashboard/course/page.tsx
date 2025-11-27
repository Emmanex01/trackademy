import Header from '@/components/dashboard/Header'
import StudentCourses from '@/components/dashboard/StudentCourses'
import StudentCourseStats from '@/components/dashboard/StudentCourseStat'
import prisma from '@/lib/prisma'
import getStudentCourses from '@/lib/student/course'
import { get } from 'http'
import React from 'react'

const   CoursePage = async () => {
  const userId = 1; // get from auth session
  const formattedCourses = await getStudentCourses(userId);
  return (
    <div>
      <Header name='My Course' description='Continue your learning journey and track your progress'/>
      <StudentCourseStats/>
      <StudentCourses courses={formattedCourses}/>
    </div>
  )
}

export default CoursePage
