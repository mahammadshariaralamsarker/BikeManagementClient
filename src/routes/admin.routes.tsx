import AddProduct from '@/power/admin/addProduct';
import AdminDashboard from '../pages/admin/AdminDashboard';

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Add Product',
        path: 'Add-Product',
        element: <AddProduct />,
      },
       
       
       
    ],
  },
];
