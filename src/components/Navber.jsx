import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router"; // useNavigate যোগ করা হয়েছে

import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaCartShopping, FaCow, FaFish, FaRobot, FaWheatAwn, FaHouse, FaUser, FaRightFromBracket, FaChevronRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; 
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // নেভিগেশনের জন্য
  const dropdownRef = useRef(null);

  // click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // nav menu list
  const menuItems = [
    { name: "হোম", path: "/", icon: <FaHouse /> },
    { name: "কৃষি সেবা", path: "/agriculture", icon: <FaWheatAwn /> },
    { name: "প্রাণিসম্পদ", path: "/livestock", icon: <FaCow /> },
    { name: "মৎস্য সেবা", path: "/fisheries", icon: <FaFish /> }, 
    { name: "কৃষি বাজার", path: "/agro-market", icon: <FaCartShopping /> },
    { name: "AI সহকারী", path: "/ai-assistant", icon: <FaRobot className="text-cyan-400" /> },
  ];

  // active and normal link style
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 py-2 text-base font-semibold transition-all duration-300 ${
      isActive ? "text-lime-400" : "text-gray-100 hover:text-lime-400"
    }`;

  // লগআউট হ্যান্ডলার
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-900 to-emerald-950 shadow-lg z-[999] border-b border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2 text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img className="rounded-full w-15 h-14 object-cover" src="https://i.ibb.co.com/Y76n92QR/Whats-App-Image-2026-06-10-at-2-58-22-PM.jpg" alt="Logo" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="list-none"
              >
                <NavLink to={item.path} className={linkStyle} onClick={() => setOpen(false)}>
                  {({ isActive }) => (
                    <>
                      <span className="text-xl text-lime-400 md:text-lg">{item.icon}</span>
                      <span className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-lime-400 before:transition-transform before:duration-300 hover:before:scale-x-100 md:block">
                        <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-lime-400 transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`} />
                        {item.name}
                      </span>
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Desktop Auth Section */}
          <div className="hidden xl:block relative" ref={dropdownRef}>
            {user ? (
              <div className="relative">
                {/* User Profile Icon/Avatar Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-lime-400 cursor-pointer focus:outline-none overflow-hidden bg-green-950 shadow-md"
                >
                  {user?.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-lime-400">
                      <FaUser size={18} />
                    </div>
                  )}
                </motion.button>

                {/* Dashboard Dropdown */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-64 bg-gradient-to-b from-green-950 to-emerald-950 border border-green-800 rounded-2xl shadow-2xl p-4 z-[1000] text-white"
                    >
                      {/* User Info Header */}
                      <div className="flex items-center gap-3 pb-3 border-b border-green-800/60 mb-3">
                        {user?.photoURL ? (
                          <img 
                            src={user.photoURL} 
                            alt="User" 
                            className="w-10 h-10 rounded-full border border-lime-400 object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-lime-400 border border-lime-400">
                            <FaUser size={16} />
                          </div>
                        )}
                        <div className="flex flex-col min-w-0">
                          <span className="font-semibold text-sm truncate text-white">
                            {user?.displayName || "ইউজার"}
                          </span>
                          <span className="text-xs text-gray-400 truncate">
                            {user?.email || "ইমেইল উপলব্ধ নেই"}
                          </span>
                        </div>
                      </div>

                      {/* Dashboard Links */}
                      <div className="flex flex-col gap-1 mb-4">
                        <Link 
                          to="/dashboard/add-product" 
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium hover:bg-green-850/60 text-gray-200 hover:text-lime-400 transition-all duration-200"
                        >
                          <FaChevronRight className="text-[10px] text-lime-400" />
                          <span>পণ্য অ্যাড</span>
                        </Link>
                        <Link 
                          to="/dashboard/my-products" 
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium hover:bg-green-850/60 text-gray-200 hover:text-lime-400 transition-all duration-200"
                        >
                          <FaChevronRight className="text-[10px] text-lime-400" />
                          <span>আমার পণ্য</span>
                        </Link>
                        <Link 
                          to="/dashboard/ordered-products" 
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium hover:bg-green-850/60 text-gray-200 hover:text-lime-400 transition-all duration-200"
                        >
                          <FaChevronRight className="text-[10px] text-lime-400" />
                          <span>অর্ডারকৃত পণ্য</span>
                        </Link>
                      </div>

                      {/* Logout Button */}
                      <div className="border-t border-green-800/60 pt-3">
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            handleLogOut();
                            setDropdownOpen(false);
                          }}
                          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition-colors text-sm cursor-pointer"
                        >
                          <FaRightFromBracket size={14} />
                          লগআউট
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // বাটনে ক্লিক করলে সরাসরি লগইন পেজে নিয়ে যাবে
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#a3e635" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="bg-lime-500 text-green-950 px-5 py-2 rounded-xl font-semibold shadow-md transition-colors cursor-pointer"
              >
                লগইন / সাইনআপ
              </motion.button>
            )}
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-gray-100 hover:text-lime-400 p-2 focus:outline-none cursor-pointer"
          >
            {open ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        {/* Mobile & Tablet Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-4 pl-2 border-t border-green-800 pt-4">
                {menuItems.map((item) => (
                  <motion.li key={item.path} className="list-none">
                    <NavLink to={item.path} className={linkStyle} onClick={() => setOpen(false)}>
                      {({ isActive }) => (
                        <>
                          <span className="text-xl text-lime-400 md:text-lg">{item.icon}</span>
                          <span className="relative pb-1">
                            <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-lime-400 transition-transform duration-300 ${
                              isActive ? "scale-x-100" : "scale-x-0"
                            }`} />
                            {item.name}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Auth Button Section */}
              <div className="px-2 pt-4 pb-6 border-t border-green-800/50 mt-4">
                {user ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 bg-green-950/50 px-4 py-2 rounded-xl border border-green-700">
                      {user?.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt="User" 
                          className="w-10 h-10 rounded-full border-2 border-lime-400 object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-lime-400 border-2 border-lime-400">
                          <FaUser size={18} />
                        </div>
                      )}
                      <div className="flex flex-col min-w-0">
                        <span className="text-white font-medium truncate">
                          {user?.displayName || "ইউজার"}
                        </span>
                        <span className="text-xs text-gray-400 truncate">
                          {user?.email || ""}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Dashboard Links */}
                    <div className="flex flex-col gap-1 pl-1">
                      <Link 
                        to="/dashboard/add-product" 
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 py-2 text-sm font-semibold text-gray-100 hover:text-lime-400 transition-colors"
                      >
                        <FaChevronRight className="text-[10px] text-lime-400" />
                        <span>পণ্য অ্যাড</span>
                      </Link>
                      <Link 
                        to="/dashboard/my-products" 
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 py-2 text-sm font-semibold text-gray-100 hover:text-lime-400 transition-colors"
                      >
                        <FaChevronRight className="text-[10px] text-lime-400" />
                        <span>আমার পণ্য</span>
                      </Link>
                      <Link 
                        to="/dashboard/ordered-products" 
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 py-2 text-sm font-semibold text-gray-100 hover:text-lime-400 transition-colors"
                      >
                        <FaChevronRight className="text-[10px] text-lime-400" />
                        <span>অর্ডারকৃত পণ্য</span>
                      </Link>
                    </div>

                    <button 
                      onClick={() => { handleLogOut(); setOpen(false); }}
                      className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2.5 rounded-xl font-semibold shadow-md mt-2 cursor-pointer"
                    >
                      <FaRightFromBracket size={18} />
                      লগআউট করুন
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => { navigate("/login"); setOpen(false); }}
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 text-green-950 py-2.5 rounded-xl font-semibold shadow-md cursor-pointer"
                  >
                    লগইন / সাইনআপ
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;