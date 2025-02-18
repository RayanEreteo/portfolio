import Navbar from "@/components/Navbar";
import Contact from "@/components/section/Contact";
import Intro from "@/components/section/Intro";
import Projects from "@/components/section/Projects";
import Whyme from "@/components/section/Whyme";
import SectionTitle from "@/components/SectionTitle";

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
          <SectionTitle title="Contact" id="contact"/>
          <Contact />
        </div>
      </main>
    </div>
  );
}
