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
    <section id="projects" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-indigo-600 text-center">
        Projects
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-medium text-indigo-700">
              {project.title}
            </h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="mt-4 inline-block text-indigo-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
