import { Box, Center } from "@chakra-ui/layout";
import { Button, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import About from "./About";
import BlogSection from "./BlogSection";
import ProjectSection from "./ProjectsSection";

const BodyContainer = () => {
  return (
    <Flex fontFamily={theme.fonts.title} color="white">
      <Center flex="1" w="100px" bg="green.500">
        <About />
      </Center>
      <Box flex="1" bg="blue.500" size="150px">
        <BlogSection />
      </Box>
      <Box flex="1" bg="red.500" size="150px">
        <ProjectSection />
      </Box>
    </Flex>
  );
};

export default BodyContainer;
