import React from "react";
export default function RecentActivity() {
  const activities = [
    {
      user: "Sophia J.",
      action: "Question about market segmentation strategies",
      time: "5 min ago",
      course: "Product Management 101",
    },
    {
      user: "Daniel E.",
      action: "Submitted Product Strategy Essay",
      time: "15 min ago",
      course: "UX Design Fundamentals",
    },
    {
      user: "Ebuka O.",
      action: "Started discussion on UX principles",
      time: "1 hour ago",
      course: "Digital Marketing",
    },
  ];

  return (
    <div className="w-full bg-gray-300 rounded-lg">
      <h2 className="text-2xl font-semibold p-4 bg-gray-800 text-white rounded-t-lg">Recent Activity</h2>
      {activities.map((item, index) => (
          <div key={index} className="rounded-2xl shadow py-2 flex items-start gap-4 px-8">
            <div className="h-3 w-3 bg-gray-800 rounded-full mt-1"></div>
            <div className="text-start">
              <p className="font-medium">{item.user}: <span className="font-normal">{item.action}</span></p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">{item.time}</p>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-gray-800 rounded-full"></div>
                    <p className="text-sm mt-1 text-gray-700">{item.course}</p>
                </div>
                
              </div>
            </div>
          </div>
        
      ))}
    </div>
  );
}
