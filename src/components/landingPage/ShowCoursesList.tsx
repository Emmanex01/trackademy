'use client'
import { enrollCourse } from '@/app/actions/enrollCourse';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
  courses: {
    id: string;
    courseName: string;
    summary: string | null;
    teacherId: string;
    duration: number;
    startDate: Date;
  }[];
};

const ShowCoursesList = ({ courses }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const displayedCourses = showAll ? courses : courses.slice(0, 3);
  const router = useRouter();
  const handleEnroll = (courseId: string) => {
    setLoadingId(courseId);          // Mark this button as loading
    startTransition(async () => {
      // 1. Call the server action
    const result = await enrollCourse(courseId);

    // 2. Handle the response
    if (result?.status === 'info') {
      toast.info(result.message);
      
      // If you specifically wanted to redirect after this check:
      router.push('/'); 
    } 
    else if (result?.status === 'success') {
      toast.success(result.message);
      router.push('/');
    } else if (result?.status === 'error') {
      toast.error(result.message);
    } else {
      toast.error('An unexpected error occurred.');
    }
      setLoadingId(null);            // Reset after the server action finishes
    });
  };

  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Check Our Top Courses
        </h2>
        <button
          onClick={() => setShowAll(true)}
          className="btn btn-neutral"
        >
          View All Courses
        </button>
      </div>

      <div className="mt-8 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {displayedCourses.map((course) => {
          const isLoading = loadingId === course.id && isPending;

          return (
            <div key={course.id} className="bg-gray-200 rounded-lg">
              <div className="w-full bg-gray-400 h-45 rounded-lg"></div>

              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-semibold">{course.courseName}</h3>
                <p>{course.summary}</p>

                <button
                  onClick={() => handleEnroll(course.id)}
                  disabled={isLoading}
                  className="btn btn-neutral"
                >
                  {isLoading ? "Enrolling..." : "Enroll Now"}
                </button>

                <div className="flex gap-2">
                  <Star />
                  <span>4.9</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowCoursesList;
