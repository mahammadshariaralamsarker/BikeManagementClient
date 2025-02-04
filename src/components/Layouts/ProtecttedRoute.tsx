import { ReactNode } from "react";
import { verifyToken } from "../../utils/verifyToken";
import { TUser } from "../../types/global.types";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/features/auth/auth.slice";

const ProtecttedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: "customer" | "admin";
}) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  let user;
  if (token) {
    user = verifyToken(token);
  }
  if (role == undefined || role !== (user as TUser)?.role) {
    dispatch(logoutUser());
    return <Navigate to="/login" />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtecttedRoute;
