"use client";

import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-gray-200 transition-colors duration-300 h-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              <span className="material-icons-outlined text-base">architecture</span>
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-black">
              ConsMart
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[13px] font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${
                  link.active
                    ? "text-black font-bold"
                    : "hover:text-primary transition-colors"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="bg-black text-white pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              Contact Us
              <span className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-black">
                <span className="material-icons-outlined text-[14px]">call</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 focus:outline-none">
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

