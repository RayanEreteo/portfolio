import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import TextSection from "@/components/TextSection";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="presentation">
        <TextSection sectionTitle={"Qui suis-je ?"} text={"Mon nom est Rayan, je suis un jeune développeur de 21 ans spécialisé dans le développement web."}></TextSection>
      </section>
    </main>
  );
}