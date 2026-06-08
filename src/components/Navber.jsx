import { useState } from "react";
import { Link, NavLink } from "react-router";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/fisheries">Fisheries</NavLink>
      </li>
      <li>
        <NavLink to="/livestock">Livestock</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Bagha Agro
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium">
            {navLinks}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 font-medium">
              {navLinks}
            </ul>

            <button className="mt-4 w-full bg-white text-green-700 py-2 rounded-lg font-semibold">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;