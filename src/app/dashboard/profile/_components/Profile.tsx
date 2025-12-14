'use client'
import ProfileForm from '@/components/profiles/Form'
import { Award, Bell, Book, Camera, Edit, GraduationCap, Search, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


type Props = {
    userProfile: {
    level: string | null;
    email: string | null;
    bio: string | null;
    avatarUrl: string | null;
    firstName: string | null;
    lastName: string | null;
    location: string | null;
    phoneNumber: string | null;
    discipline: string | null;
    university: string | null;
} | null
}
const Profile = ({ userProfile}: Props) => {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
          <header className='mb-4'>
            <div className='flex justify-between mb-2'>
                <h1 className='font-medium text-4xl'>My Profile</h1>
                <div className='flex items-center gap-2'>
                <div className='flex items-center rounded-lg p-2 gap-1'>
                    <button onClick={() => setIsEditing(true)} className='btn btn-neutral'>
                        <Edit size={16}/>
                        <span className='text-sm'>Edit Profile</span>
                    </button>
                </div>
                <Link href='/notification' className='bg-gray-300 p-2 rounded-full relative '>
                    <Bell/>
                    <span className='absolute w-5 h-5 text-sm flex items-center justify-center -top-1 -right-1 rounded-full bg-red-400'>0</span>
                </Link>
                </div>
            </div>
            <p className='text-sm'>Manage your account settings and personal information</p>
        </header>
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
            <ProfileForm 
                userProfile={userProfile}
                isEditing={isEditing}
                onSaved={() => setIsEditing(isEditing => !isEditing)}
            />
          </div>
        </div>
        </div>
  )
}

export default Profile
