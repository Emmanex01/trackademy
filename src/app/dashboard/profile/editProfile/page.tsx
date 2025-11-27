import ProfileForm from '@/components/profiles/Form'
import { Award, Book, Camera, GraduationCap } from 'lucide-react'
import React from 'react'

const EditProfile = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row gap-2'>
      <div className='w-1/3 text-center'>
        <div className='bg-gray-900 flex flex-col items-center text-white  gap-6 py-12'>
            <div className='h-34 w-34 rounded-full bg-gray-300 relative'>
                <Camera size={35} className='absolute bottom-0 right-0'/>
            </div>
            <h2 className='text-2xl font-medium'>Sophia Johnson</h2>
            <div className='flex py-1 px-3 bg-gray-100 text-black gap-3 rounded-lg'>
                <GraduationCap/>
                Student 
            </div>
            <div className='text-sm space-y-2'>
                <p>University of Lagos</p>
                <p>Mass Communication</p>
                <p>300 level</p>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8 font-semibold'>
            <div className='flex flex-col items-center p-4 bg-gray-300 rounded-lg gap-2'>
                <div className='bg-gray-900 text-white p-2'>
                   <Award/> 
                </div>
                <p>6</p>
                <p>Certificate</p>
            </div>
            <div className='flex flex-col items-center p-4 bg-gray-300 rounded-lg gap-2'>
                <div className='bg-gray-900 text-white p-2'>
                   <Book/> 
                </div>
                <p>12</p>
                <p>Courses Enrolled</p>
            </div>
        </div>
      </div>
      <div className='w-2/3 bg-gray-300 rounded-lg'>
        <ProfileForm/>
      </div>
    </div>
  )
}

export default EditProfile
