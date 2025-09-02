import { Metadata } from "next";
import Projects from "./page"

export const metadata: Metadata = {
  title: "Projets",
  description: "Mes projets.",
};

function layout() {
  return (
    <div>
        <Projects />
    </div>
  )
}

export default layout