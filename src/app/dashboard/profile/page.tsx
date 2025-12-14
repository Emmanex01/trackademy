import { getUser } from "@/lib/dal"
import Profile from "./_components/Profile"
import prisma from "@/lib/prisma";
import { refresh } from "@/app/actions/profileForm";

const profilepage = async () => {
  
  const userProfile = await refresh();
  
  return (
    <Profile userProfile={userProfile}/>
  )
}

export default profilepage
