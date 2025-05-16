import { FaFacebook, FaGithub } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-3 px-4 sm:py-5 sm:px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        {/* Title */}
        <div className="flex items-center gap-1 sm:gap-2 text-center sm:text-left">
          <h1 className="text-xl sm:text-3xl font-bold text-cyan-400">LDR</h1>
          <p className="text-lg sm:text-2xl font-medium text-white">
            (Web Developer)
          </p>
        </div>

        {/* CTA and Socials */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Social Icons (hidden on small screens) */}
          <div className="hidden sm:flex gap-3 text-xl sm:text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Contact Button */}
          <a
            href="#portfolio"
            className="px-4 sm:px-6 py-1.5 sm:py-2 bg-cyan-400 text-blue-900 font-semibold rounded-full hover:bg-cyan-300 transition duration-300 text-sm sm:text-base"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
