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
    LogOut, 
    GraduationCap,
    Layers
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavMenuProps = {
    role: string
}
const NavMenu = ({role}: NavMenuProps) => {
    const studentMenu = [
  { name: 'Dashboard', icon: <Grid2x2 />, link: '/dashboard/student' },
  { name: 'My Courses', icon: <BookText />, link: '/dashboard/course' },
  { name: 'Assignments', icon: <LibraryBig />, link: '/student/assignment' },
  { name: 'Group Projects', icon: <Users />, link: '/student/groups' },
  { name: 'Schedule', icon: <CalendarCheck />, link: '/student/schedule' },
  { name: 'Resources', icon: <BookOpen />, link: '/dashboard/resources' },
]

const teacherMenu = [
  { name: 'Dashboard', icon: <Grid2x2 />, link: '/dashboard/teacher' },
  { name: 'Course Management', icon: <Layers />, link: '/dashboard/teacher/coursemanagement' },
  { name: 'Students', icon: <Users />, link: '/dashboard/teacher/students' },
  { name: 'Assignments', icon: <GraduationCap />, link: '/dashboard/teacher/assignments' },
  { name: 'Schedule', icon: <CalendarCheck />, link: '/dashboard/teacher/schedule' },
]

const commonMenu = [
  { name: 'Dark Mode', icon: <Moon />, link: '/' },
  { name: 'Settings', icon: <Settings />, link: '/settings' },
  { name: 'Help', icon: <BadgeQuestionMark />, link: '/help' },
  { name: 'Logout', icon: <LogOut />, link: '/logout' },
]

    const menuList =
    role === 'teacher'
      ? [...teacherMenu, ...commonMenu]
      : [...studentMenu, ...commonMenu];

  return (
    <div className='bg-gray-900 sticky top-0 h-screen flex flex-col px-2 lg:px-4 text-white w-16 lg:w-64 transition-all duration-300'>
      <div className='mb-2 text-sm'>
        <Link href='/' className='flex gap-2 lg:text-3xl font-bold items-center justify-center lg:justify-start py-4'>
             <span className='hidden lg:block'>EduFlow</span>
            <ArrowLeftToLine width={22} className='hidden lg:block'/>
            <span className='lg:hidden text-xl'>EF</span>
        </Link>
      </div>
      <div className='flex h-screen flex-col justify-between gap-2 font-semibold'>
        {menuList.map((item, index) => {
            const pathName = usePathname();
            const isActive = pathName === item.link;
        return (
            <Link href={item.link} key={index} className={`flex items-center gap-2 active:bg-white justify-center lg:justify-start active:rounded-lg p-2 hover:bg-blue-400 rounded-lg ${isActive ? 'bg-white text-black' : ''}`}>
                <span className='shrink-0'>{item.icon}</span>
                <span className='hidden lg:block'>{item.name}</span>
            </Link>
        )}
        )}
      </div>
    </div>
  )
}

export default NavMenu
