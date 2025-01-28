import { NavLink } from "react-router-dom";
import "antd/dist/reset.css";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-sans">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex gap-4">
        <NavLink
          to="/manageuser"
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
        >
          Manage Users
        </NavLink>
        <NavLink
          to="/view-reports"
          className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md"
        >
          View Reports
        </NavLink>
        <NavLink
          to="/settings"
          className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default AdminDashboard;
