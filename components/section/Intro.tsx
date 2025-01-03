"use client"

import Image from "next/image"

function Intro() {
  return (
    <section>
      <div id="about" className="flex justify-around items-center h-screen text-white">
        <div className="presentation-container">
          <h1 className="text-5xl">Bonjour, je suis <span className="text-blue-500">Rayan</span></h1>
          <p className="role text-2xl mt-3">Développeur web fullstack</p>
          <p>Je suis un</p>
        </div>
        <div className="picture-container">
          <Image src={"/moi.png"}  alt="moi" width={300} height={200}/>
        </div>
      </div>
    </section>
  )
}

export default Intro