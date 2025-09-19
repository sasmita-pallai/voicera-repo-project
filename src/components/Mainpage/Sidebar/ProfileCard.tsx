import React from "react";
import { twMerge } from "tailwind-merge";

export const Status = {
  ONLINE: 0,
  OFFLINE: 1,
} as const;
export type Status = typeof Status[keyof typeof Status];


interface ProfileCardProps {
  username?: string;
  email?: string;
  avatar?: string;
  status?: Status;
  collapsed: Boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  username = "Brooklyn Simmons",
  email = "brooklyn@simmons.com",
  avatar = "/assets/Icons/Sidebar/usericon.svg",
  status = Status.OFFLINE,
  collapsed,
}) => {
  const statusDotClass = twMerge(
    "absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full",
    status === Status.ONLINE ? "bg-[#B5FFC1]" : "bg-red-500"
  );

  return (
    <>
      {collapsed ? (
        <div className="relative w-12 h-12">
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full rounded-full object-cover"
          />
          <span className={statusDotClass}></span>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-[#2D2D2F] text-white p-3 rounded-xl shadow-lg w-full">
          {/* Avatar */}
          <div className="relative w-12 h-12">
            <img
              src={avatar}
              alt="Avatar"
              className=" w-auto rounded-full object-cover"
            />
            <span className={statusDotClass}></span>
          </div>

          {/* Info */}
          <div className="flex flex-col overflow-hidden mx-3">
            <span className="text-sm font-semibold truncate">{username}</span>
            <span className="text-xs text-gray-400 truncate">{email}</span>
          </div>

          {/* Dots */}
          <div className="hover:bg-[#444] p-1 rounded-full">

          <img
            src="/assets/Icons/Sidebar/verticalDots.svg"
            alt="Menu"
            className="w-4 h-4 cursor-pointer"
            />
            </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
