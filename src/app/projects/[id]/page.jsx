import { PROJECTS } from "../../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  return <ProjectDetailClient id={id} />;
}
