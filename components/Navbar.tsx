import { Box, Center } from "@chakra-ui/layout";
import { Button, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";

const Navbar = () => {
  return (
    <Flex fontFamily={theme.fonts.title} color="white" h="14">
      <Center flex="1" w="100px" bg="green.500"></Center>
      <Center flex="1" bg="blue.500" size="150px">
        <Text fontWeight="bold" fontSize="3xl">
          aniruddh's blog
        </Text>
      </Center>
      <Center flex="1" textAlign="right" bg="tomato">
        <Button colorScheme="blue">Sign Up 📧</Button>
      </Center>
    </Flex>
  );
};

export default Navbar;
