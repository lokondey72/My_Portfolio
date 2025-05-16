import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-4 text-center sm:space-y-2 sm:flex-row sm:justify-between sm:text-left">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Rikto Dey Lokon</span>.
          All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-red-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
