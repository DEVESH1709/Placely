"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`bg-white shadow-md mx-2 sm:mx-4 md:mx-7 rounded-2xl sm:rounded-3xl md:rounded-4xl fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform -translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-gray-900 tracking-tight"
            >
              whattaplace
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-6 xl:space-x-12">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Find a Place
            </Link>

            <Link
              href=""
              className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Host Your Space
            </Link>
            <Link
              href=""
              className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
            >
              How it Works
            </Link>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Get in Touch
            </button>

            <button className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 rounded-full items-center justify-center transition-colors duration-200">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button 
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-5 w-5 sm:h-6 sm:w-6 transform transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-3 pb-4 space-y-2">
            <Link
              href="/find-a-place"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-3 text-sm sm:text-base font-medium rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find a Place
            </Link>
            <Link
              href="/host-your-space"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-3 text-sm sm:text-base font-medium rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Host Your Space
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-3 text-sm sm:text-base font-medium rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            
            {/* Mobile CTA buttons */}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                Get in Touch
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
