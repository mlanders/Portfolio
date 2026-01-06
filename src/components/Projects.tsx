import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import { Project, SmallProject } from "../types";

interface ProjectsProps {
  data: Project[];
}

function Projects({ data }: ProjectsProps) {
  const smallProjects: SmallProject[] = [
    {
      name: "Drink Tracker",
      description: "Track your alcohol consumption and celebrate sober days.",
      siteUrl: "https://drinks.landers.dev/",
      githubUrl: null,
    },
    {
      name: "Num to String",
      description: "Type in a number and get a string back.",
      siteUrl: "https://num.landers.dev",
      githubUrl: "https://github.com/mlanders/num_to_string",
    },
    {
      name: "React ToDo",
      description: "Simple Todo app using local storage.",
      siteUrl: "https://todo.landers.dev/",
      githubUrl: "https://github.com/mlanders/React-Todo",
    },
    {
      name: "Media Site",
      description: "View movies and TV shows from The Movie Database API.",
      siteUrl: "https://media.landers.dev/",
      githubUrl: null,
    },
  ];

  return (
    <div className="flex box-border justify-center flex-col flex-wrap w-full mx-auto py-16 px-4 bg-gradient-to-b from-dark-50 to-dark-100">
      <div className="max-w-[800px] w-full mx-auto font-normal">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent mb-8">
          Projects
        </h1>
      </div>
      <div className="flex flex-col mx-auto gap-6">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="max-w-[800px] w-full mx-auto mt-12 font-normal">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent mb-8">
          Small Projects
        </h1>
        <div className="flex flex-row flex-wrap justify-between gap-4">
          {smallProjects.map((project, index) => (
            <SmallProjectCard
              key={index}
              name={project.name}
              description={project.description}
              siteUrl={project.siteUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
