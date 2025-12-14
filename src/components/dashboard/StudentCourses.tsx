import { Play, Star, BookOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type StudentCoursesProps = {
  courses?: {
    id: string
    title: string
    description: string | null
    starNumber: number
    progress: string
    author: string
    status: string
  }[]
}

const StudentCourses = ({ courses }: StudentCoursesProps) => {
  // ✅ EMPTY STATE
  if (!courses || courses.length === 0) {
    return (
      <div className="mt-16 flex flex-col items-center justify-center text-center bg-gray-100 rounded-2xl p-12">
        <div className="h-20 w-20 flex items-center justify-center rounded-full bg-gray-200 mb-6">
          <BookOpen className="h-10 w-10 text-gray-600" />
        </div>

        <h2 className="text-xl font-semibold mb-2">
          No courses yet
        </h2>

        <p className="text-gray-600 max-w-md mb-6">
          You haven’t enrolled in any courses yet. Start learning by
          exploring available courses and begin your journey today.
        </p>

        <Link href="/">
          <button className="btn btn-neutral px-6">
            Browse Courses
          </button>
        </Link>
      </div>
    )
  }

  // ✅ NORMAL STATE
  return (
    <div className="mt-8 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {courses.map((course) => (
        <Link
          href={`/dashboard/course/${course.id}`}
          key={course.id}
          className="bg-gray-200 rounded-lg hover:shadow-lg transition"
        >
          <div className="w-full bg-gray-400 h-44 rounded-t-lg" />

          <div className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-700">{course.description}</p>

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-800" />
              <span className="font-semibold">{course.author}</span>
            </div>

            <div className="flex justify-between text-sm">
              <p>Progress</p>
              <span>{course.progress}</span>
            </div>

            <div className="w-full h-2 bg-gray-400 rounded-lg">
              <div className="w-[65%] h-full bg-gray-900 rounded-lg" />
            </div>

            <div className="flex justify-between items-center">
              <button className="btn btn-neutral btn-sm flex gap-2">
                <Play size={16} />
                {course.status}
              </button>

              <div className="flex gap-1 items-center text-sm">
                <Star size={16} />
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
