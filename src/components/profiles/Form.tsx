import { User } from 'lucide-react'
import React from 'react'

const ProfileForm = () => {
  return (
    <div className='p-4 font-bold'>
      <div className='flex gap-2'>
        <User/>
        <h2>Personal Information</h2>
      </div>
      <form action="" className='flex flex-col gap-6 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 font-medium gap-6'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="firstName">First Name</label>
                <input 
                    id='firstName' 
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='first name'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    id='lastName'
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='last name'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="location">Location</label>
                <input 
                    id='location'
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='Asaba, Nigeria'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="phone">Phone Number</label>
                <input 
                    id='phone'
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='234'
                />
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input 
                id='email'
                type="text" 
                className='outline-0 p-3 bg-gray-400 rounded-lg'
                placeholder='example@gmail.com'
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="bio">Bio</label>
            <input 
                id='bio'
                type="text" 
                className='outline-0 p-3 bg-gray-400 rounded-lg'
                placeholder='last name'
            />
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
