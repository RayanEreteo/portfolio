import SoftskillsCard from "../components/Softskillscard"
import Typewriter from "../components/Typewriter"

function Introduction() {
  return (
    <section id="introduction" className="mt-12 m-auto text-center">
        <h1 id="name-drop" className="text-7xl mb-4 p-2 font-bold">Rayan Ereteo</h1>
        <Typewriter textToWrite="Un développeur passionné par l'informatique et la création d'applications." typeSpeed={30}/>
        <div className="introduction-wrapper w-[50vw] lg:w-[40rem] m-auto border-2 rounded border-black-50 bg-[#f0f0f0] p-4">
          <p className="normal-text">Bienvenue sur mon portfolio où vous trouverez des informations sur mes compétences, mes projets et comment me contacter.</p>
        </div>
        <h3 className="medium-title">Qui suis-je ?</h3>
        <div className="soft-skills-cards-container flex flex-col items-center sm:flex-row md:flex-row lg:flex-row lg:justify-around mt-[3rem]">
          <SoftskillsCard title="Communication" description="Capacité à exprimer des idées clairement et à écouter les autres." />
          <SoftskillsCard title="Passioné" description="Un intérêt profond pour la technologie et l'innovation." />
          <SoftskillsCard title="Résolution de problèmes" description="Capacité à identifier des problèmes et à proposer des solutions." />
        </div>
    </section>
  )
}

export default Introduction