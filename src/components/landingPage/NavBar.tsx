import Link from 'next/link'
import { Search } from 'lucide-react';


const NavBar = () => {
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
                <li className='flex gap-2'>
                    <Link href="/login">
                        <button className='btn bg-base-100'>Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className='btn btn-neutral'>Sign Up</button>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar
