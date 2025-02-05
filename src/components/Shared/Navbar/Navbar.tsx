import { useEffect, useRef, useState } from "react";
import MyContainer from "../MyContainer/MyContainer";
import NavBarLinks from "./NavBarLinks";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";  
import { useLogedinUserGetQuery } from "../../../redux/features/auth/AuthApi";
import Loader from "../../Loader/Loader";
import { useAppDispatch } from "../../../redux/hooks";
import { logoutUser } from "../../../redux/features/auth/auth.slice";
import useGetRole from "../../../hooks/useGetRole";
import profile from "../../../assets/profile.jpg"
const Navbar = () => {
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(false);
  const dashboardMenuRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [showMibileMenu, setShowMobileMenu] = useState(false);
  const { userRole } = useGetRole();
  const dispatch = useAppDispatch();
  const {
    data: meInfo,
    isFetching,
    isLoading,
  } = useLogedinUserGetQuery(undefined);

  // Handle Out Side Click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dashboardMenuRef.current &&
        !dashboardMenuRef.current.contains(event?.target as Node)
      ) {
        setDashboardMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Handle User Logout
  const handleLogout = () => {
    dispatch(logoutUser());
    setDashboardMenuOpen(false);
  };

  if (isFetching || isLoading) {
    return <Loader />;
  }

  return (
    <header
      className={`bg-white border-b w-full z-50 transition-all duration-300 ${
        isFixed ? "fixed top-0" : "relative"
      } ${isHidden ? "-top-16" : "top-0"}`}
    >
      <MyContainer>
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              className=" text-red-400 font-orbitron font-bold flex items-center uppercase"
              to="/"
            >
           
              Bike Riders
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12 relative">
            {/* Desktop Menu */}
            <nav aria-label="Global" className="hidden md:flex gap-2">
              <ul className="flex items-center gap-6 text-sm">
                <NavBarLinks title="All Bikes" dLink="/Bikes" />
                <NavBarLinks title="About" dLink="/about" />
              </ul>
              {!userRole && (
                <Link
                  to="/login"
                  className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                >
                  Login
                </Link>
              )}
            </nav>
            {/* Mobile Menu */}
            {showMibileMenu && (
              <nav
                aria-label="Global"
                className="md:hidden flex flex-col items-center absolute top-full right-2 p-2 bg-white border rounded  gap-2"
              >
                <ul className="flex flex-col justify-end items-center gap-2 text-sm p-5 w-52">
                  <NavBarLinks title="All Bikes" dLink="/Bikes" />
                  <NavBarLinks title="About" dLink="/about" />
                </ul>
                {userRole ? (
                  <Link
                    to="/dashboard"
                    className="bg-primary w-fit active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="bg-primary w-fit active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  >
                    Login
                  </Link>
                )}
              </nav>
            )}

            {/* Dashboard Menu */}
            {userRole && (
              <div className="hidden md:relative md:block">
                <button
                  type="button"
                  onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                >
                  <span className="sr-only">Toggle dashboard menu</span>

                  {meInfo?.data?.image ? (
                    <img
                      src={meInfo?.data?.image}
                      alt=""
                      className="size-10 object-cover"
                    />
                  ) : (
                    <img
                      src={profile}
                      alt="profile "
                      className="size-10 object-cover"
                    />
                  )}
                </button>

                <AnimatePresence>
                  {dashboardMenuOpen && (
                    <motion.div
                      ref={dashboardMenuRef}
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                    >
                      <div className="p-2">
                        {userRole === "admin" && (
                          <Link
                            to="/dashboard/user-manage"
                            className="block rounded-lg px-4 py-2 text-sm text-secondary hover:bg-primary hover:text-white"
                            role="menuitem"
                          >
                            Dashboard
                          </Link>
                        )}
                        {userRole === "customer" && (
                          <>
                            <Link
                              to="dashboard/my-orders"
                              className="block rounded-lg px-4 py-2 text-sm text-secondary hover:bg-primary hover:text-white"
                              role="menuitem"
                            >
                              My Orders
                            </Link>
                            <Link
                              to="dashboard/profile"
                              className="block rounded-lg px-4 py-2 text-sm text-secondary hover:bg-primary hover:text-white"
                              role="menuitem"
                            >
                              Profile settings
                            </Link>
                          </>
                        )}
                      </div>

                      <div className="p-2">
                        <div>
                          <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-secondary hover:bg-primary hover:text-white"
                            role="menuitem"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                              />
                            </svg>
                            Logout
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
       

            <div className="block md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMibileMenu)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </MyContainer>
    </header>
  );
};

export default Navbar;
