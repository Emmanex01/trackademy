'use client'
import Schedules from "@/components/dashboard/Schedules";
import { BookAIcon, Calendar, ChevronDown, ChevronUp, Clock, Edit, MoveDown, Plus, User } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

export type Course = {
  id: string;
  title: string;
  subtitle?: string;
  students?: number;
  lessons?: number;
  weeks?: number;
  startDate?: string; // simple label like 'Sept 1, 2025'
  progress: number; // 0..100
  engagement?: number; // 0..100
  accent?: string; // Tailwind color class for the dot
  draftMode: boolean;
};

const sampleCourses: Course[] = [
  {
    id: "pm101",
    title: "Product Management 101",
    subtitle: "Comprehensive introduction to product management principles",
    students: 42,
    lessons: 24,
    weeks: 12,
    startDate: "Sept 1, 2025",
    progress: 75,
    engagement: 85,
    accent: "bg-slate-800",
    draftMode: false,
  },
  {
    id: "ux",
    title: "UX Design Fundamentals",
    subtitle: "Learn the basics of user experience design and research methods",
    students: 38,
    lessons: 20,
    weeks: 10,
    startDate: "Sept 15, 2025",
    progress: 78,
    engagement: 72,
    accent: "bg-slate-700",
    draftMode: false,
  },
  {
    id: "dm",
    title: "Digital Marketing Strategy",
    subtitle: "Advanced digital marketing strategies and campaign management",
    students: 56,
    lessons: 18,
    weeks: 6,
    startDate: "Oct 1, 2025",
    progress: 92,
    engagement: 96,
    accent: "bg-slate-900",
    draftMode: false,
  },
  {
    id: "ai-intro",
    title: "Introduction to AI",
    subtitle: "Basic concepts of artificial intelligence and machine learning",
    students: 0,
    lessons: 16,
    weeks: 4,
    startDate: "Jan 15, 2026",
    progress: 0,
    engagement: 0,
    accent: "bg-slate-600",
    draftMode: true,
  },
];


function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div
        className="h-2 rounded-full transition-all"
        style={{ width: `${clamped}%`, background: "linear-gradient(90deg,#111827,#4b5563)" }}
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <span className="font-medium text-gray-800">{value}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-gray-200 rounded-2xl shadow-sm p-4">
        <article className=" flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-800 mt-1"></div>
            <div className="w-full">
                <header className="flex flex-col gap-4">
                <div className="">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    {course.subtitle && <p className="text-sm text-gray-500 truncate max-w-[18rem]">{course.subtitle}</p>}
                </div>
                </div>
                <div className=" text-sm text-gray-500 my-4">
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2 items-center">
                            <User size={15}/>
                            <div className="mt-1">{course.students ? `${course.students} Students` : "0 Students"}</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Clock size={15}/>
                            <div>{course.weeks ? `${course.weeks} Weeks` : ""}</div>
                        </div>
                    </div>
                    
                
                <div className="flex items-center gap-8 mt-2 text-gray-600">
                    <div className="flex gap-2 items-center">
                        <BookAIcon size={15}/>
                        <span>{course.lessons ?? 0} Lessons</span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <Calendar size={15}/>
                        <div className="text-sm text-gray-500">{course.startDate}</div>
                    </div>
                    
                </div>
                </div>
            </header>

            {
                course.draftMode ? 
                <div></div> :
                <section className="flex flex-col gap-4 items-center ">
                    <div className="w-full">
                    <div className="flex justify-between text-sm">
                        <div className="mb-2  text-gray-500">Course Progress</div>
                        <span>{`${course.progress}/${course.lessons}`}</span>
                    </div>
                    <ProgressBar value={course.progress} />
                    </div>
                    <div className="w-full">
                    <div className="flex justify-between">
                        <div className="text-xs text-gray-500">Engagement</div>
                        <div className="text-sm font-semibold mt-1">{course.engagement ?? 0}%</div>
                    </div>
                    <ProgressBar value={course.engagement ?? 0} />
                    </div>
                </section>
            }
            
            </div>
        </article>
        {
            course.draftMode ?  
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 gap-2 mb-4">
                    <p>Course is in draft mode</p>
                    <button
                        className="btn btn-neutral flex items-center gap-4 rounded-lg w-[80%]"
                    >
                        <Edit/>
                        Continue Editing
                    </button>
                </div>
             : <div></div>
        }
    </div>
  );
}

export default function CourseDashboard() {
  const router = useRouter();
    const [isDropDown, setIsDropDown] = useState(false);
    const handleButtonClick = () => {
        setIsDropDown(!isDropDown)
    }
  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className="">
        <div className="flex justify-between items-center mb-8">
            <details onClick={handleButtonClick} className="dropdown">
                <summary className="btn m-1 flex items-center gap-4 transition duration-300 ease-in-out">
                    All Courses
                    {isDropDown ? <ChevronUp size={15}/> : <ChevronDown size={15}/>}
                </summary>

                <ul className={`
                    menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow
                    transition-all duration-300 ease-in-out
                    ${isDropDown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                    `}
                >
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <button onClick={() => router.push("/dashboard/teacher/createcourse")} className="btn bg-black text-white">
                <Plus/>
                Create New Course
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sampleCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
        {/* <UpcomingLessons/> */}
      </div>
    </div>
  );
}
