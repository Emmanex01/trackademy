import formatDate from '@/lib/helper';
import { Aperture } from 'lucide-react'
import React from 'react'

type LearningGoalsProps = {
  goals?: {
        id: string;
        studentId: string;
        title: string;
        progress: number;
        description: string;
        targetDate: Date;
    }[] | undefined;
}

const LearningGoals = ({goals}: LearningGoalsProps) => {
    // const goals = [
    //     { title: 'Complete React Course', date: 'Due Dec 20, 2025',  progress: '80%' },
    //     { title: 'Finish Product Management Project', date: 'Due Dec 20, 2025', progress: '60%' },
    //     { title: 'Read 5 Articles This Week', date: 'Due Dec 20, 2025', progress: '40%' },
    // ]
  return (
    <div className='mt-16'>
      <div className='flex gap-2 bg-gray-800 text-white p-4 rounded-t-lg'>
        <Aperture/>
        <h2 className='font-medium'>Learning Goals</h2>
      </div>
      <div className='bg-gray-300 p-4 flex flex-col gap-4 rounded-b-lg'>
        {goals?.map((goal, index) => (
            <div key={index} className=''>
                <div className='flex justify-between'>
                    <h3 className='font-medium'>{goal.title}</h3>
                    <p className='text-sm'>{formatDate(goal.targetDate.toString())}</p>
                </div>
                <div className='flex justify-between text-sm'>
                    <p>Progress</p>
                    {`${goal.progress}%`}
                </div>
                <div className='w-full h-2 bg-gray-400 rounded-lg my-2'>
                    <div 
                      className='w-[80%] h-full bg-gray-900 rounded-lg'
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default LearningGoals
