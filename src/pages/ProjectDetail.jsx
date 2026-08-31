// pages/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* etc */}
    </div>
  );
}
