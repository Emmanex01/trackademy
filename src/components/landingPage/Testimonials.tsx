import { Star, ChevronRight, ChevronLeft } from 'lucide-react'


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Zach',
      role: 'Student',
      rating: 5,
      feedback: 'The live discussions and instant teacher feedback completely changed how I learn. I actually look forward to lessons now!',
      avatar: 'path/to/zach-avatar.jpg',
    },
    {
      id: 2,
      name: 'Zach',
      role: 'Student',
      rating: 5,
      feedback: 'The live discussions and instant teacher feedback completely changed how I learn. I actually look forward to lessons now!',
      avatar: 'path/to/zach-avatar.jpg',
    }
  ];
  return (
    <div className='text-center mt-16'>
      <h3 className=''>Testimonial</h3>
      <h2 className='font-semibold'>What Says Our Students</h2>
      <div className=' p-4 text-start flex gap-8 justify-center'>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className='space-y-4 bg-gray-200 p-8 max-w-[370px] rounded-lg '>
            <div className='flex'>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
            <p>
                {testimonial.feedback}  
            </p>
            <div className='flex gap-3 items-center'>
                <div className='w-10 h-10 bg-gray-600 rounded-full'></div>
                <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                </div>
            </div>
        </div>
        ))}
      </div>
      <div className='flex gap-5 justify-center'>
        <button className='bg-white p-3 rounded-full border'><ChevronLeft/></button>
        <button className='bg-gray-500 p-3 rounded-full border '><ChevronRight/></button>
      </div>
    </div>
  )
}

export default Testimonials
