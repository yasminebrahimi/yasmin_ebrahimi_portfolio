import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-gray-200 p-5 transition hover:shadow-md"
    >
      <h3 className="font-semibold text-gray-900">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{project.description}</p>
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
    </Link>
  );
}

export default ProjectCard;
