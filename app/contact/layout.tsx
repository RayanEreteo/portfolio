import { Metadata } from "next";
import Projects from "./page"

export const metadata: Metadata = {
  title: "Contact & CV",
  description: "Mes informations de contact et mon CV.",
};

function layout() {
  return (
    <div>
        <Projects />
    </div>
  )
}

export default layout