'use client';
import { 
    ArrowLeftToLine, 
    Grid2x2, 
    BookText, 
    BookOpen, 
    Users, 
    CalendarCheck, 
    LibraryBig, 
    Moon, 
    Settings, 
    BadgeQuestionMark, 
    LogOut 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavMenu = () => {
    const menuList = [
        { name: 'Dashboard', icon: <Grid2x2 />, link: '/dashboard/student' },
        { name: 'My Courses', icon: <BookText />, link: '/dashboard/course' },
        { name: 'Assignments', icon: <LibraryBig/>, link: '/student/assignment' },
        { name: 'Group Projects', icon: <Users />, link: '/student/groups' },
        { name: 'Schedule', icon: <CalendarCheck />, link: '/student/schedule' },
        { name: 'Resources', icon: <BookOpen />, link: '/dashboard/resources' },
        { name: 'Dark Mode', icon: <Moon />, link: '/' },
        { name: 'Settings', icon: <Settings />, link: '/student/setting' },
        { name: 'Help', icon: <BadgeQuestionMark />, link: '/student/help' },
        { name: 'Logout', icon: <LogOut />, link: '/student/logOut' },  
    ]

  return (
    <div className='bg-gray-900 fixed w-1/5 top-0 bottom-0 px-4 text-white'>
      <div className='mb-7 text-sm'>
        <Link href='/student' className='flex gap-2 lg:text-3xl font-bold items-center justify-center lg:justify-start py-4'>
            EduFlow
            <ArrowLeftToLine width={22} className='hidden lg:block'/>
        </Link>
      </div>
      <div className='flex flex-col gap-2 font-semibold'>
        {menuList.map((item, index) => {
            const pathName = usePathname();
            const isActive = pathName === item.link;
        return (
            <Link href={item.link} key={index} className={`flex items-center gap-2 active:bg-white justify-center lg:justify-start active:rounded-lg p-2 hover:bg-blue-400 rounded-lg ${isActive ? 'bg-white text-black' : ''}`}>
                {item.icon}
                <span className='hidden lg:block'>{item.name}</span>
            </Link>
        )}
        )}
      </div>
    </div>
  )
}

export default NavMenu
