import NavMenu from '@/components/dashboard/NavMenu'
import { getUser } from '@/lib/dal'
import React from 'react'

const dashboardLayout = async ({children}: {children : React.ReactNode}) => {
  const user = await getUser();
  const role = user?.role?.toLowerCase() || 'student';
  return (
    <div className='flex'>
        <nav className='w-1/5'>
          <NavMenu role={role} />
        </nav>
        <div className='w-4/5 p-6'>
          <main>{children}</main>
        </div>  
    </div>
  )
}

export default dashboardLayout
