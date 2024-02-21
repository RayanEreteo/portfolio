"use client"

import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { motion } from "framer-motion"

function Navbar() {

  const redirect = (redirectTo: string) => window.location.href = redirectTo;

  return (
    <nav>
        <Flex className="navbar" p={"5px"} h={"90px"} background={"#314E89"} color={"white"} alignItems={"center"} justifyContent={"space-between"}>
            <Heading ml={"3rem"}>Rayan Ereteo</Heading>
            <motion.div animate={{x: -1100}}>
              <Flex w={"700px"} position={"relative"} left={"1000px"} justifyContent={'space-between'} className="navbar-buttons-container">
                <Button colorScheme="cyan" className="button">Qui suis-je ?</Button>
                <Button colorScheme="cyan" className="button">Mes compétences</Button>
                <Button colorScheme="cyan" className="button">Mes Projets</Button>
                <Button colorScheme="green" className="button" w={"200px"} leftIcon={<MdEmail></MdEmail>}>Me Contacter</Button>
              </Flex>
            </motion.div>
        </Flex>
    </nav>
  )
}

export default Navbar