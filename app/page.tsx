import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="presentation">
        <Box className="text-section-container" m={"auto"} w={"fit-content"} mt={"6rem"}>
          <Heading textAlign={'center'} fontSize={"3rem"}>Qui suis-je ?</Heading>
          <Text>Mon nom est Rayan, je suis un jeune développeur de 21 ans spécialisé dans le développement web.</Text>
        </Box>
      </section>
    </main>
  );
}