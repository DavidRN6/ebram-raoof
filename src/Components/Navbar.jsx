import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex justify-between items-center py-6 mb-3 sm:mb-5 lg:mb-10 md:px-4">
      <Link to="/">
        <h2 className="font-semibold text-[26px]">Ebram Raoof</h2>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex font-semibold text-lg justify-center items-center gap-4">
        <NavLink
          to="/"
          className="hover:text-purple-700 transition flex flex-col items-center"
        >
          <p>WORK</p>
          <hr className="w-3/4 border-none h-[2px] bg-purple-900 hidden" />
        </NavLink>
        <li>/</li>
        <NavLink
          to="/about"
          className="hover:text-purple-700 transition flex flex-col items-center"
        >
          <p>ABOUT</p>
          <hr className="w-3/4 border-none h-[2px] bg-purple-900 hidden" />
        </NavLink>
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center">
        {/* Burger Icon */}
        <button
          className="relative w-8 h-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <span
            className={`block absolute left-0 w-full h-1 bg-purple-900 transition-all duration-500 rounded-sm ${
              isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
            }`}
          ></span>
          <span
            className={`block absolute left-0 w-full h-1 bg-purple-900 transition-all duration-500 rounded-sm ${
              isOpen ? "opacity-0 w-0" : "top-1/2 -translate-y-1/2"
            }`}
          ></span>
          <span
            className={`block absolute left-0 w-full h-1 bg-purple-900 transition-all duration-500 rounded-sm ${
              isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
            }`}
          ></span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`fixed top-16 left-0 w-full h-screen bg-white flex flex-col justify-center items-center z-40 transition-all duration-500 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="text-lg font-bold space-y-6 h-[250px] my-auto">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                WORK
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
