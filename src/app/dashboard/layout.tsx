import NavMenu from '@/components/dashboard/NavMenu'
import { getUser, verifySession } from '@/lib/dal'
import { Bell, Search, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const dashboardLayout = async ({children}: {children : React.ReactNode}) => {
  const session = await verifySession();
  console.log('Dashboard Layout Session:', session); // Debugging line
   const user = await getUser();
      console.log("User in Dashboard Page:", user); // Debugging line
    const userRole = user?.role?.toLowerCase();
    console.log("User Role:", userRole); // Debugging line
  return (
    <div className='flex'>
        <nav className='w-1/5'>
          <NavMenu/>
        </nav>
        <div className='w-4/5 p-6'>
          <main>{children}</main>
        </div>  
    </div>
  )
}

export default dashboardLayout
