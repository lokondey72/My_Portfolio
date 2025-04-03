// Banner.js
import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-900 text-white py-20 px-8 text-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm Rikto Dey Lokon
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          A passionate Front-end Developer building beautiful, functional
          websites and applications.
        </p>
        <a
          href="#portfolio"
          className="inline-block px-8 py-3 text-lg font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-lg transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Banner;
