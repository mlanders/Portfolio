import { motion } from "framer-motion";

interface SmallProjectCardProps {
  name: string;
  description: string;
  siteUrl: string | null;
  githubUrl: string | null;
  index: number;
}

function SmallProjectCard({ name, description, siteUrl, githubUrl, index }: SmallProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col justify-between bg-base-800 border border-base-700 hover:border-primary-500/40 rounded-xl p-6 transition-all duration-300 hover:shadow-glow"
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors leading-tight">
            {name}
          </h3>
          <svg className="w-4 h-4 text-base-500 group-hover:text-primary-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <p className="text-base-300 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex gap-2 mt-5">
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3.5 py-1.5 bg-primary-500/10 text-primary-300 border border-primary-500/20 rounded-md hover:bg-primary-500/20 transition-colors"
          >
            Visit Site
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3.5 py-1.5 bg-base-700 text-base-300 border border-base-600 rounded-md hover:border-primary-500/40 transition-colors"
          >
            View Code
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default SmallProjectCard;
