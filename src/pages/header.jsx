"use client";

import { FaFacebook, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition">
              LDR
            </h1>
            <span className="hidden sm:inline-block text-lg font-medium text-white">
              (Web Developer)
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <Link href="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-300 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-cyan-300 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-cyan-300 transition">
            Contact
          </Link>
        </nav>

        {/* CTA + Social Icons + Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-3 text-xl">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-300 transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-cyan-300 transition"
            >
              <FaFacebook />
            </Link>
          </div>
          <Link
            href="#portfolio"
            className="hidden sm:inline-block px-5 py-2 bg-cyan-400 text-blue-900 rounded-full font-semibold text-sm hover:bg-cyan-300 transition"
          >
            Contact Me
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-blue-800 text-white overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-base font-medium">
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
