"use client";

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "Project Management", href: "#services" },
    { label: "Consulting", href: "#" },
    { label: "Resource Planning", href: "#" },
    { label: "Safety Audits", href: "#" },
  ],
};


export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 rounded-t-[3rem] mt-8 relative overflow-hidden w-full">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-xl">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                <span className="material-icons-outlined text-lg">architecture</span>
              </div>
              <span className="text-2xl font-bold font-display tracking-tight">ConsMart</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-medium leading-[1.1] mb-8 text-white">
              Building better cities, <br /> one project at a time.
            </h2>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
            <p className="text-sm text-gray-400 mb-6 max-w-xs lg:text-right">
              Let&apos;s stay connected — get the latest updates, insights, and stories from the
              field delivered to your inbox.
            </p>
            <div className="flex w-full lg:w-96 border-b border-gray-700 pb-3 items-center group focus-within:border-white transition-colors">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-none text-white placeholder-gray-600 text-sm w-full focus:ring-0 focus:outline-none px-0"
              />
              <button className="text-white hover:text-primary w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all">
                <span className="material-icons-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-gray-800 pt-16">
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800/50">
          <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
            © 2023 ConsMart Corp — All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <span className="material-icons-outlined text-sm">camera_alt</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <span className="material-icons-outlined text-sm">facebook</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <span className="material-icons-outlined text-sm">close</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <span className="material-icons-outlined text-sm">language</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

