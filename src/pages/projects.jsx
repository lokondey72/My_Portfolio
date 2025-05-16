import React from "react";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce site built with React and Tailwind CSS.",
    link: "https://shop-e-commerce-blue.vercel.app/",
    target: "_blank",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    link: "#",
  },
  {
    title: "Blog Website",
    description: "A simple blog site using React and styled with Tailwind.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-left"
            >
              <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target={project.target || "_self"}
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
