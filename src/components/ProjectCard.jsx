import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-98.5 w-87.75 flex-col overflow-hidden rounded-t-[50px] bg-panel shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-md"
    >
      {/* Top section */}
      <div className="flex items-center justify-between px-6 pt-3">
        <span className="rounded-[13px] border-[1.5px] border-brand px-4 py-1.5 text-sm text-brand">
          {project.type}
        </span>

        <HiArrowUpRight className="text-brand" size={26} />
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-1.5 px-4 pb-4 pt-1 capitalize">
        <p className="truncate text-[15px] font-extrabold text-brand underline">
          {project.title}
        </p>

        <p className="line-clamp-2 text-[15px] text-ink">
          {project.description}
        </p>
      </div>

      {/* Bottom section */}
      <div className="relative flex flex-1">
        {/* Project number */}
        <span className="pointer-events-none absolute left-4 top-1 font-serif text-[80px] leading-none text-ink/90">
          {String(project.id).padStart(2, "0")}
        </span>

        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white px-4">
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
