import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Joynal Hazari College",
      year: "2021",
      location: "Feni Sadar, Feni",
    },
    {
      id: 2,
      degree: "Bachelor of Science in CSE",
      institution: "City University Bangladesh",
      year: "2022 - Present",
      location: "Khagan, Birulia, Savar",
    },
  ];

  return (
    <section id="Education" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Educational Qualification
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4"
            >
              <FaGraduationCap className="text-blue-600 text-7xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {edu.degree}
                </h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
                <p className="text-gray-500">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
