import { TUser, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { buyerPaths } from "@/routes/buyer.routes";
import { sellerPaths } from "@/routes/seller.routes";
import { TSidebarItem } from "@/types/sidebar.type";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerators";
import { verifyToken } from "@/utils/verifyToken";
import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const userRole = {
  SELLER: "seller",
  BUYER: "buyer",
};

const Sidebar = () => {
  const token = useAppSelector(selectCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems: TSidebarItem[] | undefined;

  if (user) {
    const role = (user as TUser).role;
    const paths = role === userRole.SELLER ? sellerPaths : buyerPaths;
    sidebarItems = sidebarItemsGenerator(paths);
  }

  return (
    <Sider
      className="fixed top-0 left-0 h-screen w-[250px] bg-white z-50 shadow-md"
      width={250} // explicitly set width to prevent responsive collapse
    >
      <div className="flex justify-center items-center py-4 mt-1 border-b border-gray-200">
        <NavLink to="/">
          <h1 className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">
            Moto Store
          </h1>
        </NavLink>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems as MenuItemType[]}
        className="bg-white border-none"
      />
    </Sider>
  );
};

export default Sidebar;
