import { BookText, Clock3, icons, TrendingUp } from 'lucide-react'
import { Flame } from 'lucide-react'


type StudentStatsProps = {
    stats: {
    id: string;
    studentId: string;
    streak: number;
    activeCourses: number;
    weeklyHours: number;
    avgScore: number;
    } | null;
}

const StudentStats = ({stats}: StudentStatsProps) => {
    const StudentStats = [
        {
            title: "Day Streak",
            value: stats?.streak,
            icons: <Flame/>
        },
        {
            title: "Active Courses",
            value: stats?.activeCourses,
            icons: <BookText/>
        },
        {
            title: "This Week's Learning Hours",
            value: stats?.weeklyHours,
            icons: <Clock3/>
        },
        {
            title: "Avg Score",
            value: `${stats?.avgScore}%`,
            icons: <TrendingUp/>
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-4 my-4'>
      {StudentStats.map((stat, index) => (
        <div key={index} className='bg-gray-200 p-4 rounded-lg flex items-center justify-between gap-4'>
            <div>
                <span className='font-medium'>{stat.value}</span>
                <h3 className='text-sm'>{stat.title}</h3>
            </div>
            <div>
                <div className='bg-black text-white p-2 rounded-lg'>
                    {stat.icons}
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default StudentStats
