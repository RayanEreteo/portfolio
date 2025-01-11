import Navbar from "@/components/Navbar";
import Intro from "@/components/section/Intro";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-orbitron">
      <main>
        <Navbar />
        <Intro />
        <SectionTitle title="Pourquoi moi ?" />
      </main>
    </div>
  );
}
