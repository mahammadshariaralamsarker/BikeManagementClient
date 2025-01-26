import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const handleLogout = () => {
    // dispatch(logout());
    navigate("/login");
  };
  const user = useAppSelector(useCurrentUser);
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4    first-letter: rounded-lg shadow-md">
      <div className=" text-2xl font-bold">Logo</div>
      <div className="flex space-x-6">
        <NavLink to="/" className="  text-lg hover:text-yellow-500">
          Home
        </NavLink>
        <NavLink to="/features" className="  text-lg hover:text-yellow-500">
          Feature Products
        </NavLink>
        <NavLink to="/products" className="  text-lg hover:text-yellow-500">
          Products
        </NavLink>
      </div>
      {!user ? (
        <Button color="primary" onClick={handleLogin} className="ml-4">
          Login
        </Button>
      ) : (
        <Button onClick={handleLogout} className="ml-4">
          Logout
        </Button>
      )}
    </div>
  );
}
