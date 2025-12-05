import { motion } from "framer-motion";

interface SmallProjectCardProps {
  name: string;
  description: string;
  siteUrl: string | null;
  githubUrl: string | null;
}

function SmallProjectCard({
  name,
  description,
  siteUrl,
  githubUrl,
}: SmallProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start justify-between bg-white w-[390px] rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 group border border-dark-100 hover:border-primary-200"
    >
      <div className="box-border flex w-full font-normal flex-col justify-between p-6 text-dark-700">
        <div>
          <h2 className="text-4xl font-semibold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
            {name}
          </h2>
          <p className="text-2xl mb-4 leading-relaxed">{description}</p>
        </div>
        <div className="w-full flex self-end mt-6 md:flex-row flex-col gap-3">
          {siteUrl && (
            <a
              className="btn text-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-glow font-medium text-center"
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          )}
          {githubUrl && (
            <a
              className="btn text-xl bg-gradient-to-r from-dark-600 to-dark-700 hover:from-dark-700 hover:to-dark-800 text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-medium text-center"
              href={githubUrl}
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

export default SmallProjectCard;
