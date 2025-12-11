"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Office", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background-light pt-6 pb-2 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="px-4 sm:px-6 md:px-12 flex items-center justify-between mx-auto max-w-[1400px]">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-[150px]">
          <span className="material-symbols-outlined text-4xl md:text-5xl font-light text-black">
            apps
          </span>
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-[#2d2d2d]">
            ARC CPM
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-pill flex items-center gap-1"
            >
              {link.active && (
                <span className="w-1 h-1 bg-black rounded-full inline-block mb-0.5"></span>
              )}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden lg:flex justify-end min-w-[150px]">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-800"></div>
          </label>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:border-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <nav className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                {link.active && (
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                )}
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
