type ProjectCardProps = {
  title: string;
  description: string;
  completed: boolean;
  gitHubLink: string;
  projectLink?: string;
}

function ProjectCard({ title, description, completed, gitHubLink, projectLink }: ProjectCardProps) {
  return (
    <div className="project-card flex items-center justify-between flex-col p-4 border border-gray-300 rounded-lg shadow-md m-4">
      <h2 className="project-title text-3xl mb-5">{title}</h2>
      <p className="project-description w-[500px] mb-3">{description}</p>
     { completed ?  <a href={projectLink} className="project-status text-blue-500 mb-3">{projectLink ? "✅ Terminé : Accéder au projet..." : "✅ Terminé"}</a> : <span className="text-yellow-500 font-bold mb-3">En cours de développement</span> }
      <a className="underline text-blue-500" href={gitHubLink} target="_blank" rel="noopener noreferrer">🖥️ Voir le code source</a>
    </div>
  )
}

export default ProjectCard