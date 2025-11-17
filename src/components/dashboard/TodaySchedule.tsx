import React from 'react'

const TodaySchedule = () => {
  return (
    <>
      <div className="bg-gray-200 rounded-2xl">

        <div className='flex justify-between align-middle bg-gray-700 p-3 rounded-t-xl'>
          <div className='flex justify-between align-middle text-white w-full'>

            <span className='text-lg'>
              <i className='bxrds  bx-book-alt mr-1.5'></i>
              Today's schedule
            </span>

            <span className=''>
              view calendar
              <i className='bxrds  bx-chevron-right'></i>
            </span>

          </div>

        </div>

        <div className='h-full p-4 border border-red-600 my-5'>

          {/* One box */}
          <div className='flex justify-between align-middle border border-green-700 p-3 py-5 my-5 rounded-xl'>
            <div className='flex justify-start gap-3'>
              <div className='h-12 w-12 border rounded-full'></div>

              <div>
                <p className='text-sm font-semibold mb-2'>User Reasearch Methods</p>
                <div className='text-xs flex align-middle justify-start gap-3'>
                  <span className='flex align-middle'>UX Design Fundamentals</span>
                  <span className='flex align-bottom'><i className='bxrds bx-alarm-check font-semibold text-sm'></i>  Today at 2:00PM</span>
                  <span className='flex align-bottom'><i className='bxrds  bx-calendar font-semibold text-sm'    ></i> UX Design Fundamentals</span>

                </div>
              </div>
            </div>

            <button className='bg-gray-600 text-white p-3 rounded-lg'>
              <i className='bxrds  bx-play mr-2'></i>
              <span>Start Live</span>
            </button>
          </div>

          <div className='flex justify-between align-middle border border-green-700 p-3 py-5 my-5'>
            <div className='flex justify-start gap-3'>
              <div className='h-12 w-12 border rounded-full'></div>

              <div>
                <p className='text-sm font-semibold mb-2'>User Reasearch Methods</p>
                <div className='text-xs flex align-middle justify-start gap-3'>
                  <span className='flex align-middle'>UX Design Fundamentals</span>
                  <span className='flex align-bottom'><i className='bxrds bx-alarm-check font-semibold text-sm'></i>  Today at 2:00PM</span>
                  <span className='flex align-bottom'><i className='bxrds  bx-calendar font-semibold text-sm'    ></i> UX Design Fundamentals</span>

                </div>
              </div>
            </div>

            <button className='bg-gray-600 text-white p-3 rounded-lg'>
              <i className='bxrds  bx-play mr-2'></i>
              <span>Start Live</span>
            </button>
          </div>

          <div className='flex justify-between align-middle border border-green-700 p-3 py-5 my-5'>
            <div className='flex justify-start gap-3'>
              <div className='h-12 w-12 border rounded-full'></div>

              <div>
                <p className='text-sm font-semibold mb-2'>User Reasearch Methods</p>
                <div className='text-xs flex align-middle justify-start gap-3'>
                  <span className='flex align-middle'>UX Design Fundamentals</span>
                  <span className='flex align-bottom'><i className='bxrds bx-alarm-check font-semibold text-sm'></i>  Today at 2:00PM</span>
                  <span className='flex align-bottom'><i className='bxrds  bx-calendar font-semibold text-sm'    ></i> UX Design Fundamentals</span>

                </div>
              </div>
            </div>

            <button className='bg-gray-600 text-white p-3 rounded-lg'>
              <i className='bxrds  bx-play mr-2'></i>
              <span>Start Live</span>
            </button>
          </div>

        </div>


      </div>
    </>
  )
}

export default TodaySchedule