import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";
import Bikes from "../pages/Bikes/Bikes";
import BikeDetails from "../pages/BikeDetails/BikeDetails";
import About from "../pages/About/About";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Profile/Profile";
import UserManage from "../pages/Dashboard/Admin/UserManage/UserManage";
import ProductManage from "../pages/Dashboard/Admin/ManageProduct/ManageProduct";
import OrderManage from "../pages/Dashboard/Admin/ManageOrder/ManageOrder";
import MyOrders from "../pages/Dashboard/User/MyOrders/MyOrders";
import Checkout from "../pages/Checkout/Checkout";
import ProtecttedRoute from "../components/Layouts/ProtecttedRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Bikes",
        element: <Bikes />,
      },
      {
        path: "/Bike/:id",
        element: <BikeDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/checkout",
        element: (
          <ProtecttedRoute role="customer">
            <Checkout />
          </ProtecttedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // User
      {
        path: "my-orders",
        element: (
          <ProtecttedRoute role="customer">
            <MyOrders />
          </ProtecttedRoute>
        ),
      },

      {
        path: "profile",
        element: (
          <ProtecttedRoute role="customer">
            <Profile />
          </ProtecttedRoute>
        ),
      },

      {
        path: "user-manage",
        element: (
          <ProtecttedRoute role="admin">
            <UserManage />
          </ProtecttedRoute>
        ),
      },
      {
        path: "product-manage",
        element: (
          <ProtecttedRoute role="admin">
            <ProductManage />
          </ProtecttedRoute>
        ),
      },
      {
        path: "order-manage",
        element: (
          <ProtecttedRoute role="admin">
            <OrderManage />
          </ProtecttedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

export default route;
