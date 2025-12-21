import { Bell, Search, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface headerProp  {
    name: string,
    description: string
}

const Header = ({name, description} : headerProp) => {
  return (
    <header className='mb-4 space-y-2'>
        <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
            {/* Title Section */}
            <div>
                <h1 className='font-medium text-2xl md:text-4xl'>{name}</h1>
                {/* Description moved inside here if you want it next to title, 
                    or keep below. I kept the title wrapper for cleaner alignment */}
            </div>

            {/* Action Section (Search + Icons) */}
            <div className='flex items-center gap-2 w-full md:w-auto'>
                {/* Search Bar */}
                <div className='flex items-center rounded-lg p-2 gap-1 bg-gray-300 flex-1 md:w-64'>
                    <Search className='text-gray-400 w-5 h-5'/>
                    <input 
                        type="text" 
                        className='outline-none bg-transparent w-full text-sm placeholder:text-gray-500'
                        placeholder='Search ....'
                    />
                </div>

                {/* Notification Icon */}
                <Link href='/notification' className='bg-gray-300 p-2 rounded-full relative shrink-0 hover:bg-gray-400 transition-colors'>
                    <Bell className="w-5 h-5"/>
                    <span className='absolute w-4 h-4 text-[10px] flex items-center justify-center -top-1 -right-1 rounded-full bg-red-400 text-white'>0</span>
                </Link>

                {/* Profile Icon */}
                <Link href='/dashboard/profile' className='bg-gray-800 text-gray-200 p-2 rounded-full shrink-0 hover:bg-gray-700 transition-colors'>
                    <User className="w-5 h-5"/>
                </Link>
            </div>
        </div>
        
        {/* Description Text */}
        <p className='text-sm text-gray-500'>{description}</p>
    </header>
  )
}

export default Header