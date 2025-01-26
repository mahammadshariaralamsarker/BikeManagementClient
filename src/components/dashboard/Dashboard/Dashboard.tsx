/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks";
import AdminDashboard from "../adminDashboard/AdminDashboard";
import CustomerDashboard from "../customerDashboard/CustomerDashboard";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import Navbar from "@/pages/home/nav/Navbar";

export default function Dashboard() {
  const token = useAppSelector(useCurrentToken);

  // Decode the token
  let decodedToken: { [key: string]: any } | null = null;
  if (token) {
    try {
      decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  // Render different dashboards based on roles
  const userRole = decodedToken?.role; // Assuming the token contains a 'role' field
  return (
    <div >
      <Navbar/>
      {/* {userRole === "admin" ? <CustomerDashboard /> : <AdminDashboard />} */}
      {userRole === "admin" ? <AdminDashboard />: <CustomerDashboard /> }
    </div>
  );
}
