import { FaFacebook, FaGithub } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <header className="flex bg-indigo-600 text-white py-5 px-2.5">
      <div className="flex items-center justify-center">
        <a
          className="text-4xl"
          href="https://www.facebook.com/tanha.kabir.9461"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold">Rikto Dey Lokon</h1>
        <h2 className="text-2xl font-medium my-2">Web Designer</h2>
        <p className="text-lg">Crafting beautiful and functional web designs</p>
      </div>
      <div className="flex items-center justify-center">
        <a
          className="text-4xl"
          href="https://www.facebook.com/tanha.kabir.9461"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
