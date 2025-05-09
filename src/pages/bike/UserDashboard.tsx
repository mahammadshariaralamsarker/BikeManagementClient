
import Sidebar from "@/components/layouts/Sidebar";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {


  return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar />  
      <div className="w-full p-6"> 
        <Outlet/>
      </div>
    </div>
  );
};

export default UserDashboard;
