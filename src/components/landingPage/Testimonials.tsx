'use client'
import { useRef } from 'react'
import { Star, ChevronRight, ChevronLeft } from 'lucide-react'

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Zach',
      role: 'Student',
      rating: 5,
      feedback: 'The live discussions and instant teacher feedback completely changed how I learn.',
    },
    {
      id: 2,
      name: 'Emma',
      role: 'Student',
      rating: 5,
      feedback: 'The teachers are amazing and the lessons are super interactive.',
    },
    {
      id: 3,
      name: 'Liam',
      role: 'Student',
      rating: 4,
      feedback: 'I finally understand concepts that used to confuse me.',
    },
    {
      id: 4,
      name: 'Sophia',
      role: 'Student',
      rating: 5,
      feedback: 'Learning feels fun now. The feedback system is incredibly helpful.',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -400 : 400,
      behavior: 'smooth',
    })
  }

  return (
    <div className="text-center mt-16">
      <h3>Testimonial</h3>
      <h2 className="font-semibold">What Says Our Students</h2>

      <div
        ref={scrollRef}
        className="mt-8 w-[60%] mx-auto flex gap-6 overflow-x-auto px-4 scroll-smooth"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-[320px] max-w-[370px] space-y-4 bg-gray-200 p-8 rounded-lg text-start flex-shrink-0"
          >
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>

            <p>{testimonial.feedback}</p>

            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-5 justify-center mt-6">
        <button
          onClick={() => scroll('left')}
          className="bg-white p-3 rounded-full border"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gray-500 p-3 rounded-full border text-white"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Testimonials
