// app/teacher/layout.tsx
import React from "react";
import Stats from '@/components/dashboard/Stats'
import TodaySchedule from "@/components/dashboard/TodaySchedule";
import StudentPerformance from "@/components/dashboard/StudentPerformance";
import CoursePerformance from "@/components/dashboard/CoursePerformance";
import PerformanceMetrics from "@/components/dashboard/PerformanceMetrics";
import RecentActivities from "@/components/dashboard/RecentActivities";
import QuickActions from "@/components/dashboard/QuickActions";


export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="teacher-layout">
      <nav>Teacher Navbar</nav>
      <main>
        {/* DIDNT KNOW WHERE TO RENDER THIS SO IM GONNA PUT THEM HERE FOR NOW */}

        <Stats />

        <TodaySchedule />

        <div className="block lg:flex align-bottom gap-5">
          <div className="border border-red-500 mb-10 flex-1">
            <StudentPerformance />

            <CoursePerformance />
          </div>

          <div className="flex-1">
            <PerformanceMetrics />

            <RecentActivities />

            <QuickActions />
          </div>
        </div>




      </main>
    </div>
  )
}