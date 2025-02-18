"use client"

import ProjectCard from "../ProjectCard"
import { useState } from "react";

function Projects() {
  const TRANSLATE_LIMIT = 3 - 1

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
    <div id="projects-container" className={`text-[#FBE2E2] w-[300vw] border-2 flex flex-row border-white mt-[5rem] mb-[5rem] h-[80vh] transition-all`} style={{ transform: `translateX(-${pos}vw)` }}>
      <ProjectCard moveLeft={moveLeft} moveRight={moveRight} projectThumbnail={"test"} projectName={"Portfolio"} projectLink="" projectDesc="Mon portfolio officiel. Retrouver mes projets et mes compétences."></ProjectCard>
      <ProjectCard moveLeft={moveLeft} moveRight={moveRight} projectThumbnail={"test"} projectName={"Social Tree"} projectLink="" projectDesc="Créer une carte personnalisée ou vous pouvez afficher vos reseaux sociaux."></ProjectCard>
      <ProjectCard moveLeft={moveLeft} moveRight={moveRight} projectThumbnail={"test"} projectName={"Extension anti-procrastination"} projectLink="" projectDesc="Une extension permettant de bloquer les sites web indiques."></ProjectCard>
    </div>
  )
}

export default Projects