import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router"; // useNavigate যোগ করা হয়েছে

import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaCartShopping, FaCow, FaFish, FaRobot, FaWheatAwn, FaHouse, FaUser, FaRightFromBracket } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; 
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // নেভিগেশনের জন্য

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
          <div className="hidden xl:block">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-green-950/50 px-3 py-1.5 rounded-full border border-green-700">
                  {user?.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="User" 
                      className="w-8 h-8 rounded-full border-2 border-lime-400 object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center text-lime-400 border-2 border-lime-400">
                      <FaUser size={16} />
                    </div>
                  )}
                  <span className="text-white text-sm font-medium pr-1 max-w-[100px] truncate">
                    {user?.displayName || "ইউজার"}
                  </span>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogOut}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition-colors text-sm"
                >
                  <FaRightFromBracket size={16} />
                  লগআউট
                </motion.button>
              </div>
            ) : (
              // বাটনে ক্লিক করলে সরাসরি লগইন পেজে নিয়ে যাবে
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#a3e635" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="bg-lime-500 text-green-950 px-5 py-2 rounded-xl font-semibold shadow-md transition-colors"
              >
                লগইন / সাইনআপ
              </motion.button>
            )}
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-gray-100 hover:text-lime-400 p-2 focus:outline-none"
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
                      <span className="text-white font-medium">
                        {user?.displayName || "আপনার প্রোফাইল"}
                      </span>
                    </div>
                    <button 
                      onClick={() => { handleLogOut(); setOpen(false); }}
                      className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2.5 rounded-xl font-semibold shadow-md"
                    >
                      <FaRightFromBracket size={18} />
                      লগআউট করুন
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => { navigate("/login"); setOpen(false); }}
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 text-green-950 py-2.5 rounded-xl font-semibold shadow-md"
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