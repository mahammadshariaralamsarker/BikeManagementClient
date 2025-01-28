import { Layout, Menu } from 'antd'; 
import { adminPaths } from '../../routes/admin.routes'; 
import { useAppSelector } from '../../redux/hooks'; 
import { sidebarItemsGenerator } from '@/utils/SidebarGenerator';
import { useCurrentUser } from '@/redux/features/auth/authSlice';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin', 
};

const Sidebar = () => {
  const users = useAppSelector(useCurrentUser); 
  const user = users!._doc
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
     

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
    >
      <div
        style={{
          color: 'white',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;