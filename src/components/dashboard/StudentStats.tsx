import { BookText, Clock3, icons, TrendingUp } from 'lucide-react'
import { Flame } from 'lucide-react'
import Stats from '@/components/dashboard/Stats'

type StudentStatsProps = {
        stats: {
        streak: number;
        activeCourses: number;
        weeklyHours: number;
        avgScore: number;
        id: string;
        studentId: string;
    } | null
}
const StudentStats = ({stats}: StudentStatsProps) => {
    const StudentStats = [
        {
            title: "Day Streak",
            value: stats?.streak,
            icon: <Flame/>
        },
        {
            title: "Active Courses",
            value: stats?.activeCourses,
            icon: <BookText/>
        },
        {
            title: "This Week's Learning Hours",
            value: stats?.weeklyHours,
            icon: <Clock3/>
        },
        {
            title: "Avg Score",
            value: `${stats?.avgScore}%`,
            icon: <TrendingUp/>
        },
    ]
  return <Stats items={StudentStats}/>
    
}

export default StudentStats
