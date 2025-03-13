import React from "react";

const AboutMe = () => {
  return (
    <section id="About" className="py-16">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#9263ff] to-[#6429ef]">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full transform transition-all hover:scale-105">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I'm Tarek Rahman
          </h1>
          <p className="text-gray-600 mb-4">
            I'm a passionate web developer with a constant drive to learn and
            grow. My journey into programming started a few years ago when I
            discovered the magic of web development. Seeing how code could turn
            ideas into dynamic, interactive websites instantly captivated me and
            set me on this exciting path.
          </p>
          <p className="text-gray-600 mb-4">
            I began with HTML and CSS, experimenting with layouts and designs.
            As I got more comfortable, I dived into JavaScript, unlocking a
            whole new level of interactivity. Eventually, I embraced the MERN
            stack (MongoDB, Express, React, Node.js), which has become my go-to
            toolkit for building modern, full-stack web applications.
          </p>
          <p className="text-gray-600 mb-4">
            What excites me most about programming is the problem-solving
            aspect. Debugging complex issues, optimizing performance, and
            creating seamless user experiences keep me motivated. I'm always
            exploring new technologies and techniques to refine my skills and
            build better applications.
          </p>
          <p className="text-gray-600 mb-4">
            Beyond coding, I'm a sports enthusiast who loves playing football
            and basketball—it helps me stay active and recharge. I also enjoy
            reading books on self-improvement and technology, always looking for
            ways to grow. When I need a creative break, I turn to painting,
            which lets me express ideas in a different way. Balancing work and
            hobbies is key to staying inspired and motivated.
          </p>
          <p className="text-gray-600 mb-4">
            I'm always open to connecting with like-minded individuals who share
            a passion for technology and creativity. If you're into web
            development, tech trends, or just want to chat, feel free to reach
            out! Let’s build something awesome and interactive with React and
            Tailwind CSS!
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
              Connect with Me
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
