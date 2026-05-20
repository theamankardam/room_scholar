import { useEffect, useState } from "react";
import { useCurrentUser } from "../features/auth/useCurrentUser";
import { NavLink, useNavigate } from "react-router-dom";
import {
  TbCalendarEvent,
  TbBuildingStore,
  TbUsers,
  TbLogout2,
} from "react-icons/tb";

const menuItems = [
  {
    path: "/propertyListing",
    name: "Property Listing",
    icon: <TbBuildingStore size={24} />,
  },
  {
    path: "/bookings",
    name: "Bookings",
    icon: <TbCalendarEvent size={24} />,
  },
  {
    path: "/user",
    name: "Users",
    icon: <TbUsers size={24} />,
  },
];

export default function Sidebar() {
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();
  const { user } = useCurrentUser();

  const { username, email } = user?.user || {};

  const displayName = username ? username : "User";
  const initial = username ? username.charAt(0).toUpperCase() : "U";

  useEffect(() => {
    const handleResize = () => setExpand(window.innerWidth >= 1024);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <div
      onMouseEnter={() => window.innerWidth < 1024 && setExpand(true)}
      onMouseLeave={() => window.innerWidth < 1024 && setExpand(false)}
      className={`flex flex-col justify-between absolute top-0 left-0 z-10 py-6 px-3 mt-3 lg:mt-4 ml-3 lg:ml-4 h-[calc(100%-1.5rem)] lg:h-[calc(100%-1.75rem)] bg-white border border-gray-200 rounded-2xl shadow-xl transition-all duration-300 ease-in-out ${
        expand ? "w-60" : "w-20"
      }`}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 px-2 select-none transition-all duration-300">
          <div className="px-2.5 py-1.5 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 text-white font-extrabold shadow-md text-base md:text-lg">
            RS
          </div>

          {expand && (
            <h1 className="ml-2 text-lg md:text-xl font-bold text-gray-800 leading-tight">
              Room{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Scholars
              </span>
            </h1>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2.5">
          {menuItems.map(({ path, name, icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              <span className="shrink-0">{icon}</span>

              {expand && <span>{name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        {/* User Info */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-semibold text-base md:text-lg shadow-inner">
            {initial}
          </div>

          {expand && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm md:text-base font-semibold text-gray-800">
                {displayName}
              </span>

              <span className="text-xs md:text-sm text-gray-500 truncate">
                {email ? email : "No email available"}
              </span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 mt-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-300 text-sm md:text-base cursor-pointer"
        >
          <TbLogout2 size={22} />

          {expand && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}