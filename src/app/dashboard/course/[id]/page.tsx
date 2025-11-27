import ChatBox from '@/components/dashboard/ChatBox'
import Header from '@/components/dashboard/Header'
import prisma from '@/lib/prisma'
import getStudentCourses from '@/lib/student/course'
import { CardSim, Download, MessageCircle, Notebook, Play, User2 } from 'lucide-react'
import React from 'react'

type PageProps = {
  params: {
    id: string;   // <-- type your route param here
  };
};
const ProductManagementPage = async ({params}: PageProps) => {
     const {id} = await params;
     const courses = await getStudentCourses(1);
      // Find the specific course
  const course = courses.find((e) => e.id === id);

  // If course not found, show 404
  if (!course) {
    console.error(`Course with id ${id} not found.`);
    return <div>Course not found</div>;
  }

  console.log('Found course:', course);
  console.log('Video URL:', course.videoUrl);
  return (
    <div className=' mt-8'>
        <Header name={course.title} description={course.author}/>
      <div className='flex flex-col gap-2 md:flex-row'>
        <div className='w-2/3'>
            <div className='w-full h-[400px] bg-gray-300 rounded-lg'>
              <video 
                src={`${course.videoUrl}`}
                controls 
                className='w-full h-full rounded-lg'
              />
            </div>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <div className='flex py-4 border-b-2 text-2xl items-center font-semibold gap-2'>
                    <Play size={20}/>
                    Lesson
                </div>
                <div className='flex py-4 text-2xl items-center font-semibold gap-2'>
                    <Notebook size={20}/>
                    Notes
                </div>
                <div className='flex py-4 text-2xl items-center font-semibold gap-2'>
                    <CardSim size={20}/>
                    Flashcards
                </div>
            </div>
        </div>
        <div className='w-1/3 bg-gray-200 relative rounded-lg'>
            <ChatBox/>
        </div>
      </div>
      <div>
        <h2 className='font-semibold text-2xl my-8'>Learning Objectives & Resources</h2>
        <div className='flex flex-col gap-4 md:flex-row'>
            <div className='flex flex-col gap-2'>
                <h3 className='font-semibold'>What You'll Learn:</h3>
                <ul className='space-y-4'>
                    <li>Understand the fundamentals of product management.</li>
                    <li>Learn how to create effective product roadmaps.</li>
                    <li>Explore strategies for market research and user feedback.</li>
                    <li>Explore strategies for market research and user feedback.</li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold'>Download Resources:</h3>
                <div className='border flex gap-16 justify-between p-4 rounded-lg font-medium my-4'>
                    <span>Lesson slide(PDF)</span>
                    <Download/>
                </div>
                <div className='border flex gap-16 justify-between p-4 rounded-lg font-medium mb-4'>
                    <span>PM Templates(Excel)</span>
                    <Download/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductManagementPage
