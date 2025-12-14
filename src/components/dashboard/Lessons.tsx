'use client'
import { ArrowRight, Book } from 'lucide-react'
import LessonsItem from './LessonsItem'

type LessonsProps = {
    lessons?: ({
    progress: {
        id: string;
        studentId: string;
        progress: number;
        completed: boolean;
        score: number | null;
        lessonId: string;
    }[];
} & {
    id: string;
    title: string;
    author: string;
    date: Date;
    duration: number;
    isLive: boolean;
    courseId: string;
})[] | undefined
}
const Lessons = ({lessons}: LessonsProps) => {
    // const Lessons = [
    //     {
    //         title: 'Introduction to Product Management',
    //         author: 'Dr. Amaka Umeh',
    //         date: 'Tomorrow at 10:00 AM',
    //         duration: '45 min',
    //         progress: '',
    //         text: 'Join Live'
    //     },
    //     {
    //         title: 'Introduction to Product Management',
    //         author: 'Dr. Amaka Umeh',
    //         date: 'Tomorrow at 10:00 AM',
    //         duration: '45 min',
    //         progress: '65%',
    //         text: 'Join Live'
    //     },
    //     {
    //         title: 'Introduction to Product Management',
    //         author: 'Dr. Amaka Umeh',
    //         date: 'Tomorrow at 10:00 AM',
    //         duration: '45 min',
    //         progress: '65%',
    //         text: 'Join Live'
    //     }
    // ]
  return (
    <div className='mt-16 rounded-lg'>
      <div className='bg-gray-800 text-white flex justify-between p-4 rounded-t-lg'>
        <div className='flex gap-2'>
            <Book/>
            <h3>Your Lessons</h3>
        </div>
        <div className='flex gap-2'>
            <h3>View All</h3>
            <ArrowRight/>
        </div>
      </div>
      <div className='p-4 bg-gray-300 flex flex-col gap-3 rounded-b-lg'>
        {lessons?.map((lesson, index) => (
            <LessonsItem index={index} lesson={lesson}/>
        ))}
      </div>
    </div>
  )
}

export default Lessons
