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
      <div className="flex items-center justify-between pt-6 px-6 pb-3 pt-3">
        <span className="flex h-8.5 w-33.75 items-center justify-center rounded-[13px] border-[1.5px] border-brand text-sm text-brand">
          {project.type}
        </span>

        <HiArrowUpRight className="text-brand" size={26} />
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-1.5 px-4 pb-4 pt-1 capitalize">
        <p className="h-6 w-79.25 truncate font-sans text-[15px] font-extrabold leading-6 tracking-normal text-brand">
          {project.title}
        </p>

        <p className="h-12 w-79.25 line-clamp-2 font-sans text-[15px] font-normal leading-6 tracking-normal text-ink">
          {project.description}
        </p>
      </div>

      {/* Bottom section */}
      <div className="relative flex flex-1 items-end">
        {/* Project number */}
        <span className="pointer-events-none absolute bottom-32.75 left-4 font-serif text-[100px] font-normal leading-none tracking-normal text-ink/90">
          {String(project.id).padStart(2, "0")}
        </span>

        <div className="relative z-10 flex h-40.25 w-87.75 flex-col items-center justify-center gap-3 bg-white">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
