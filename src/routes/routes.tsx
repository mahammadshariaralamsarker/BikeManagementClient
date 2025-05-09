import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import BikeDetails from "@/pages/buyer/BikeManagement/BikeDetails";
import LandingPage from "@/pages/landingPage/landingPage";
import SellerDashboard from "@/pages/seller/SellerDashboard";
import AllBikes from "@/pages/seller/bikeManagement/AllBikes";
import AddBike from "@/pages/seller/bikeManagement/AddBike";
import BulkDeleteBike from "@/pages/seller/bikeManagement/BulkDeleteBike";
import UpdateBike from "@/pages/seller/bikeManagement/UpdateBike";
import DuplicateBike from "@/pages/seller/bikeManagement/DuplicateBike";
import BuyerDashboard from "@/pages/buyer/BuyerDashboard";
import RequestedMaintenance from "@/pages/buyer/BikeManagement/RequestedMaintenance";
import RequestMaintenance from "@/pages/buyer/BikeManagement/RequestMaintenance";
import SalesHistory from "@/pages/seller/salesManagement/SalesHistory";
import GetInvoice from "@/pages/seller/salesManagement/GetInvoice";
import AcceptMaintenance from "@/pages/seller/maintenanceManagement/AcceptMaintenance";
import Accessories from "@/pages/Accessories";
import Home from "@/pages/Home/home";
import ContactUsPage from "@/pages/contact/Contact";

// Role-based route configurations
const sellerRoutes = [
  {
    index: true,
    element: <SellerDashboard />,
  },
  {
    path: "all-bikes",
    element: <AllBikes />,
  },
  {
    path: "add-bike",
    element: <AddBike />,
  },
  {
    path: "bulk-delete-bike",
    element: <BulkDeleteBike />,
  },
  {
    path: "update-bike/:id",
    element: <UpdateBike />,
  },
  {
    path: "duplicate-bike/:id",
    element: <DuplicateBike />,
  },
  {
    path: "sales-history",
    element: <SalesHistory />,
  },
  {
    path: "get-invoice/:id",
    element: <GetInvoice />,
  },
  {
    path: "maintenance",
    element: <AcceptMaintenance />,
  },
];

const buyerRoutes = [
  {
    index: true,
    element: <BuyerDashboard />,
  },
  {
    path: "requested-maintenance",
    element: <RequestedMaintenance />,
  },
  {
    path: "request-maintenance/:id",
    element: <RequestMaintenance />,
  },
  {
    path: "bikes/:id",
    element: <BikeDetails />,
  },
];

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
      {
        path: "bike/:id",
        element: <BikeDetails />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

// Combined router configuration
const router = createBrowserRouter([
  ...publicRoutes,
  {
    path: "seller/dashboard",
    element: <App />,
    children: sellerRoutes,
  },
  {
    path: "buyer/dashboard",
    element: <App />,
    children: buyerRoutes,
  },
]);

export default router;

// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Login from "@/pages/Login";
// import Register from "@/pages/Register";
// import BikeDetails from "@/pages/buyer/BikeManagement/BikeDetails";
// import LandingPage from "@/pages/landingPage/landingPage";
// import SellerDashboard from "@/pages/seller/SellerDashboard";
// import AllBikes from "@/pages/seller/bikeManagement/AllBikes";
// import AddBike from "@/pages/seller/bikeManagement/AddBike";
// import BulkDeleteBike from "@/pages/seller/bikeManagement/BulkDeleteBike";
// import UpdateBike from "@/pages/seller/bikeManagement/UpdateBike";
// import DuplicateBike from "@/pages/seller/bikeManagement/DuplicateBike";
// import BuyerDashboard from "@/pages/buyer/BuyerDashboard";
// import RequestedMaintenance from "@/pages/buyer/BikeManagement/RequestedMaintenance";
// import RequestMaintenance from "@/pages/buyer/BikeManagement/RequestMaintenance";
// import SalesHistory from "@/pages/seller/salesManagement/SalesHistory";
// import GetInvoice from "@/pages/seller/salesManagement/GetInvoice";
// import AcceptMaintenance from "@/pages/seller/maintenanceManagement/AcceptMaintenance";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//     children: [

//       {
//         path: "/bike/:id",
//         element: <BikeDetails />,
//       },
//     ],
//   },
//   {
//     path: "dashboard",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <SellerDashboard />,
//       },
//       {
//         path: "all-bikes",
//         element: <AllBikes />,
//       },
//       {
//         path: "add-bike",
//         element: <AddBike />,
//       },
//       {
//         path: "bulk-delete-bike",
//         element: <BulkDeleteBike />,
//       },
//       {
//         path: "update-bike/:id",
//         element: <UpdateBike />,
//       },
//       {
//         path: "duplicate-bike/:id",
//         element: <DuplicateBike />,
//       },
//       {
//         path: "sales-history",
//         element: <SalesHistory />,
//       },
//       {
//         path: "get-invoice/:id",
//         element: <GetInvoice />,
//       },
//       {
//         path: "maintenance",
//         element: <AcceptMaintenance />,
//       },
//     ],
//   },
//   {
//     path: "dashboard",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <BuyerDashboard />,
//       },
//       {
//         path: "requested-maintenance",
//         element: <RequestedMaintenance />,
//       },
//       {
//         path: "request-maintenance/:id",
//         element: <RequestMaintenance />,
//       },
//       {
//         path: "bikes/:id",
//         element: <BikeDetails />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

// export default router;
