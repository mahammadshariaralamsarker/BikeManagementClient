import { useState } from "react";
import { Layout } from "antd";
import { Button } from "../ui/button";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const { Header } = Layout;

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const isLoggedIn = user && user.data !== null;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/accessories", label: "Accessories" },
    { to: "/contact", label: "Contact Us" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-10 shadow-sm z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <NavLink to="/" className="text-xl font-bold text-green-700">
            MotoStore
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-1 rounded hover:bg-green-600 hover:text-white transition ${
                  isActive ? "text-green-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {isLoggedIn ? (
            <>
              <NavLink
                to={`/${user?.role}/dashboard`}
                className="text-sm font-medium px-3 py-1 rounded hover:bg-green-600 hover:text-white text-gray-700"
              >
                Dashboard
              </NavLink>
              <Button
                onClick={() => dispatch(logout())}
                className="bg-red-500 border font-medium px-4 py-1 hover:bg-red-700"
              >
                Logout
              </Button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="text-sm font-medium px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {isLoggedIn ? (
              <>
                <NavLink
                  to={`/${user?.role}/dashboard`}
                  onClick={toggleMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={() => {
                    dispatch(logout());
                    toggleMobileMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </Header>
  );
};

export default Navbar;