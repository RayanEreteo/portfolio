import Navbar from "@/components/Navbar";
import Intro from "@/components/section/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-orbitron">
      <main>
        <Navbar />
        <Intro />
      </main>
    </div>
  );
}
