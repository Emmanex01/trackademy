import { ChartLine } from "lucide-react";
import React from "react";

export default function PerformanceMetrics() {
  const metrics = [
    {
      title: "Course Completion Rate",
      value: "83%",
      change: "+5%",
    },
    {
      title: "Student Satisfaction",
      value: "4.7/5",
      change: "+0.2",
    },
    {
      title: "Discussion Participation",
      value: "76%",
      change: "+12%",
    },
    {
      title: "Assignment Submission",
      value: "91%",
      change: "+3%",
    },
  ];

  return (
    <div className="w-full rounded-lg">
      <div className='flex gap-2 p-4 bg-gray-800 text-white rounded-t-lg'>
        <ChartLine/>
        <h2 className='font-semibold text-xl'>Performance Metrics</h2>
      </div>
      <div className="grid grid-cols-1 gap-2 px-6 py-2 bg-gray-300 rounded-b-lg">
        {metrics.map((item, i) => (
          <div key={i} className="rounded-2xl shadow p-4 flex flex-col gap-2">
            <div className=" flex justify-between items-center">
                <p className="">{item.title}</p>
                <div className="flex gap-4 items-center">
                    <p className="text-xl font-semibold">{item.value}</p>
                    <p className="">{item.change}</p>
                </div>
                
            </div>
            <div className='w-full h-2 bg-gray-400 rounded-lg'>
                <div className='w-[65%] h-full bg-gray-900 rounded-lg'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}