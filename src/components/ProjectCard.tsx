import { motion } from "framer-motion";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative grid md:grid-cols-2 gap-0 bg-base-800 border border-base-700 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-300 shadow-card hover:shadow-glow"
    >
      {/* Image pane */}
      <div className="relative overflow-hidden bg-base-900 min-h-[240px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          alt={project.name}
          src={project.img}
        />
        {/* number badge */}
        <span className="absolute top-4 left-4 font-mono text-xs text-primary-400/70 bg-base-900/80 px-2 py-1 rounded border border-primary-500/20">
          #{num}
        </span>
      </div>

      {/* Content pane */}
      <div className="flex flex-col justify-between p-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-base-300 text-base leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div className="flex gap-3">
          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg"
            >
              Visit Site
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
