import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = (link) => {
    setActive(link);
    setMenuOpen(false);

    // Scroll to section
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 flex items-center justify-between transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 py-3"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        {/* Logo */}
        <div
          className={`font-bold text-gray-900 tracking-tight transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          Martins.<span className="text-blue-600">dev</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleLinkClick(link)}
                className={`relative text-sm font-medium cursor-pointer pb-1 transition-colors duration-200 ${
                  active === link
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link}
                {active === link && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* View Resume */}
          <a
            href="/my-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </a>

          {/* Download Resume */}
          <a
            href="/my-resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed inset-x-0 z-40 bg-white border-b transition-all duration-300 ease-in-out ${
          scrolled
            ? "top-[57px] border-gray-200 shadow-lg"
            : "top-[65px] border-gray-100"
        } ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleLinkClick(link)}
                className={`w-full text-left text-sm font-medium px-3 py-2.5 rounded-md transition-colors duration-200 ${
                  active === link
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link}
                {active === link && (
                  <span className="float-right w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-600 inline-block" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Resume Buttons */}
        <div className="px-6 pb-5 flex gap-3">
          {/* View Resume */}
          <a
            href="/my-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/my-resume.pdf"
            download
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/10"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;