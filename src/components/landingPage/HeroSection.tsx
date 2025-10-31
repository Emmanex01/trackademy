'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react';
import { Play } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start gap-8 mt-16'>
        {/* left Write up */}
      <div className='w-full  flex flex-col md:max-w-[600px]'>
        <div className='font-bold text-5xl mb-20 relative space-y-2'>
            <h1 className=''>Unlock Your Potential</h1>
            <h1>With</h1>
            <div className='bg-black text-white absolute -bottom-6 left-28 px-4 py-1 rounded-lg'>EduFlow</div>
        </div>
        <div className='text-lg mb-10 space-y-2'>
            <p>
                We believe that education is the key to personal and
            </p>
            <p>
                professional growth, and we're here to guide you on your
            </p>
            <p>
                journey to success.
            </p>
        </div>
        
        <div className='flex gap-4'>
            <Link href='/signup'>
                <button className='btn btn-neutral'>
                    Start Learning Today
                    <ChevronRight/>
                </button>
            </Link>
            <Link href='/'>
                <button className='btn'>
                    <Play/>
                    Watch Demo
                </button>
            </Link>
        </div>
      </div>
      {/* right Image */}
      <div className='w-full md:max-w-[580px] md:max-h-[480px] bg-black rounded-lg relative'>
        <Image src='/emptyImg.png' width={40} height={40} unoptimized={true} alt='Image' className='absolute w-[150px] -top-5 -right-5 rounded-lg '/>
        {/* Image goes here */}
        <Image src='/herosectionpics.jpg' width={600} height={400} unoptimized={true} alt='Image' className='w-full h-full rounded-lg '/>
        <Image src='/joincommunity.png' width={40} quality={100} unoptimized={true} height={40} alt='Image' className='absolute w-[150px] -bottom-5 -left-5 rounded-lg '/>
      </div>
    </div>
  )
}

export default HeroSection
