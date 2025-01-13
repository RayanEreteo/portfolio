import Navbar from "@/components/Navbar";
import Intro from "@/components/section/Intro";
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
          <SectionTitle title="Pourquoi moi ?" />
          <Whyme />
        </div>
      </main>
    </div>
  );
}
