import { TUser } from "../types/global.types";
import { verifyToken } from "../utils/verifyToken";

const useGetRole = () => {
  const token = localStorage.getItem("token");
  let user;
  if (token) {
    user = verifyToken(token as string);
  }
  const userRole = (user as TUser)?.role;
  return { userRole };
};

export default useGetRole;
