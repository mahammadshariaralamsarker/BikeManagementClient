import { Button } from "antd";
import Home from "../../pages/home/home/Home";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

export default function MainLayout() {
  const dispatch = useAppDispatch()
  const handleLogout = () =>{
    dispatch(logout())
  }
  return <div>
    <Button onClick={handleLogout} >
      Logout
    </Button>
    <Home/>
  </div>;
}
