import NavMenu from '@/components/dashboard/NavMenu'
import { Bell, Search, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const dashboardLayout = ({children}: {children : React.ReactNode}) => {
  return (
    <div className='flex'>
        <nav className='w-1/5'>
          <NavMenu/>
        </nav>
        <div className='w-4/5 p-6'>
          <header>
            <div className='flex justify-between '>
              <h1 className='font-medium text-4xl'>Hello User</h1>
              <div className='flex items-center gap-2'>
                <div className='flex items-center rounded-lg p-2 gap-1 bg-gray-300'>
                  <Search className='text-gray-400'/>
                    <input 
                        type="text" 
                        className='outline-none'
                        placeholder='Search ....'
                    />
                </div>
                <Link href='/notification' className='bg-gray-300 p-2 rounded-full relative '>
                  <Bell/>
                  <span className='absolute w-5 h-5 text-sm flex items-center justify-center -top-1 -right-1 rounded-full bg-red-400'>0</span>
                </Link>
                <Link href='/profile' className='bg-gray-800 text-gray-200 p-2 rounded-full'>
                  <User/>
                </Link>
              </div>
            </div>
            <p>Welcome to your dashboard</p>
          </header>
          <main>{children}</main>
        </div>  
    </div>
  )
}

export default dashboardLayout
