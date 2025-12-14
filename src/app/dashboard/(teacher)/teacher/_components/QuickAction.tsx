import { File, Plus, User } from "lucide-react";
import React from "react";

export default function QuickActions() {
  const actions = [
    {
        title: "Create New Lesson",
        icon: <Plus/>
    },
    {
        title: "Manage Students",
        icon: <User/>
    },
    {
        title: "Send Announcement",
        icon: <File/>
    },
  ];

  return (
    <div className="w-full bg-gray-300 px-6 py-4 rounded-lg">
      <h2 className="text-2xl font-semibold py-4">Quick Actions</h2>
      <div className="flex flex-col items-center gap-3 py-2 ">
        {actions.map((action, i) => (
          <button
            key={i}
            className="btn btn-active flex w-full items-center gap-4 px-4 rounded-lg"
          >
            {action.icon}
            {action.title}
          </button>
        ))}
      </div>
    </div>
  );
}
