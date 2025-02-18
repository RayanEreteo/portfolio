import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi"

interface cardArrowI {
  direction: "left" | "right",
  onClick: () => void
}

function ProjectCardArrow({direction, onClick}: cardArrowI) {
  return (
    <div className="project-card-arrow bg-white rounded-full flex items-center transition-all hover:scale-110">
        <button onClick={onClick}>{direction == "left" ? <BiArrowToLeft size={60} color="black"/> : <BiArrowToRight size={60} color="black"/>}</button>
    </div>
  )
}

export default ProjectCardArrow