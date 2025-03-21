"use client"

import ProjectCard from "../ProjectCard"
import { useState } from "react";

function Projects() {
  const TRANSLATE_LIMIT = 4 - 1

  const [translateCount, settranslateCount] = useState<number>(0)
  const [pos, setPos] = useState<number>(0)

  function moveLeft(){
    if (translateCount == 0) return

    setPos((prev) => prev -= 100)
    settranslateCount((prev) => prev -= 1)

    console.log(translateCount);
  }

  function moveRight(){
    if (translateCount == TRANSLATE_LIMIT) return

    setPos((prev) => prev += 100)
    settranslateCount((prev) => prev += 1)

    console.log(translateCount);
    
  }

  return (
    <div id="projects-container" className={`text-[#FBE2E2] w-[400vw] border-2 flex flex-row border-white mt-[5rem] mb-[5rem] h-[80vh] transition-all`} style={{ transform: `translateX(-${pos}vw)` }}>
      <ProjectCard moveLeft={moveLeft} moveRight={moveRight} projectThumbnail={"extension.png"} projectName={"Extension anti-procrastination"} projectLink="https://github.com/RayanEreteo/AntiProcrastination" projectDesc="Une extension permettant de bloquer les sites web indiques."></ProjectCard>
      <ProjectCard cancelled moveLeft={moveLeft} moveRight={moveRight} projectThumbnail={"dreamkeeper.png"} projectName={"Dream Keeper"} projectLink="https://github.com/RayanEreteo/dreamkeeper" projectDesc="Blog sur le sujet des rêves lucides."></ProjectCard>
      <ProjectCard moveLeft={moveLeft} moveRight={moveRight} projectThumbnail={"portfolio.png"} projectName={"Portfolio"} projectLink="https://github.com/RayanEreteo/portfolio" projectDesc="Mon portfolio officiel. Retrouver mes projets et mes compétences."></ProjectCard>
      <ProjectCard moveLeft={moveLeft} moveRight={moveRight} projectThumbnail={"meteo.png"} projectName={"Application Météo"} projectLink="https://infometeo-78814.web.app/" projectDesc="Une simple application utilisant l'API d'openweathermap ."></ProjectCard>
    </div>
  )
}

export default Projects