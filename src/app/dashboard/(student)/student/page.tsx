import Header from "@/components/dashboard/Header"
import LearningGoals from "@/components/dashboard/LearningGoals"
import Lessons from "@/components/dashboard/Lessons"
import QuickAction from "@/components/dashboard/QuickAction"
import RecentAchievements from "@/components/dashboard/RecentAchievements"
import RecentActivities from "@/components/dashboard/RecentActivities"
import StudentStats from "@/components/dashboard/StudentStats"
import prisma from "@/lib/prisma"

const StudentPage = async () => {
  const userId = 1; // get from auth session

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
  if (!student) {
    return (
      <div>
        <Header name="Hello" description="Student not found" />
        <div>Student data not available</div>
      </div>
    )
  }

  return (
    <div>
      <Header name="Hello Sophia" description="Welcome to your dashboard"/>
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