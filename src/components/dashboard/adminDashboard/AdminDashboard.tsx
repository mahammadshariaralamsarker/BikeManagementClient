import { Button } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function AdminDashboard() {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
  };

  const handleNavigation = (path: string) => {
    console.log(`Navigate to ${path}`);
  };

  return (
    <div className="   ">
      <div className="  p-6   shadow-lg w-80 min-h-screen flex flex-col justify-between">
        {/* Buttons */}
        <div className="space-y-4">
          <Button
            type="primary"
            icon={<UserOutlined />}
            block
            onClick={() => handleNavigation("/manage-users")}
          >
            Manage Users
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            block
            onClick={() => handleNavigation("/add-product")}
          >
            Add Product
          </Button>
          <Button
            type="primary"
            icon={<UnorderedListOutlined />}
            block
            onClick={() => handleNavigation("/all-products")}
          >
            All Products
          </Button>
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <Button
            type="default"
            danger
            icon={<LogoutOutlined />}
            block
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
