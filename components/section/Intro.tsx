import Image from "next/image"

function Intro() {
  return (
    <section>
      <div id="about" className="flex justify-around items-center h-screen text-white">
        <div className="presentation-container">
          <h1 className="text-6xl">Bonjour, je suis <span className="text-blue-500">Rayan</span></h1>
          <p className="role text-4xl mt-3">Développeur web fullstack</p>
            <p className="mt-4 max-w-lg text-xl">
            Passionné par les nouvelles technologies et le développement web, j'aime créer des applications performantes et intuitives.
            Toujours en quête de nouveaux défis, je suis prêt à apporter mes compétences et mon enthousiasme à votre projet.
            </p>
        </div>
        <div className="picture-container">
          <Image src={"/moi.png"} alt="moi" width={300} height={200} className="rounded shadow-lg border-4 border-white"/>
        </div>
      </div>
    </section>
  )
}

export default Intro