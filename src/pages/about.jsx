import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative text-white py-20 px-6 overflow-hidden"
    >
      {/* Decorative blurred gradient circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <div className="md:w-1/2 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            I'm a passionate Front-End Developer with a love for clean,
            user-centered design and accessible, maintainable code. I specialize
            in building modern, responsive interfaces using React, Tailwind CSS,
            and JavaScript.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://www.facebook.com/tanha.kabir.9461"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:text-white transition transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/lokondey72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com" // Replace with your actual profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-300 hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Call to Action */}
          <div className="mt-10">
            <a
              href="#portfolio"
              className="inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-600 text-white rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              🚀 View My Work
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="/portfolio_img-1.jpg"
              alt="Rikto Dey Lokon"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-xl sm:text-2xl font-semibold">
                Rikto Dey Lokon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
