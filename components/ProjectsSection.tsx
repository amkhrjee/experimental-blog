import { Box, Center, HStack, Stack, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import ProjectModule from "./ProjectModule";

const ProjectSection = () => {
  return (
    <>
      <VStack m="4">
        <Box p="4">
          <Text fontSize="2xl" fontWeight="semibold">
            Projects 🛠️
          </Text>
        </Box>
        <ProjectModule />
      </VStack>
    </>
  );
};

export default ProjectSection;
