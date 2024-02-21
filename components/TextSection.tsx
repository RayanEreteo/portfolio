import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";

function TextSection({sectionTitle, text}: any) {
  return (
    <Box className="text-section-container" m={"auto"} w={"fit-content"} mt={"6rem"}>
        <Heading textAlign={'center'} fontSize={"3rem"}>{sectionTitle}</Heading>
        <Text>{text}</Text>
    </Box>
  )
}

export default TextSection