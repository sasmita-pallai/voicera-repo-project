import { useState } from "react";
import SidebarBottomIcons from "./SidebarBottomIcons";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`bg-backgroundInverseSecondary text-white transition-all duration-300 flex flex-col justify-between ${
        collapsed ? "w-20 items-center" : "w-64"
      } h-screen`}
    >
      {/* Top section */}
      <div className="flex flex-col justify-center gap-4 p-4 w-full">
        {/* Logo + Toggle */}
        <div
          className={`flex items-center ${
            !collapsed ? "justify-between" : "justify-center"
          } w-full`}
        >
          {!collapsed && (
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.svg"
                alt="Voicera"
                className="w-8 h-8"
              />
              <p className="text-xl font-bold">Voicera</p>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className={`group relative w-10 h-10 cursor-pointer flex justify-center items-center`}
          >
            {!collapsed && (
              <div className="hover:bg-[#444] h-10 w-10 rounded-sm flex items-center justify-center">
                <img
                  src="/assets/Icons/Sidebar/menu.svg"
                  alt="menu"
                  className="w-6 h-6"
                />
              </div>
            )}
            {collapsed && (
              <>
                <img
                  src="/images/logo/logo.svg"
                  alt="menu-hover"
                  className="w-6 h-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/assets/Icons/Sidebar/menu.svg"
                  alt="menu"
                  className="w-6 h-6 absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                />
              </>
            )}
          </button>
        </div>

        {/* Search */}
        <div
          className={`bg-[#333333] flex items-center gap-2 px-3 mt-1 py-1.5 rounded-md ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <img
            src="/assets/Icons/Sidebar/search.svg"
            alt="search"
            className="w-5 h-5"
          />
          {!collapsed && (
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white outline-none w-full placeholder-gray-400"
            />
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col gap-1 w-full">
          {/* Home */}
          <button
            className={`flex cursor-pointer justify-center items-center p-[2px] h-9 rounded-[3rem] hover:bg-[#444] ${
              (isActive("/main/home") || isActive("/main")) ? "bg-gradient-to-tl from-accent to-primaryC" : ""
            }`}
            onClick={() => navigate("/main/home")}
          >
            <div
              className={`flex items-center gap-3 rounded-[2.8rem] w-full h-full px-3 ${
                (isActive("/main/home") || isActive("/main")) ? "bg-black" : ""
              }`}
            >
              <img src="/assets/Icons/Sidebar/home.svg" alt="Home" />
              {!collapsed && <p className="text-gray-300 text-sm">Home</p>}
            </div>
          </button>

          {/* Dashboard */}
          <button
            className={`flex cursor-pointer justify-center items-center p-[2px] h-9 rounded-[3rem] hover:bg-[#444] ${
              isActive("/main/dashboard") ? "bg-gradient-to-tl from-accent to-primaryC" : ""
            }`}
            onClick={() => navigate("/main/dashboard")}
          >
            <div
              className={`flex items-center gap-3 rounded-[2.8rem] w-full h-full px-3 ${
                isActive("/main/dashboard") ? "bg-black" : ""
              }`}
            >
              <img src="/assets/Icons/Sidebar/dashboard.svg" alt="Dashboard" />
              {!collapsed && <p className="text-gray-300 text-sm">Dashboard</p>}
            </div>
          </button>

          {/* Campaign */}
          <button
            className={`flex cursor-pointer justify-center items-center p-[2px] h-9 rounded-[3rem] hover:bg-[#444] ${
              isActive("/main/campaigns") ? "bg-gradient-to-tl from-accent to-primaryC" : ""
            }`}
            onClick={() => navigate("/main/campaigns")}
          >
            <div
              className={`flex items-center gap-3 rounded-[2.8rem] w-full h-full px-3 ${
                isActive("/main/campaigns") ? "bg-black" : ""
              }`}
            >
              <img src="/assets/Icons/Sidebar/campaign.svg" alt="Campaign" />
              {!collapsed && <p className="text-gray-300 text-sm">Campaign</p>}
            </div>
          </button>

          {/* Task */}
          <button
            className={`flex cursor-pointer justify-center items-center p-[2px] h-9 rounded-[3rem] hover:bg-[#444] ${
              isActive("/main/tasks") ? "bg-gradient-to-tl from-accent to-primaryC" : ""
            }`}
            onClick={() => navigate("/main/tasks")}
          >
            <div
              className={`flex items-center gap-3 rounded-[2.8rem] w-full h-full px-3 ${
                isActive("/main/tasks") ? "bg-black" : ""
              }`}
            >
              <img src="/assets/Icons/Sidebar/task.svg" alt="Task" />
              {!collapsed && <p className="text-gray-300 text-sm">Task</p>}
            </div>
          </button>

          {/* Reporting */}
          <button
            className={`flex cursor-pointer justify-center items-center p-[2px] h-9 rounded-[3rem] hover:bg-[#444] ${
              isActive("/main/reporting") ? "bg-gradient-to-tl from-accent to-primaryC" : ""
            }`}
            onClick={() => navigate("/main/reporting")}
          >
            <div
              className={`flex items-center gap-3 rounded-[2.8rem] w-full h-full px-3 ${
                isActive("/main/reporting") ? "bg-black" : ""
              }`}
            >
              <img src="/assets/Icons/Sidebar/reporting.svg" alt="Reporting" />
              {!collapsed && <p className="text-gray-300 text-sm">Reporting</p>}
            </div>
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-4 py-2 w-full">
        <SidebarBottomIcons collapsed={collapsed} notificationCount={12} />
      </div>
    </div>
  );
}

export default Sidebar;
