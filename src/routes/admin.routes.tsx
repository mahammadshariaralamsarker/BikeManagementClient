import AddProduct from "@/power/admin/addProduct/addProduct"; 
import ManageUser from "@/pages/admin/manageUser";
import AllProduct from "@/power/admin/allProduct/AllProduct";

export const adminPaths = [
  {
    name: "Manage User",
    path: "manageUser",
    element: <ManageUser />,
  },

  {
    name: "Add Product",
    path: "Add-Product",
    element: <AddProduct />,
  },
  {
    name: "All Product",
    path: "All-Product",
    element: <AllProduct />,
  },
];
