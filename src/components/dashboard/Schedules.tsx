import { ArrowRight, Book } from 'lucide-react'
import LessonsItem from './LessonsItem'

type ScheduleProp = {
  activity: string,
  action: string,
  lessons: {
    id: string;
    title: string;
    author: string;
    videoUrl: string | null;
    date: Date;
    duration: number;
    isLive: boolean;
    courseId: string;
}[]
}
const Schedules = ({activity, action, lessons}: ScheduleProp) => {
  return (
    <div className='mt-16 rounded-lg'>
      <div className='bg-gray-800 text-white flex justify-between p-4 rounded-t-lg'>
        <div className='flex gap-2'>
            <Book/>
            <h3>{activity}</h3>
        </div>
        <div className='flex gap-2'>
            <h3>{action}</h3>
            <ArrowRight/>
        </div>
      </div>
      <div className='p-4 bg-gray-300 flex flex-col gap-3 rounded-b-lg'>
        {
          lessons?.length ? (
            lessons.map((lesson, index) => (
              <LessonsItem key={index} index={index} lesson={lesson} />
            ))
          ) : (
            <div>No lessons scheduled</div>
          )
        }
      </div>
    </div>
  )
}

export default Schedules
