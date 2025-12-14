import { ChartLine } from "lucide-react";
import React from "react";

interface CourseStats {
  title: string;
  engagement: number;
  completion: number;
}

interface CoursePerformanceProps {
  courses: CourseStats[];
}

export default function CoursePerformance({ courses }: CoursePerformanceProps) {
  return (
    <div className="">
      <div className='flex gap-2 p-4 bg-gray-800 text-white rounded-t-lg'>
        <ChartLine/>
        <h2 className='font-semibold text-xl'>Course Performance</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 p-4 bg-gray-300 rounded-b-lg">
        {courses.map((course) => (
          <div key={course.title} className="rounded-2xl shadow p-4 border">
            <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">Engagement</p>
                  <p className="text-sm mt-1">{course.engagement}%</p>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div
                    className="h-3 rounded-full bg-gray-900"
                    style={{ width: `${course.engagement}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-medium">Completion</p>
                  <p className="text-sm mt-1">{course.completion}%</p>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div
                    className="h-3 rounded-full bg-gray-900"
                    style={{ width: `${course.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

