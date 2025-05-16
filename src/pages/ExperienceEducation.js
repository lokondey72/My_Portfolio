import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ExperienceEducation = () => {
  return (
    <section id="experience-education" className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-6">
              <FaBriefcase className="text-xl text-blue-500" />
              Experience
            </h3>
            <ul className="space-y-6">
              <li className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold">
                  Front-End Developer – XYZ Agency
                </h4>
                <span className="text-sm text-gray-500">2023 – Present</span>
                <p className="text-gray-700 mt-2">
                  Building responsive web interfaces using React and Tailwind
                  CSS. Collaborated with design teams to create seamless UI/UX.
                </p>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold">
                  Intern Developer – ABC Startup
                </h4>
                <span className="text-sm text-gray-500">2022 – 2023</span>
                <p className="text-gray-700 mt-2">
                  Worked on small-scale projects using HTML, CSS, and basic
                  React. Gained real-world dev experience.
                </p>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-6">
              <FaGraduationCap className="text-xl text-blue-500" />
              Education
            </h3>
            <ul className="space-y-6">
              <li className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold">
                  B.Sc. in Computer Science
                </h4>
                <span className="text-sm text-gray-500">2020 – 2024</span>
                <p className="text-gray-700 mt-2">
                  University of Technology — Focused on web development, data
                  structures, and software engineering.
                </p>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold">
                  Web Development Bootcamp
                </h4>
                <span className="text-sm text-gray-500">2021</span>
                <p className="text-gray-700 mt-2">
                  Completed a 3-month intensive bootcamp covering HTML, CSS,
                  JavaScript, and React.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
