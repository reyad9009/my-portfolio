import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import education from '../../assets/education-graduation.svg';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Diploma in Computer Science & Engineering",
      institution: "Feni Computer Institute | Graduated in 2025",
      location: "Feni Sadar, Feni",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Joynal Hazari College | Graduated in 2021",
      location: "Feni Sadar, Feni",
    }
  ];

  return (
    <section id="Education" className="py-16">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-10">
          Educational Qualification
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="pt-10 bg-[#ceb9ff] rounded-lg shadow-md flex flex-col items-center gap-4"
            >
              <img src={education} className="w-36" alt="" />
              <div className="px-10 pb-10">
                <h3 className="text-2xl font-bold text-black">
                  {edu.degree}
                </h3>
                <p className="text-black text-xl pt-3">{edu.institution}</p>
                <p className="text-gray-500 text-lg">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
