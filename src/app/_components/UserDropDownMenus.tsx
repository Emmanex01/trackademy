import Link from "next/link";
import React from "react";
import { Role } from "../generated/prisma/enums";


interface UserMenuProps {
  avatarUrl?: string;
  onLogout: () => void;
  user?: {
    id: number;
    name: string;
    email: string;
    role: Role;
} | null
}

const UserMenu: React.FC<UserMenuProps> = ({ user, avatarUrl, onLogout }) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-black">
        <div className="w-10 rounded-full">
          <img
            src={avatarUrl || "https://placehold.co/100x100"}
            alt="User Avatar"
          />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10"
      >
        <li>
            <p className="font-semibold text-xl">{user?.name}</p>
        </li>
        <li>
            <p className="text-gray-500">{user?.email}</p>
        </li>
        <li><hr className="my-1" /></li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/course">My Courses</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li><hr className="my-1" /></li>
        <li>
          <button onClick={onLogout} className="text-error">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
