import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"

function Navbar() {
  return (
    <nav>
        <Flex className="navbar" p={"5px"} h={"90px"} background={"#314E89"} color={"white"} alignItems={"center"} justifyContent={"space-between"}>
            <Heading>Rayan Ereteo</Heading>
            <Flex w={"700px"} justifyContent={'space-between'} className="navbar-buttons-container">
                <Button colorScheme="cyan">Qui suis-je ?</Button>
                <Button colorScheme="cyan">Mes compétences</Button>
                <Button colorScheme="cyan">Mes Projets</Button>
                <Button colorScheme="green" w={"200px"} leftIcon={<MdEmail></MdEmail>}>Me Contacter</Button>
            </Flex>
        </Flex>
    </nav>
  )
}

export default Navbar