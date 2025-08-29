import { Metadata } from "next";
import Skills from "./page"

export const metadata: Metadata = {
  title: "Compétences",
  description: "Mes compétences.",
};

function layout() {
  return (
    <div>
        <Skills></Skills>
    </div>
  )
}

export default layout