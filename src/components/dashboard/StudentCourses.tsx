import { Play, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


type StudentCoursesProps = {
   courses?: {
    id: string,
    title: string;
    description: string | null;
    starNumber: number;
    progress: string;
    author: string;
    status: string;
}[]
}
const StudentCourses = ({courses}: StudentCoursesProps) => {
    const Courses = [
        {
            title : "Full Stack Web Development",
            description : "Master the fundamentals of product management and strategy",
            starNumber : 4.9,
            progress: '65%',
            author: 'Dr. Amaka Umeh',
            status: 'Live Now'
        },
        {
            title : "UX Design Fundamentals",
            description : "Learn user experience design principles and research methods",
            starNumber : 4.9,
            progress: '40%',
            author: 'Dr. Amaka Umeh',
            status: 'Continue'
        },
        {
            title : "Digital Marketing Strategy",
            description : "Advanced digital marketing strategies and campaign management",
            starNumber : 4.9,
            progress: '80%',
            author: 'Dr. Amaka Umeh',
            status: 'Continue'
        },
        {
            title : "Full Stack Web Development",
            description : "Master the fundamentals of product management and strategy",
            starNumber : 4.9,
            progress: '65%',
            author: 'Dr. Amaka Umeh',
            status: 'Live Now'
        },
        {
            title : "UX Design Fundamentals",
            description : "Learn user experience design principles and research methods",
            starNumber : 4.9,
            progress: '40%',
            author: 'Dr. Amaka Umeh',
            status: 'Continue'
        },
        {
            title : "Digital Marketing Strategy",
            description : "Advanced digital marketing strategies and campaign management",
            starNumber : 4.9,
            progress: '80%',
            author: 'Dr. Amaka Umeh',
            status: 'Continue'
        }
    ]
  return (
    <div className='mt-8 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {courses?.map((course, index) => (
            <Link href={`/course/${course.id}`} key={index} className='bg-gray-200 rounded-lg'>
                <div className='w-full bg-gray-400 h-45 rounded-lg'></div>
                <div className='p-8 flex flex-col gap-4'>
                    <h3 className='font-semibold'>{course.title}</h3>
                    <p className='text-sm'>{course.description}</p>
                    <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded-full bg-gray-800'></div>
                        <span className='font-semibold'>{course.author}</span>
                    </div>
                    <div className='flex justify-between mt-4 text-sm'>
                        <p>Progress</p>
                        <div>{course.progress}</div> 
                    </div>
                    <div className='w-full h-2 bg-gray-400 rounded-lg'>
                        <div className='w-[65%] h-full bg-gray-900 rounded-lg'></div>
                    </div>
                    <div className=' flex justify-between'>
                        <Link href='/'>
                            <button className='btn btn-neutral'>
                                <Play/>
                                {course.status}
                            </button>
                        </Link>
                        <div className='flex gap-2'>
                            <Star/>
                            <span>{course.starNumber}</span>
                        </div>
                    </div>
                </div>
            </Link>    
         ))}
      </div>
  )
}

export default StudentCourses
