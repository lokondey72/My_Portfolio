import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-700 text-white py-28 px-6 overflow-hidden">
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-sm animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="bg-white/10 p-10 sm:p-14 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-pink-300 text-transparent bg-clip-text">
              Rikto Dey Lokon
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            A passionate Front-end Developer crafting beautiful, responsive, and
            user-focused websites & applications.
          </p>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 bg-white text-indigo-700 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
          >
            🚀 View My Work
          </a>
        </div>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-400 opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl" />
    </section>
  );
};

export default Banner;
