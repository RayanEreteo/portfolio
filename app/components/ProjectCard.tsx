type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="project-card flex items-center justify-between flex-col p-4 border border-gray-300 rounded-lg shadow-md m-4">
      <h2 className="project-title text-3xl mb-5">{title}</h2>
      <p className="project-description w-[500px] mb-3">{description}</p>
      <a className="underline text-blue-500" href={link} target="_blank" rel="noopener noreferrer">Voir le code</a>
    </div>
  )
}

export default ProjectCard