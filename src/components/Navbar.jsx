import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link
            to="/"
            className="font-horizon text-3xl text-white/90 hover:text-white transition-all duration-300 hover:scale-105"
          >
            PresMUN
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          >
            <span
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-16">
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-white/80 hover:text-white font-montserrat py-2 transition-all duration-300">
                    About Us
                  </span>
                </div>
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-56 backdrop-blur-xl bg-white/5 rounded-xl shadow-lg py-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Link
                    to="/about/presmun"
                    className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    PresMUN
                  </Link>
                  <Link
                    to="/about/pumun"
                    className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    PUMUN
                  </Link>
                </div>
              </div>
              <Link
                to="/councils"
                className="text-white/80 hover:text-white font-montserrat transition-all duration-300"
              >
                Councils
              </Link>
              <Link
                to="/committees"
                className="text-white/80 hover:text-white font-montserrat transition-all duration-300"
              >
                Our Committees
              </Link>
              <Link
                to="/press-article"
                className="text-white/80 hover:text-white font-montserrat transition-all duration-300"
              >
                Press Article
              </Link>
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-white/80 hover:text-white font-montserrat py-2 transition-all duration-300">
                    Others
                  </span>
                </div>
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-56 backdrop-blur-xl bg-white/5 rounded-xl shadow-lg py-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Link
                    to="/join-us"
                    className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Join Us
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            isOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-full invisible'
          }`}
        >
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="space-y-4">
                <span className="text-white/80 font-montserrat text-lg">About Us</span>
                <Link
                  to="/about/presmun"
                  className="block pl-4 py-2 text-white/60 hover:text-white transition-all duration-300"
                >
                  PresMUN
                </Link>
                <Link
                  to="/about/pumun"
                  className="block pl-4 py-2 text-white/60 hover:text-white transition-all duration-300"
                >
                  PUMUN
                </Link>
              </div>
              <Link
                to="/councils"
                className="block text-white/80 hover:text-white font-montserrat text-lg transition-all duration-300"
              >
                Councils
              </Link>
              <Link
                to="/committees"
                className="block text-white/80 hover:text-white font-montserrat text-lg transition-all duration-300"
              >
                Our Committees
              </Link>
              <Link
                to="/press-article"
                className="block text-white/80 hover:text-white font-montserrat text-lg transition-all duration-300"
              >
                Press Article
              </Link>
              <div className="space-y-4">
                <span className="text-white/80 font-montserrat text-lg">Others</span>
                <Link
                  to="/join-us"
                  className="block pl-4 py-2 text-white/60 hover:text-white transition-all duration-300"
                >
                  Join Us
                </Link>
                <Link
                  to="/contact"
                  className="block pl-4 py-2 text-white/60 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}