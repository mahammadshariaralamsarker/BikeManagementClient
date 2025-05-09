import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react"; // You can use any icon library

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile toggle button */}
      <div className="lg:hidden p-4 absolute z-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 fixed top-0 left-0"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-10 h-full bg-white border-r transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          w-64 lg:translate-x-0 lg:static lg:w-64`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1   p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
