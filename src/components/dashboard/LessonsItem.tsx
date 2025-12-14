import { Calendar, Play, User, Watch } from 'lucide-react';
import React from 'react'


type lessonItemProp = {
    index: number,
    lesson: {
    progress?: {
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
}
}
const LessonsItem = ({index, lesson}: lessonItemProp) => {
  return (
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
                            {
                                lesson.progress ? 
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
                                : <div></div>
                            }
                            
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
  )
}

export default LessonsItem
