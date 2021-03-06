import { Box, Center, HStack, Stack, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import Image from "next/image";
import profile from "../public/profile.jpg";
import imageCSS from "./about.module.css";
import BlogModule from "./BlogModule";

const BlogSection = () => {
  return (
    <>
      <VStack m="4">
        <Box p="4">
          <Text fontSize="2xl" fontWeight="semibold">
            Read my blogs 📝
          </Text>
        </Box>
        <BlogModule />
      </VStack>
    </>
  );
};

export default BlogSection;
