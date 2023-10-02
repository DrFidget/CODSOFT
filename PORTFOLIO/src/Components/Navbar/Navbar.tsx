import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/ahlogo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black  min-w-fit sticky top-0 z-10" style={{}}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-neon-green hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <BiMenu color="white" size="2rem" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <NavLink to="/" className="h-8 w-auto">
                <img className="h-10 w-auto" src={logo} alt="Ahmad" />
              </NavLink>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="text-neon-green hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Main
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-neon-green hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/career"
                  className="text-neon-green hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Career
                </NavLink>
                <NavLink
                  to="/projects"
                  className="text-neon-green hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-neon-green hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/"
              className="text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Main
            </NavLink>
            <NavLink
              to="/about"
              className="text-neon-green hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className="text-neon-green hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Career
            </NavLink>
            <NavLink
              to="/projects"
              className="text-neon-green hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="text-neon-green hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
