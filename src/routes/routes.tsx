import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "@/utils/routeGenerator";
import { customerPaths } from "./customer.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(customerPaths),
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
