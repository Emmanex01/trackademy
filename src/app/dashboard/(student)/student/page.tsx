import Header from "@/components/dashboard/Header"
import LearningGoals from "@/components/dashboard/LearningGoals"
import Lessons from "@/components/dashboard/Lessons"
import QuickAction from "@/components/dashboard/QuickAction"
import RecentAchievements from "@/components/dashboard/RecentAchievements"
import RecentActivities from "@/components/dashboard/RecentActivities"
import StudentStats from "@/components/dashboard/StudentStats"
import { getUser } from "@/lib/dal"
import prisma from "@/lib/prisma"
import Link from 'next/link';

const StudentPage = async () => {
  const user = await getUser();
  const name = user?.name || "Student";
  const userId = user?.id; // get from auth session

  const student = await prisma.student.findUnique({
    where: { userId },
    include: {
      stats: true,
      progresses: true,
      goals: true,
      activities: true,
      achievements: {
        include: {
          achievement: true,
        }
      },
      enrollments: {
        include: {
          course: {
            include: {
              lessons: {
                include: {
                  progress: true
                }
              }
            }
          }
        }
      }
    }
  });

  // Add error handling in case student is not found
  

// ... inside your component logic

if (!student) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Keeping your Header, but ensuring it sits at the top */}
      <Header name="Hello" description="Student Validation Failed" />

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          
          {/* 1. Icon for visual interest */}
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg 
              className="w-6 h-6 text-red-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          {/* 2. Better Typography */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Student Profile Not Found
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            We could not find a student record associated with your account. 
            Please contact support or try logging in again.
          </p>

          {/* 3. Call to Action (Escape hatch) */}
          <div className="flex gap-3 justify-center">
            <Link 
              href="/"
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Go Home
            </Link>
            <Link 
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
  return (
    <div>
      <Header name={`Hello ${name}`} description="Welcome to your dashboard"/>
      <StudentStats stats={student.stats}/>
      <QuickAction/>
      <Lessons lessons={student.enrollments.flatMap(e => e.course.lessons)}/>
      <LearningGoals goals={student.goals} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        <RecentActivities activities={student.activities}/>
        <RecentAchievements achievements={student.achievements}/>
      </div>
    </div>
  )
}

export default StudentPage