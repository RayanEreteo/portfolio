import ProjectCard from "../ProjectCard"

function Projets() {
  return (
    <div className="skills-wrapper m-auto text-center">
        <h1 className="large-title">Mes Projets</h1>
        <p>
          Vous trouverez ici une sélection de mes projets, mettant en avant mes compétences en développement web, front-end et back-end. <br />
          Je vous invite à découvrir les codes sources disponibles sur mon <a className="underline text-blue-500" href="https://github.com/RayanEreteo" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <div className="projects-container grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <ProjectCard title="Would You Rather" description="Un jeu de questions-réponses où les utilisateurs doivent choisir entre deux options." link="https://github.com/RayanEreteo/WouldYouRather" />
          <ProjectCard title="Cute Cat" description="Un projet mettant en avant des chats mignons." link="https://github.com/RayanEreteo/CuteCat" />
          <ProjectCard title="Extension anti-procrastination" description="Une extension de navigateur pour aider à lutter contre la procrastination." link="https://github.com/RayanEreteo/AntiProcrastination" />
        </div>
    </div>
  )
}

export default Projets