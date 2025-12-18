import Link from "next/link";
import React from "react";
import { Role } from "../generated/prisma/enums";
// 1. Import the icons
import { 
  User, 
  Mail, 
  LayoutDashboard, 
  BookOpen, 
  Settings, 
  LogOut 
} from "lucide-react";

interface UserMenuProps {
  avatarUrl?: string;
  onLogout: () => void;
  user?: {
    id: number;
    name: string;
    email: string;
    role: Role;
  } | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, avatarUrl, onLogout }) => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar border-2 border-black"
      >
        <div className="w-10 rounded-full">
          <img
            src={avatarUrl || "https://placehold.co/100x100"}
            alt="User Avatar"
          />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 w-60 p-2 shadow bg-base-100 rounded-box z-10"
      >
        {/* User Info Section */}
        <li className="disabled">
          <div className="flex items-center gap-2 text-black cursor-default opacity-100 hover:bg-transparent">
            <User size={16} />
            <span className="font-semibold text-lg">{user?.name}</span>
          </div>
        </li>
        <li className="disabled -mt-2">
          <div className="flex items-center gap-2 text-gray-500 cursor-default hover:bg-transparent">
            <Mail size={14} />
            <span className="text-xs truncate">{user?.email}</span>
          </div>
        </li>

        <li>
          <hr className="my-1" />
        </li>

        {/* Navigation Links */}
        <li>
          <Link href="/dashboard" className="flex items-center gap-2">
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/course" className="flex items-center gap-2">
            <BookOpen size={16} />
            My Courses
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex items-center gap-2">
            <Settings size={16} />
            Settings
          </Link>
        </li>

        <li>
          <hr className="my-1" />
        </li>

        {/* Logout */}
        <li>
          <button onClick={onLogout} className="text-error flex items-center gap-2">
            <LogOut size={16} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;