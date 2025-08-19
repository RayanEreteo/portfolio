import Typewriter from "../components/Typewriter"

function Introduction() {
  return (
    <section id="introduction" className="mt-12 m-auto text-center">
        <h1 className="text-7xl font-bold">Rayan Ereteo</h1>
        <Typewriter textToWrite="Un développeur passionné par l'informatique et la création d'applications." typeSpeed={30}/>
        {/* <p className="mt-6">Bienvenue sur mon portfolio où vous trouverez des informations sur mes compétences, mes projets et comment me contacter.</p> */}
    </section>
  )
}

export default Introduction