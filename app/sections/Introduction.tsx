import Typewriter from "../components/Typewriter"

function Introduction() {
  return (
    <section id="introduction" className="mt-12 m-auto text-center">
        <h1 id="name-drop" className="text-7xl mb-4 p-2 font-bold">Rayan Ereteo</h1>
        <Typewriter textToWrite="Un développeur passionné par l'informatique et la création d'applications." typeSpeed={30}/>
        <div className="introduction-wrapper w-[40rem] m-auto border-2 rounded border-black-50 bg-[#f0f0f0] p-4">
          <p className="normal-text">Bienvenue sur mon portfolio où vous trouverez des informations sur mes compétences, mes projets et comment me contacter.</p>
        </div>
        <h3 className="medium-title">Qui suis-je ?</h3>
    </section>
  )
}

export default Introduction