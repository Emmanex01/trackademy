import React from 'react'
import CourseDashboard from '../_components/CourseMangement'
import Header from '@/components/dashboard/Header'
import UpcomingLessons from '../_components/UpcomingLessons'

const page = () => {
  return (
    <div>
      <Header name="Course Management" description="Manage your courses, lessons, and student progress"/>
      <CourseDashboard/>
      <UpcomingLessons/>
    </div>
  )
}

export default page
