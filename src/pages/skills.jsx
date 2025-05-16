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
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-100 to-white py-16"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">My Skills</h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white hover:bg-blue-50 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 cursor-default group"
            >
              <h3 className="text-lg font-semibold text-blue-700 group-hover:scale-105 transition-transform">
                {skill}
              </h3>
              <div className="mt-2 h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full group-hover:w-16 transition-all"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
