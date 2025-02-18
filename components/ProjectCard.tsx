import ProjectCardArrow from "./ProjectCardArrow"

interface projectI {
  projectName: string,
  projectDesc: string,
  projectThumbnail: string,
  projectLink: string,
  inDev?: boolean
  moveLeft: () => void,
  moveRight: () => void
}

function ProjectCard({ projectName, projectDesc, projectLink, moveLeft, moveRight }: projectI) {
  return (
    <div className={`project-card h-[100%] w-[100%] flex justify-around items-center`}>
      <ProjectCardArrow direction="left" onClick={moveLeft}/>
      <div className="text-content text-center">
        <h1 className="text-4xl font-bold">{projectName}</h1>
        <p className="text-2xl">{projectDesc}</p>
        <br />
        <a className={`mt-11 bg-red-600 p-3 rounded`} href={projectLink} target="_blank">Visiter le projet</a>
      </div>
      <ProjectCardArrow direction="right" onClick={moveRight}/>
    </div>
  )
}

export default ProjectCard