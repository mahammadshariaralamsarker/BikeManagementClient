import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { useAppSelector } from "../../redux/hooks";
import { sidebarItemsGenerator } from "@/utils/SidebarGenerator";
import { customerPaths } from "@/routes/customer.routes";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.role) {
      navigate("/login");
    }
  }, [user, navigate]);

  let sidebarItems;
  if (user && user.role) {
    switch (user.role) {
      case userRole.ADMIN:
        sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
        break;
      case userRole.CUSTOMER:
        sidebarItems = sidebarItemsGenerator(customerPaths, userRole.CUSTOMER);
        break;
      default:
        break;
    }
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
