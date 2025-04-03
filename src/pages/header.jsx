import { FaFacebook, FaGithub } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white py-4 px-2.5">
      <div className="container flex justify-between">
        <div className="flex gap-2.5">
          <h1 className="md:text-4xl font-semibold">Portfolio For</h1>
          <p className="text-xl md:text-2xl font-medium">(Web Dev)</p>
        </div>
        <div>
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 text-lg font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-lg transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
