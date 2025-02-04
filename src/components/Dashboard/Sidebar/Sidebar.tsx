import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosBike } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import useGetRole from "../../../hooks/useGetRole";
import { useAppDispatch } from "../../../redux/hooks";
import { logoutUser } from "../../../redux/features/auth/auth.slice";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const { userRole } = useGetRole();
  const dispatch = useAppDispatch();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  // Handle User Logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden z-[50] relative">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <div className="flex justify-center items-center cursor-pointer text-primary">
              <IoIosBike className="md:text-4xl text-base font-bold" />
              <Link
                to="/"
                className="md:text-2xl text-base font-bold font-orbitron uppercase"
              >
                CycleHaven
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-primary focus:text-white"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-[270px] space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden bg-primary/10 shadow-md md:flex px-4 py-2 rounded-lg justify-center items-center  mx-auto">
              <div className="flex justify-center  items-center cursor-pointer text-primary">
                <IoIosBike className="md:text-4xl text-base font-bold" />
                <Link
                  to="/"
                  className="md:text-2xl text-base font-bold font-orbitron uppercase"
                >
                  CycleHaven
                </Link>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}

            <nav>
              <div>
                {/*Admin Area*/}
                {userRole === "admin" && (
                  <>
                    <NavLink
                      to="user-manage"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary   hover:text-white ${
                          isActive ? "bg-primary  text-white" : "text-gray-600"
                        }`
                      }
                    >
                      <FaUsers className="w-5 h-5" />

                      <span className="mx-4 font-medium">Manage Users</span>
                    </NavLink>
                    <NavLink
                      to="product-manage"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary   hover:text-white ${
                          isActive ? "bg-primary  text-white" : "text-gray-600"
                        }`
                      }
                    >
                      <FaProductHunt className="w-5 h-5" />

                      <span className="mx-4 font-medium">Manage Porduct</span>
                    </NavLink>
                    <NavLink
                      to="order-manage"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary   hover:text-white ${
                          isActive ? "bg-primary  text-white" : "text-gray-600"
                        }`
                      }
                    >
                      <MdShoppingCartCheckout className="w-5 h-5" />

                      <span className="mx-4 font-medium">Manage Order</span>
                    </NavLink>
                  </>
                )}

                {/* User Area */}
                {userRole === "customer" && (
                  <>
                    <NavLink
                      to="my-orders"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary   hover:text-white ${
                          isActive ? "bg-primary  text-white" : "text-gray-600"
                        }`
                      }
                    >
                      <MdShoppingCartCheckout className="w-5 h-5" />

                      <span className="mx-4 font-medium">My Order</span>
                    </NavLink>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* shared */}
          {/* Profile Menu */}
          {userRole === "customer" && (
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary   hover:text-white ${
                  isActive ? "bg-primary  text-white" : "text-gray-600"
                }`
              }
            >
              <FcSettings className="w-5 h-5" />

              <span className="mx-4 font-medium">Profile</span>
            </NavLink>
          )}

          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-primary   hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
