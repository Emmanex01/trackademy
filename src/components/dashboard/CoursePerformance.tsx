import React from 'react'
import { Users, ChartColumn } from 'lucide-react'


const CoursePerformance = () => {
  return (
    <div className="bg-gray-200 rounded-2xl my-5">
      <div className='flex justify-between align-middle bg-gray-700 p-3 rounded-t-xl'>
        <div className='flex justify-between align-middle text-white w-full'>
          <span className='text-lg flex align-middle'>
            <ChartColumn className="mr-2" />
            Course Performance
          </span>
        </div>
      </div>

      {/* THE BOXES */}

      <div className='border border-red-600 p-3'>

        <div className='border border-green-400 px-2 py-3'>
          <p className='font-semibold mb-3'>Product Management 101</p>

          <div className='flex justify-between gap-10'>

            <div className='flex-1'>
              <div className='flex justify-between align-baseline mb-2 text-sm'>
                <span>Engagement</span>
                <span>75%</span>
              </div>

              <div className="w-full h-3.5 bg-gray-400 rounded-2xl m-0 flex">
                <div className="h-full w-9/12 bg-gray-700 rounded-2xl"></div>
              </div>
            </div>

            <div className='flex-1 border text-right'>
              <div className='flex justify-between align-baseline mb-2 text-sm'>
                <span>Completion</span>
                <span>75%</span>
              </div>

              <div className="w-full h-3.5 bg-gray-400 rounded-2xl m-0 flex">
                <div className="h-full w-9/12 bg-gray-700 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CoursePerformance