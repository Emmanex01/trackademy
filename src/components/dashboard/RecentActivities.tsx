import { getTimeDifference } from "@/lib/helper";

type RecentActivitiesProps = {
  activities?: {
    id: string;
    studentId: string;
    activity: string;
    timestamp: Date;
  }[] | undefined
}

const RecentActivities = ({activities}: RecentActivitiesProps) => {
    const RecentActivities = [
        {
            activity: "Completed Lesson 3 in React Course",
            time: "2 hours ago"
        },
        {
            activity: "Completed Lesson 3 in React Course",
            time: "2 hours ago"
        },
        {
            activity: "Completed Lesson 3 in React Course",
            time: "2 hours ago"
        },
    ];
  return (
    <div>
      <h3 className="p-4 bg-gray-800 text-white font-medium">Recent Activity</h3>
      <div className="p-4 bg-gray-300 flex flex-col gap-4">
        {activities?.map((activity, index) => (
            <div key={index} className="flex gap-2 text-sm">
                <div className="w-2 h-2 rounded-full mt-2 bg-gray-900"></div>
                <div>
                    <p className="">{activity.activity}</p>
                    <span>{getTimeDifference(activity.timestamp.toString())}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivities
