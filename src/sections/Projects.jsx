import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-290 px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
