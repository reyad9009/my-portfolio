import { Link } from "react-router-dom";
import pF from "../../assets/project-first.jpg";
import pS from "../../assets/project-second.jpg";
import pT from "../../assets/project-third.jpg";

const projects = [
  {
    id: 1,
    name: "EstateLink - A Real Estate Platform",
    image: pF,
    link: "/project/01",
  },
  {
    id: 2,
    name: "LinguaConnect - Learn Language Friendly",
    image: pS,
    link: "/project/02",
  },
  {
    id: 3,
    name: "EquiSports - A Sports Equipment Store",
    image: pT,
    link: "/project/03",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h3>
                <Link
                  to={project.link}
                  className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full text-center"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
