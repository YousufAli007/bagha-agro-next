import { useState } from "react";
import { Link, NavLink } from "react-router";

import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaCartShopping, FaCow, FaFish, FaLeaf, FaRobot, FaWheatAwn, FaHouse } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // nav menu list
  const menuItems = [
    { name: "হোম", path: "/", icon: <FaHouse /> },
    { name: "কৃষি সেবা", path: "/agriculture", icon: <FaWheatAwn /> },
    { name: "প্রাণিসম্পদ", path: "/livestock", icon: <FaCow /> },
    { name: "মৎস্য সেবা", path: "/fisheries", icon: <FaFish /> }, 
    { name: "কৃষি বাজার", path: "/agro-market", icon: <FaCartShopping /> },
    { name: "AI সহকারী", path: "/ai-assistant", icon: <FaRobot className="text-cyan-400" /> },
  ];

  // active and normal link style (লাইভ কালার চেঞ্জের জন্য)
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 py-2 text-base font-semibold transition-all duration-300 ${
      isActive ? "text-lime-400" : "text-gray-100 hover:text-lime-400"
    }`;

  return (
    <nav className="bg-gradient-to-r from-green-900 to-emerald-950 shadow-lg sticky top-0 z-50 border-b border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2 text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLeaf className="text-lime-400 text-2xl lg:text-3xl" />
              <span className="text-xl lg:text-2xl font-bold tracking-wide">
                Bagha <span className="text-lime-400">Agro</span>
              </span>
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
                {/* NavLink এর চিলড্রেন ফাংশন ব্যবহার করে isActive কে ভেতরে নিয়ে আসা হয়েছে */}
                <NavLink to={item.path} className={linkStyle} onClick={() => setOpen(false)}>
                  {({ isActive }) => (
                    <>
                      {/* icon color */}
                      <span className="text-xl text-lime-400 md:text-lg">{item.icon}</span>
                      
                      {/* border animation */}
                      <span className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-lime-400 before:transition-transform before:duration-300 hover:before:scale-x-100 md:block">
                        {/* NavLink এর আসল isActive দিয়ে বর্ডারের স্কেল লাইভ কন্ট্রোল হচ্ছে */}
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

          {/* Desktop Button */}
          <div className="hidden xl:block">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#a3e635" }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-500 text-green-950 px-5 py-2 rounded-xl font-semibold shadow-md transition-colors"
            >
              লগইন / সাইনআপ
            </motion.button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-gray-100 hover:text-lime-400 p-2 focus:outline-none"
          >
            {open ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        {/* Mobile & Tablet Menu (Smooth Motion Animation) */}
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
                {menuItems.map((item, index) => (
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
              <div className="px-2 pt-4 pb-6">
                <button className="w-full bg-gradient-to-r from-lime-500 to-lime-600 text-green-950 py-2.5 rounded-xl font-semibold shadow-md">
                  লগইন / সাইনআপ
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;