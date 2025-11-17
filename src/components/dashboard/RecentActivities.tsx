import React from 'react'

const RecentActivities = () => {
  return (
    <div className='bg-gray-200 rounded-2xl mb-8'>
      <div className='flex justify-between align-middle bg-gray-700 p-3 rounded-t-xl'>
        <div className='flex justify-between align-middle text-white w-full'>
          <span className='text-lg flex align-middle'>
            Recent Activities
          </span>
        </div>
      </div>

      {/* THE BOXES */}

      <ul className='list-disc p-5'>

        <li className='block border border-green-500 p-2 py-3'>
          <p><span className='font-semibold'>Sphia J.:</span> Question about market segmentation strategies.</p>

          <div className='flex items-center justify-start border border-red-500 my-4 text-sm'>
            <span className='h-fit'>5 min ago</span>
            <span className='h-2 w-2 bg-gray-700 mx-4 rounded-full'></span>
            <span className='h-fit'>Product Management 101</span>
          </div>
        </li>


        <li className='block border border-green-500 p-2 my-3'>
          <p><span className='font-semibold'>Sphia J.:</span> Question about market segmentation strategies.</p>

          <div className='flex items-center justify-start border border-red-500 my-4 text-sm'>
            <span className='h-fit'>5 min ago</span>
            <span className='h-2 w-2 bg-gray-700 mx-4 rounded-full'></span>
            <span className='h-fit'>Product Management 101</span>
          </div>
        </li>



      </ul>


    </div>
  )
}

export default RecentActivities