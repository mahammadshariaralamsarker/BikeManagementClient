import SellerDashboard from "@/pages/seller/SellerDashboard"; 
import BulkDeleteBike from "@/pages/seller/bikeManagement/BulkDeleteBike";
import SalesHistory from "@/pages/seller/salesManagement/SalesHistory";
import UpdateBike from "@/pages/seller/bikeManagement/UpdateBike";
import DuplicateBike from "@/pages/seller/bikeManagement/DuplicateBike";
import GetInvoice from "@/pages/seller/salesManagement/GetInvoice";
import AcceptMaintenance from "@/pages/seller/maintenanceManagement/AcceptMaintenance";
import AllBikes from "@/pages/seller/bikeManagement/AllBikes";
import AddBikeModal from "@/pages/bike/AddBike";

export const sellerPaths = [
  {
    index: true,
    element: <SellerDashboard />,
  },
    {
        name: "Dashboard",
        path: "seller/dashboard",
        element: <SellerDashboard />,
      },
  {
    name: "Bike Management",
    children: [
      
    
      {
        name: "See All Bikes",
        path: "seller/dashboard/all-bikes",
        element: <AllBikes />,
      },
      {
        name: "Add New Bike",
        path: "seller/dashboard/add-bike",
        element: <AddBikeModal />,
      },
      {
        name: "Bulk Delete Bike",
        path: "seller/dashboard/bulk-delete-bike",
        element: <BulkDeleteBike />,
      },
      {
        path: "seller/dashboard/update-bike/:id",
        element: <UpdateBike />,
      },
      {
        path: "seller/dashboard/duplicate-bike/:id",
        element: <DuplicateBike />,
      },
    ],
  },
  {
    name: "Sales Management",
    children: [
      {
        name: "Sales History",
        path: "seller/dashboard/sales-history",
        element: <SalesHistory />,
      },
      {
        path: "seller/dashboard/get-invoice/:id",
        element: <GetInvoice />,
      },
    ],
  },
  {
    name: "Bike Maintenance",
    children: [
      {
        name: "Maintenance Request",
        path: "seller/dashboard/maintenance",
        element: <AcceptMaintenance />,
      },
    ],
  },
];
