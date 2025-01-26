import { Button } from "antd";
import {
  ShoppingOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function CustomerDashboard() {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
  };

  const handleNavigation = (path: string) => {
    // Add navigation logic here (e.g., React Router `useNavigate`)
    console.log(`Navigate to ${path}`);
  };

  return (
    <div>
      <div className="p-6 shadow-lg w-80 min-h-screen flex flex-col justify-between">
        {/* Buttons */}
        <div className="space-y-4">
          <Button
            type="primary"
            icon={<ShoppingOutlined />}
            block
            onClick={() => handleNavigation("/view-products")}
          >
            View Products
          </Button>
          <Button
            type="primary"
            icon={<UnorderedListOutlined />}
            block
            onClick={() => handleNavigation("/my-orders")}
          >
            My Orders
          </Button>
          <Button
            type="primary"
            icon={<SettingOutlined />}
            block
            onClick={() => handleNavigation("/profile-settings")}
          >
            Profile Settings
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
