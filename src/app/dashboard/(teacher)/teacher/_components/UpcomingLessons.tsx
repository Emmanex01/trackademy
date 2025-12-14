import Schedules from '@/components/dashboard/Schedules'
import { getUser } from '@/lib/dal';
import { getTeacherLessons } from '@/lib/teacher/teacher'


const UpcomingLessons = async () => {
    const user = await getUser();
    if (!user) {
        return (<div>No user logged in</div>);
    }
    const lessons = await getTeacherLessons(user.id);
  return (
    <div>
      <Schedules activity="Upcoming Lessons" action="View Schedule" lessons={lessons}/>
    </div>
  )
}

export default UpcomingLessons
