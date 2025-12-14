import Link from 'next/link'
import { Search } from 'lucide-react';
import { getUser, verifySession } from '@/lib/dal';
import UserMenu from '@/app/_components/UserDropDownMenus';
import { logout } from '@/app/actions/auth';


const NavBar = async () => {
    const session = await verifySession();
      console.log('Dashboard Layout Session:', session); // Debugging line
       const user = await getUser();
          console.log("User in Dashboard Page:", user); // Debugging line
        const userRole = user?.role?.toLowerCase();
        console.log("User Role:", userRole); // Debugging line
        console.log("Is Authenticated:", session?.isAuth); // Debugging line
        if (!session) return null;
  return (
    <header className='w-full'>
        <nav className='w-full py-4'>
            <ul className='flex justify-between items-center'>
                <li className='font-bold text-3xl'>
                    <Link href="/" className='hover:text-[32px] transition-all'>EduFlow</Link>
                </li>
                <li className='hidden md:flex'>Categories</li>
                <li className='hidden border rounded-full px-4 py-2 md:flex items-center gap-2'>
                    <Search/>
                    <input 
                        type="text" 
                        className='outline-none'
                        placeholder='Search for courses'
                    />
                </li>
                <li className='hidden md:flex'>
                    Teach on EduFlow
                </li>
                    {
                        session.isAuth ? <UserMenu user={user} onLogout={logout}/> : 
                            <li className='flex gap-2'>
                                <Link href="/login">
                                    <button className='btn bg-base-100'>Login</button>
                                </Link>
                                <Link href="/signup">
                                    <button className='btn btn-neutral'>Sign Up</button>
                                </Link>
                            </li>
                 }
            </ul>
        </nav>
    </header>
  )
}

export default NavBar
