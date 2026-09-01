import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-gray-600">Project not found.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link to="/" className="text-sm text-gray-500 hover:underline">
        ← Back home
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">{project.title}</h1>
      <p className="mt-4 text-gray-600">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live site
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
