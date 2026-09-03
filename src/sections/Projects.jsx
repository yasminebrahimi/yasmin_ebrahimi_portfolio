import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-290 flex-col items-center px-6 py-20"
    >
      <h2 className="text-center text-[36px] font-bold capitalize sm:text-[50px] lg:text-[70px]">
        My <span className="text-brand">Projects</span>
      </h2>

      <div className="mt-8 flex w-full flex-wrap justify-center gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
