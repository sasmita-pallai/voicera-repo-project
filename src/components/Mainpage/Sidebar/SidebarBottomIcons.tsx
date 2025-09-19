import ProfileCard, { Status } from "./ProfileCard";

interface SidebarBottomIconsProps {
  collapsed: boolean;
  notificationCount: number;
}

function SidebarBottomIcons({
  collapsed,
  notificationCount,
}: SidebarBottomIconsProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* ICON LIST */}
      <div className="flex flex-col from-primaryC to-accent gap-1 w-full">
        {/* Notification */}
        <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444] w-full">
          <div className="flex items-center justify-between gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
            {/* Icon + Label */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/Icons/Sidebar/bell.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
              {!collapsed && (
                <p className="text-sm text-gray-300">Notifications</p>
              )}
            </div>

            {/* Notification count */}
            {!collapsed && (
              <span className=" bg-gradient-to-br from-primaryC  to-accent p-[2px] rounded-[10px]">
                <span className=" bg-[#1e1e1e] text-white text-sm font-semibold w-[28px] h-[28px] rounded-[8px] flex items-center justify-center">
                  {notificationCount}
                </span>
              </span>
            )}
          </div>
        </button>

        {/* Support */}
        <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444]">
          <div className="flex items-center gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
            <img src="/assets/Icons/Sidebar/support.svg" alt="" />
            {!collapsed && <p className="text-gray-300 text-sm">Support</p>}
          </div>
        </button>

        {/* Settings */}
        <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444]">
          <div className="flex items-center gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
            <img src="/assets/Icons/Sidebar/setting.svg" alt="" />
            {!collapsed && <p className="text-gray-300 text-sm">Settings</p>}
          </div>
        </button>
      </div>
      {/* Profile Card */}
      <div className="pt-4 w-full">
        <ProfileCard
          collapsed={collapsed}
          username="Frisson Devhub"
          email="brooklyn@simmons.com"
          status={Status.ONLINE}
        />
      </div>
    </div>
  );
}

export default SidebarBottomIcons;
