import { Button } from "antd";
import Home from "../../pages/home/home/Home";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <h1>admin</h1>
      <h1>customer</h1>
      <Button onClick={handleLogout}>Logout</Button>
      <Home />
    </div>
  );
}
