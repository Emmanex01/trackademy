import { Star } from 'lucide-react'

const TopCourses = () => {
    const topCourses = [
        {
            title : "Full Stack Web Development",
            description : "Master React, Node.js, and MongoDB to build modern web applications from scratch.",
            starNumber : 4.9
        },
        {
            title : "Full Stack Web Development",
            description : "Master React, Node.js, and MongoDB to build modern web applications from scratch.",
            starNumber : 4.9
        },
        {
            title : "Full Stack Web Development",
            description : "Master React, Node.js, and MongoDB to build modern web applications from scratch.",
            starNumber : 4.9
        }
    ]
  return (
    <div className="mt-16">
      <div className='flex justify-between'>
        <h2 className='font-semibold text-2xl md:text-3xl items-center'>Check Our Top Courses</h2>
        <button className='btn btn-neutral '>View All Courses</button>
      </div>
      <div className='mt-8 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {topCourses.map((course, index) => (
            <div key={index} className='bg-gray-200 rounded-lg'>
                <div className='w-full bg-gray-400 h-45 rounded-lg'></div>
                <div className='p-8 flex flex-col gap-4'>
                    <h3 className='font-semibold'>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className=' flex justify-between'>
                        <button className='btn btn-neutral'>Enroll Now</button>
                        <div className='flex gap-2'>
                            <Star/>
                            <span>{course.starNumber}</span>
                        </div>
                    </div>
                </div>
            </div>    
         ))}
      </div>
    </div>
  )
}

export default TopCourses
