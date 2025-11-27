'use client'
import { ArrowRight, Book, Calendar, Play, User, Watch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

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
            <div key={index} className='border rounded-lg px-6 py-4'>
                <div className='flex justify-between items-center '>
                    <div className='flex gap-8 items-center'>
                            <div className='w-8 h-8 rounded-full bg-gray-900'></div>
                            <div>
                                <div className='font-semibold text-[20px]'>{lesson.title}</div>
                                <div className='flex text-sm md:gap-2 items-center'>
                                    <div className='flex items-center'>
                                        <User/>
                                        {lesson.author}
                                    </div>
                                    <div className='flex items-center'>
                                        <Calendar/>
                                        {lesson.date.toDateString()}
                                    </div>
                                    <div className='flex items-center'>
                                        <Watch/>
                                        {lesson.duration}
                                    </div>
                            </div>
                            <div>
                            <div className='flex justify-between mt-4 mb-2 text-sm'>
                                <p>Progress</p>
                                <div>
                                    {(() => {
                                        const p = lesson.progress.find((e) => e.lessonId === lesson.id);
                                        return p ? `${p.progress}%` : "0%";
                                    })()}
                                </div> 
                            </div>
                            <div className='w-full h-2 bg-gray-400 rounded-lg'>
                                <div className='w-[65%] h-full bg-gray-900 rounded-lg'></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <button className='btn btn-neutral'>
                            <Play size={15}/>
                            {lesson.isLive ? 'Join Live' : 'Continue'}
                        </button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Lessons
