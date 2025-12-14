import { Clock3, TrendingUp, Users, Video } from 'lucide-react';
import React from 'react'
import Stats from '@/components/dashboard/Stats'

const teacherItems = (stats: any) => [
        {
            title: "Total Students",
            value: stats?.totalStudents,
            icon: <Users />,
        },
        {
            title: "Average Engagement",
            value: `${stats?.avgEngagement}%`,
            icon: <TrendingUp />,
        },
        {
            title: "This Week Activity",
            value: stats?.thisWeek,
            icon: <Clock3 />,
        },
        {
            title: "Live Sessions",
            value: stats?.liveSessions,
            icon: <Video/>,
        },
     ];


export default function TeacherStats ({stats}: any) {
  return <Stats items={teacherItems(stats)}/>
}


