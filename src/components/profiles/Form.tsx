import { updateProfile } from '@/app/actions/profileForm';
import { ProfileFormValues } from '@/lib/definitions';
import { User } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {
    userProfile?: {
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
} | null,
    isEditing: boolean,
    onSaved: () => void,
}

const ProfileForm = ({userProfile, isEditing, onSaved}: Props ) => {
    const { register, handleSubmit } = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: userProfile?.firstName ?? '',
      lastName: userProfile?.lastName ?? '',
      location: userProfile?.location ?? '',
      email: userProfile?.email ?? '',
      phoneNumber: userProfile?.phoneNumber ?? '',
      bio: userProfile?.bio ?? '',
    },
  });

  return (
    <div className='p-4 font-bold'>
      <div className='flex gap-2'>
        <User/>
        <h2>Personal Information</h2>
      </div>
      <form action={updateProfile} className='flex flex-col gap-6 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 font-medium gap-6'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="firstName">First Name</label>
                <input 
                    {...register('firstName')}
                    disabled={!isEditing}
                    id='firstName' 
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='first name'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    {...register('lastName')}
                    disabled={!isEditing}
                    id='lastName'
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='last name'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="location">Location</label>
                <input 
                    {...register('location')}
                    disabled={!isEditing}
                    id='location'
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='Asaba, Nigeria'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="phone">Phone Number</label>
                <input 
                    {...register('phoneNumber')}
                    disabled={!isEditing}
                    id='phoneNumber'
                    type="text" 
                    className='outline-0 p-3 bg-gray-400 rounded-lg'
                    placeholder='234'
                />
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input 
                {...register('email')}
                disabled={!isEditing}
                id='email'
                type="text" 
                className='outline-0 p-3 bg-gray-400 rounded-lg'
                placeholder='example@gmail.com'
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="bio">Bio</label>
            <input 
                {...register('bio')}
                disabled={!isEditing}
                id='bio'
                type="text" 
                className='outline-0 p-3 bg-gray-400 rounded-lg'
                placeholder='last name'
            />
        </div>
        {isEditing && (
            <button onClick={() => onSaved} type="submit" className="btn btn-primary">
            Save Changes
            </button>
        )}
      </form>
    </div>
  )
}

export default ProfileForm
