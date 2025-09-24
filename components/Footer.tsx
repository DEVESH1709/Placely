"use client";

import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A2DA5] text-white mx-4 sm:mx-6 md:mx-8 lg:mx-15 rounded-[3rem] mb-8">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 mb-12">
          <div className="flex-shrink-0">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              whattaplace
            </h2>
            <div className="flex items-center space-x-2 mb-4">
              <FaInstagram size={20} />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white"
              >
                Instagram
              </a>
            </div>
            <a href="mailto:knock@whattaplace.com" className="block text-lg ">
              knock@whattaplace.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 sm:gap-8 lg:mt-0">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
              <Link
                href="#"
                className="group relative transition-all duration-300 text-lg hover:transform hover:translate-x-2 flex items-center"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  →
                </span>
                <span>Find a Space</span>
              </Link>
              <Link
                href="#"
                className="group relative transition-all duration-300 text-lg hover:transform hover:translate-x-2 flex items-center"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  →
                </span>
                <span>Host a Place</span>
              </Link>
              <Link
                href="#"
                className="group relative transition-all duration-300 text-lg hover:transform hover:translate-x-2 flex items-center"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  →
                </span>
                <span>How it Works</span>
              </Link>
            </div>

            <button className="px-4 cursor-pointer  bg-white text-[#0A2DA5] rounded-full border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 font-bold">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 border-t border-blue-400/30">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cancellation & Refund Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookies
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Code of Conduct
            </Link>
          </div>

          <p className="text-sm text-white flex-shrink-0">
            © 2025 Plenusvita - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
