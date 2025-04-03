import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-10 text-center">
      <div className="md:flex">
        <div className="flex justify-center items-center md:min-h-screen">
          <div className="relative group">
            <img
              src="/portfolio_img-1.jpg"
              alt="Sample"
              className="w-full h-auto rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl animate-zoomIn"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
              <p className="text-indigo-600 text-2xl font-semibold">
                Rikto Dey Lokon
              </p>
            </div>
          </div>
        </div>
        <div className="p-20">
          <div>
            <h2 className="text-3xl font-semibold text-indigo-600">About Me</h2>
            <p className="mt-4 text-lg">
              I'm a passionate web designer with a focus on creating
              user-friendly and visually appealing websites. With a strong
              understanding of design principles and front-end technologies, I
              strive to deliver exceptional digital experiences.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 my-12 py-5">
            <a
              className="text-4xl"
              href="https://www.facebook.com/tanha.kabir.9461"
            >
              <FaFacebook />
            </a>
            <a className="text-4xl" href="https://github.com/lokondey72">
              <FaGithub />
            </a>
            <a className="text-4xl" href="https://github.com/lokondey72">
              <FaLinkedin />
            </a>
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
      </div>
    </section>
  );
};

export default About;
