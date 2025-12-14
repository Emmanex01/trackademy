import React from 'react'
import CreateCourseForm from '../_components/CreateCourseForm'
import { getUser } from '@/lib/dal';
import { get } from 'http';
import { getTeachersIdAndName } from '@/lib/teacher/teacher';

const CreateCoursePage = async () => {
    const user = await getUser();
    if (!user) {
        return (<div>No user logged in</div>);
    }
    console.log("Logged-in User:", user);
    const teacherData = await getTeachersIdAndName(user.id);
    console.log("Teacher Data:", teacherData);
    if (!teacherData) {
        return (<div>No teacher data found for the logged-in user</div>);
    }
     // 1. Create the object using the logged-in user data
    const currentTeacher = {
      id: teacherData.id,
      // Handle cases where name might be null
      name: teacherData.user.name || "Unknown Teacher" 
    };

    // 2. Wrap it in an array so the form can map over it
    const teacher = [currentTeacher];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <CreateCourseForm teachers={teacher} />
    </div>
  )
}

export default CreateCoursePage
