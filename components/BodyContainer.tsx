import { Box, Center } from "@chakra-ui/layout";
import { Button, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import About from "./About";
import BlogSection from "./BlogSection";

const BodyContainer = () => {
  return (
    <Flex fontFamily={theme.fonts.title} color="white">
      <Center flex="1" w="100px" bg="green.500">
        <About />
      </Center>
      <Center flex="2" bg="blue.500" size="150px">
        <BlogSection />
      </Center>
    </Flex>
  );
};

export default BodyContainer;
