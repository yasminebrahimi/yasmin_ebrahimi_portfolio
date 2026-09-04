import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiArrowLeft, HiOutlineGlobeAlt } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="relative overflow-hidden">
        <Navbar />
        <main className="mx-auto flex min-h-[50vh] w-full max-w-290 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
          <p className="text-lg text-ink/70">Project not found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 text-sm font-bold capitalize text-white transition hover:bg-brand-dark"
          >
            <HiArrowLeft /> Back home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Decorative background blobs, consistent with Home */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -left-32 top-[45%] h-80 w-80 rounded-full bg-blue-400/25 blur-3xl" />
      </div>

      <Navbar />

      <main className="mx-auto w-full max-w-290 px-6 py-12 lg:px-0 lg:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-dark"
        >
          <HiArrowLeft /> Back home
        </Link>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Image */}
          <div className="flex h-72 w-full items-center justify-center overflow-hidden rounded-[30px] bg-panel shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] lg:h-96 lg:w-1/2">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="font-serif text-8xl text-ink/15">
                {String(project.id).padStart(2, "0")}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="flex h-8.5 w-fit items-center justify-center rounded-[13px] border-[1.5px] border-brand px-4 text-sm text-brand">
              {project.type}
            </span>

            <h1 className="text-[32px] font-bold capitalize leading-tight text-ink sm:text-[42px]">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-panel px-4 py-1.5 text-sm font-medium text-ink/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 text-sm font-bold capitalize text-white transition hover:bg-brand-dark"
                >
                  <FaGithub size={18} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border-[1.5px] border-brand px-6 py-3 text-sm font-bold capitalize text-brand transition hover:bg-brand hover:text-white"
                >
                  <HiOutlineGlobeAlt size={18} /> Live site
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="mt-10 text-base leading-7 text-ink/70">
          {project.description}
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
