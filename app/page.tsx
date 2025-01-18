import Navbar from "@/components/Navbar";
import Intro from "@/components/section/Intro";
import Projects from "@/components/section/Projects";
import Whyme from "@/components/section/Whyme";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="font-orbitron">
          <Navbar />
        </div>
        <div className="font-montserrat">
          <Intro />
          <SectionTitle title="Pourquoi moi ?" id="skills"/>
          <Whyme />
          <SectionTitle title="Projets" id="projects"/>
          <Projects />
        </div>
      </main>
    </div>
  );
}
