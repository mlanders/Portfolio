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
      className="flex items-start justify-between bg-[#eef1ef] max-w-[800px] w-full my-[5px] mb-[30px] rounded animate-fadeIn"
    >
      <div className="box-border max-w-[300px] h-[300px] w-full flex justify-center bg-white rounded-l overflow-hidden md:block">
        <img className="w-auto" alt={project.name} src={project.img} />
      </div>
      <div className="box-border flex max-w-[500px] w-full font-normal flex-col justify-between p-6 text-gray-700">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            {project.name}
          </h2>
          <p className="text-2xl mb-4 leading-relaxed">{project.description}</p>
          <div className="mt-4">
            {project.tags.map((tag, index) => (
              <i className={`${tag} text-4xl text-gray-700 mr-5`} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full flex self-end mt-6 gap-4">
          {project.preview && (
            <a
              className="btn text-xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          )}
          {project.github && (
            <a
              className="btn text-xl bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
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
