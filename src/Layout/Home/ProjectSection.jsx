import { Link } from "react-router-dom";
import pF from "../../assets/project-first.png";
import pS from "../../assets/project-second.png";
import pT from "../../assets/project-third.png";

const projects = [
  {
    id: 1,
    name: "Wardiere-Inc - A Employee Management System",
    image: pF,
    link: "/project/01",
  },
  {
    id: 2,
    name: "Fradel-and-Spies - A Restaurant Management System",
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
                  className="mt-3 inline-block bg-[#9263ff] text-white px-4 py-2 rounded-lg hover:bg-[#6429ef] transition w-full text-center"
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
