import { getStudentDashboard } from '@/lib/student/course';
import { BookText, Clock3, icons, TrendingUp } from 'lucide-react'
import { Flame } from 'lucide-react'

const StudentCourseStats = async () => {
    const userId = 1; // Placeholder for actual student ID
    const studentValue = await getStudentDashboard(userId); // Placeholder for actual student value
    const StudentStats = [
        {
            title: "Total Courses",
            value: studentValue.totalCourses,
            icons: <Flame/>
        },
        {
            title: "Completed",
            value: studentValue.completedCourses,
            icons: <Clock3/>
        },
        {
            title: "In progress",
            value: studentValue.progress,
            icons: <TrendingUp/>
        },
        {
            title: "Avg Score",
            value: studentValue.progressPercent + '%',
            icons: <BookText/>
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-4 my-4'>
      {StudentStats.map((stat, index) => (
        <div key={index} className='bg-gray-200 p-4 rounded-lg flex items-center justify-center gap-4'>
            <div>
                <div className='bg-black text-white p-2 rounded-lg'>
                    {stat.icons}
                </div>
            </div>
            <div>
                <span className='font-medium'>{stat.value}</span>
                <h3 className='text-sm'>{stat.title}</h3>
            </div>
        </div>
      ))}
    </div>
  )
}

export default StudentCourseStats
