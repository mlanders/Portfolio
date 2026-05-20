import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import { Project, SmallProject } from "../types";

interface ProjectsProps {
  data: Project[];
}

const smallProjects: SmallProject[] = [
  {
    name: "Drink Tracker",
    description: "Track your alcohol consumption and celebrate sober days.",
    siteUrl: "https://drinks.landers.dev/",
    githubUrl: null,
  },
  {
    name: "Num to String",
    description: "Type in a number and get a readable string back.",
    siteUrl: "https://num.landers.dev",
    githubUrl: "https://github.com/mlanders/num_to_string",
  },
  {
    name: "React ToDo",
    description: "Simple Todo app with local storage persistence.",
    siteUrl: "https://todo.landers.dev/",
    githubUrl: "https://github.com/mlanders/React-Todo",
  },
  {
    name: "Media Site",
    description: "Browse movies and TV shows via The Movie Database API.",
    siteUrl: "https://media.landers.dev/",
    githubUrl: null,
  },
];

function Projects({ data }: ProjectsProps) {
  return (
    <div id="projects" className="bg-base-900 py-24 px-8 border-t border-base-700">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Featured projects */}
        <div>
          <div className="font-mono text-primary-400 text-sm tracking-widest mb-4">
            02 // featured
          </div>
          <h2 className="text-5xl font-black text-white mb-12">Projects</h2>
          <div className="space-y-8">
            {data.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-base-600 to-transparent" />

        {/* Small projects */}
        <div>
          <div className="font-mono text-primary-400 text-sm tracking-widest mb-4">
            03 // more work
          </div>
          <h2 className="text-5xl font-black text-white mb-12">Small Projects</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {smallProjects.map((project, i) => (
              <SmallProjectCard
                key={i}
                index={i}
                name={project.name}
                description={project.description}
                siteUrl={project.siteUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
