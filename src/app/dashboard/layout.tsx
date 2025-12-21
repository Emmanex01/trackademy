import NavMenu from '@/components/dashboard/NavMenu'
import { getUser } from '@/lib/dal'
import React from 'react'

const dashboardLayout = async ({children}: {children : React.ReactNode}) => {
  const user = await getUser();
  const role = user?.role?.toLowerCase() || 'student';
  return (
    <div className='flex min-h-screen'>
        <nav className='shrink-0'>
          <NavMenu role={role} />
        </nav>
        <div className='flex-1 p-4 lg:p-8 w-0 overflow-y-auto'>
          <main>{children}</main>
        </div>  
    </div>
  )
}

export default dashboardLayout
