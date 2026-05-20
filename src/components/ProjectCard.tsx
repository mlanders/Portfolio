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
          {project.tags.length > 0 && (
            <div className="flex gap-3 mb-6">
              {project.tags.map((tag, i) => (
                <i key={i} className={`${tag} text-2xl text-base-400 hover:text-primary-400 transition-colors`} />
              ))}
            </div>
          )}
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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-base-600 hover:border-primary-400 text-base-300 hover:text-primary-400 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
            >
              View Code
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
