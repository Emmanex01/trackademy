import React from 'react'
import { ChartColumn } from 'lucide-react'

const PerformanceMetrics = () => {
  return (
    <div className='bg-gray-200 rounded-2xl mb-10'>
      <div className='flex justify-between align-middle bg-gray-700 p-3 rounded-t-xl'>
        <div className='flex justify-between align-middle text-white w-full'>
          <span className='text-lg flex align-middle'>
            <ChartColumn className="mr-2" />
            Performance Metrics
          </span>
        </div>
      </div>

      {/* THE BOXES */}

      <div className='p-5'>

        <div className='flex-1 mb-8'>
          <div className='flex justify-between align-baseline mb-2'>
            <span>Engagement</span>

            <div className='flex justify-between align-baseline gap-3'>
              <span className='font-semibold'>75%</span>
              <span className=''> +5%</span>
            </div>
          </div>

          <div className="w-full h-3.5 bg-gray-400 rounded-2xl m-0 flex">
            <div className="h-full w-9/12 bg-gray-700 rounded-2xl"></div>
          </div>
        </div>

        <div className='flex-1 mb-8'>
          <div className='flex justify-between align-baseline mb-2'>
            <span>Engagement</span>

            <div className='flex justify-between align-baseline gap-3'>
              <span className='font-semibold'>75%</span>
              <span className=''> +5%</span>
            </div>
          </div>

          <div className="w-full h-3.5 bg-gray-400 rounded-2xl m-0 flex">
            <div className="h-full w-9/12 bg-gray-700 rounded-2xl"></div>
          </div>
        </div>

        <div className='flex-1 mb-8'>
          <div className='flex justify-between align-baseline mb-2'>
            <span>Engagement</span>

            <div className='flex justify-between align-baseline gap-3'>
              <span className='font-semibold'>75%</span>
              <span className=''> +5%</span>
            </div>
          </div>

          <div className="w-full h-3.5 bg-gray-400 rounded-2xl m-0 flex">
            <div className="h-full w-9/12 bg-gray-700 rounded-2xl"></div>
          </div>
        </div>

        <div className='flex-1 mb-8'>
          <div className='flex justify-between align-baseline mb-2'>
            <span>Engagement</span>

            <div className='flex justify-between align-baseline gap-3'>
              <span className='font-semibold'>75%</span>
              <span className=''> +5%</span>
            </div>
          </div>

          <div className="w-full h-3.5 bg-gray-400 rounded-2xl m-0 flex">
            <div className="h-full w-9/12 bg-gray-700 rounded-2xl"></div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default PerformanceMetrics