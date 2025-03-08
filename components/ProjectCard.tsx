import ProjectCardArrow from "./ProjectCardArrow"

interface projectI {
  projectName: string,
  projectDesc: string,
  projectThumbnail: "portfolio.png" | "extension.png" | "socialtree.png" | "meteo.png"
  projectLink: string,
  inDev?: boolean,
  cancelled?: boolean,
  moveLeft: () => void,
  moveRight: () => void
}

function ProjectCard({ projectName, projectDesc, projectThumbnail, projectLink, moveLeft, moveRight, inDev, cancelled }: projectI) {
  return (
    <div className={`project-card h-[100%] w-[100%] flex justify-around items-center`}>
      <div className="thumbnail-container w-[100vw] h-[100%]  absolute -z-10 brightness-50" style={{ backgroundImage: `url(/thumbnail/${projectThumbnail})`}}></div>
      <ProjectCardArrow direction="left" onClick={moveLeft}/>
      <div className="text-content text-center">
        <h1 className="text-4xl font-bold">{projectName}</h1>
        <p className="text-2xl">{projectDesc}</p>
        <br />
        <a className={`mt-11 ${inDev || cancelled ? "bg-black pointer-events-none" : "bg-red-600"} p-3 rounded`} href={projectLink} target="_blank">{inDev || cancelled ? (inDev ? "Projet en développement" : "Projet annulé") : "Visiter le projet"}</a>
      </div>
      <ProjectCardArrow direction="right" onClick={moveRight}/>
    </div>
  )
}

export default ProjectCard