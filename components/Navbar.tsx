import { Box, Button, Flex, Heading } from "@chakra-ui/react"

function Navbar() {
  return (
    <nav>
        <Flex className="navbar" p={"5px"} h={"90px"} background={"#314E89"} color={"white"} alignItems={"center"} justifyContent={"space-between"}>
            <Heading>Rayan Ereteo</Heading>
            <Flex className="navbar-buttons-container">
                <Button colorScheme="cyan">Qui suis-je ?</Button>
                <Button colorScheme="cyan">Mes compétences</Button>
                <Button colorScheme="cyan">Mes Projets</Button>
                <Button colorScheme="green">Me Contacter</Button>
            </Flex>
        </Flex>
    </nav>
  )
}

export default Navbar