import { redirect } from "next/navigation";
import { getUser, verifySession } from "@/lib/dal";


export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  const userRole = user?.role?.toLowerCase();
  if (userRole === 'student') {
    redirect('/dashboard/student');
  } else if (userRole === 'teacher') {
    redirect('/dashboard/teacher');
  }  else {
    redirect('/login');
  }
}
