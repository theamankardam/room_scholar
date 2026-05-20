import Sidebar from "./components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function AppLayout() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;

    if (path.includes("propertyListing")) return "Property Listing";
    if (path.includes("bookings")) return "Bookings";
    if (path.includes("user")) return "Adding a New User (Admin)";

    return "propertyListing";
  };

  return (
    <div className="p-3 lg:pt-4 w-screen h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50">

      <main className="h-full w-[calc(100%-5.75rem)] lg:w-[calc(100%-16.5rem)] ml-23 lg:ml-65 relative z-0 bg-white rounded-2xl border border-gray-200 shadow-xl pt-5 sm:pt-6 px-1 overflow-y-auto transition-all duration-300">
        
   
        <h1 className="text-2xl font-bold pb-2 px-3 mb-2  text-gray-800 border-b border-gray-200 tracking-wide">
          {getPageTitle()}
        </h1>

   
        <Outlet />
      </main>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}