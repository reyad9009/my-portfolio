import React from "react";
import react from "../../assets/react.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import firebase from "../../assets/firebase.png";
import html from "../../assets/html.png";
import css from "../../assets/css.jpeg";
import tailwind from "../../assets/tailwind.jpeg";
import js from "../../assets/js.png";

const Skills = () => {
  const skills = [
    { name: "React", img: react },
    { name: "MongoDB", img: mongodb },
    { name: "Express.js", img: express },
    { name: "Firebase", img: firebase },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "Tailwind CSS", img: tailwind },
    { name: "JavaScript", img: js },
  ];

  return (
    <section id="skills" className="my-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
