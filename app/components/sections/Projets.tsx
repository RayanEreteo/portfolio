import ProjectCard from "../ProjectCard"
import Image from "next/image"

function Projets() {
  return (
    <div className="skills-wrapper m-auto text-center">
      <h1 className="large-title">Mes Projets</h1>
      <p>
        Vous trouverez ici une sélection de mes projets, mettant en avant mes compétences en développement web, front-end et back-end. <br />
        Je vous invite à découvrir les codes sources disponibles sur mon <a className="underline text-blue-500" href="https://github.com/RayanEreteo" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
      <div className="projects-container grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProjectCard completed={false} title="Would You Rather" description="Un jeu de questions-réponses où les utilisateurs doivent choisir entre deux options." gitHubLink="https://github.com/RayanEreteo/WouldYouRather" />
        <ProjectCard completed={true} title="Cute Cat" description="Un projet qui montre une photo de chat au hasard." projectLink="https://cutecat-two.vercel.app/" gitHubLink="https://github.com/RayanEreteo/CuteCat" />
        <ProjectCard completed={true} title="Extension anti-procrastination" description="Une extension de navigateur pour aider à lutter contre la procrastination." gitHubLink="https://github.com/RayanEreteo/AntiProcrastination" />
        <div className="project-card flex items-center justify-between flex-col p-4 border border-gray-300 rounded-lg shadow-md m-4">
          <h2 className="project-title text-3xl">{"Et plus encore..."}</h2>
          <Image src="dot.svg" alt="Dot" width={100} height={100} />
          <a className="underline text-blue-500" href="https://github.com/RayanEreteo" target="_blank" rel="noopener noreferrer">Accéder a mon github.</a>
        </div>
      </div>
    </div>
  )
}

export default Projets