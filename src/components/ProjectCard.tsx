import { motion } from "framer-motion";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start justify-between bg-white max-w-[800px] w-full rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden group border border-dark-100"
    >
      <div className="box-border max-w-[300px] h-[300px] w-full flex justify-center bg-gradient-to-br from-dark-50 to-white rounded-l overflow-hidden md:block relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          className="w-auto relative z-10 group-hover:scale-105 transition-transform duration-300"
          alt={project.name}
          src={project.img}
        />
      </div>
      <div className="box-border flex max-w-[500px] w-full font-normal flex-col justify-between p-6 text-dark-700">
        <div>
          <h2 className="text-4xl font-semibold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
            {project.name}
          </h2>
          <p className="text-2xl mb-4 leading-relaxed">{project.description}</p>
          <div className="mt-4 flex items-center gap-3">
            {project.tags.map((tag, index) => (
              <i
                className={`${tag} text-4xl text-dark-600 hover:text-primary-500 transition-colors`}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex self-end mt-6 gap-4">
          {project.preview && (
            <a
              className="btn text-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-glow font-medium"
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          )}
          {project.github && (
            <a
              className="btn text-xl bg-gradient-to-r from-dark-600 to-dark-700 hover:from-dark-700 hover:to-dark-800 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
