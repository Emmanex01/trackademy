import { User } from 'lucide-react'
import React from 'react'

const StudentPerformace = () => {
    const StudentsPerformace = [
        {
            name: "Sophia Johnson",
            title: "Product Management 101",
            lastActive: 2,
            progress: 95,
            status: 'Excellent'
        },
        {
            name: "Daniel Eze",
            title: "UX Design Fundamentals",
            lastActive: 5,
            progress: 90,
            status: 'Good'
        },
        {
            name: "Motunrayo Adebayo",
            title: "Digital Marketing",
            lastActive: 2,
            progress: 95,
            status: 'Behind'
        }
    ]
  return (
    <div>
      <div className='flex gap-2 p-4 bg-gray-800 text-white rounded-lg'>
        <User/>
        <h2 className='font-semibold text-xl'>Students Performance</h2>
      </div>
      <div className='flex flex-col p-8 justify-center bg-gray-300'>
        {
            StudentsPerformace.map((studentPer, index) => (
                <div key={index} className='flex gap-4 p-2 border rounded-lg'>
                    <div className='flex items-center justify-center'>
                        <div className='w-8 h-8 bg-gray-700 rounded-full'></div>
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <h3 className='font-semibold'>{studentPer.name}</h3>
                        <div className='flex gap-2 items-center text-sm'>
                            <p>Last active: {studentPer.lastActive} min ago</p>
                            <p>{studentPer.title}</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[100px] h-2 bg-gray-400 rounded-lg'>
                                    <div className='w-[65%] h-full bg-gray-900 rounded-lg'></div>
                                </div>
                                <p>{studentPer.progress}%</p>
                            </div>
                            <div className='p-2 bg-gray-800 text-white rounded-lg text-sm'>{studentPer.status}</div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default StudentPerformace
