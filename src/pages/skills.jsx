import React from "react";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Responsive Design",
  "UI/UX Design",
];

const Skills = () => {
  return (
    <section id="skills" className="container bg-gray-100 py-12">
      <div className="container mx-auto text-center px-2.5">
        <h2 className="text-3xl font-semibold text-indigo-600">Skills</h2>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-medium text-indigo-700">{skill}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
