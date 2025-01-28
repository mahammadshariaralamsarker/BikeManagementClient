 
import Order from '@/power/customer/order/Order';
import Profile from '@/power/customer/profile/Profile';

export const customerPaths = [
  {
    name: 'Order',
    path: 'order',
    element: <Order />,
  },
  {
    name: 'Profile',
    path: 'profile',
    element: <Profile />,
  },

];
