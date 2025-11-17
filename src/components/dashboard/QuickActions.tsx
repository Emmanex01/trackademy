import React from 'react'
import { Plus, Users, MessageCircleOff } from 'lucide-react'

const QuickActions = () => {
  return (
    <div className='bg-gray-200 p-8 rounded-2xl'>

      <p className='text-2xl mb-4 font-semibold'>Quick Actions</p>

      <button className='flex items-center gap-2 justify-center text-center mx-auto my-8 bg-gray-800 text-white p-2 px-12 rounded-xl'>
        <Plus />
        Create New Lesson
      </button>

      <button className='rounded-xl flex gap-2 items-center my-8 justify-center p-2 mx-auto px-16 border'>
        <Users />
        Manage Students
      </button>

      <button className='flex items-center gap-2 justify-center p-2 px-12 border rounded-xl mx-auto'>
        <MessageCircleOff />
        Send Anouncement
      </button>

    </div>
  )
}

export default QuickActions