import BikeDetails from "@/pages/buyer/BikeManagement/BikeDetails";
import RequestMaintenance from "@/pages/buyer/BikeManagement/RequestMaintenance";
import RequestedMaintenance from "@/pages/buyer/BikeManagement/RequestedMaintenance";
import BuyerDashboard from "@/pages/buyer/BuyerDashboard";

export const buyerPaths = [
  {
    name: "Dashboard",
    path: "buyer/dashboard",
    element: <BuyerDashboard />,
  },
  {
    name: "Requested Maintenance",
    path: "buyer/dashboard/requested-maintenance",
    element: <RequestedMaintenance />,
  },
  {
    path: "buyer/dashboard/request-maintenance/:id",
    element: <RequestMaintenance />,
  },
  {
    path: "buyer/bikes/:id",
    element: <BikeDetails />,
  },
];
