import { Button } from "antd";
import Home from "../../pages/home/home/Home";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogout = () =>{
    dispatch(logout())
    navigate('/login')
  }
  return <div>
    <Button onClick={handleLogout} >
      Logout
    </Button>
    <Home/>
  </div>;
}
