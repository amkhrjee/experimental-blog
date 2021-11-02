import { Box, Center, HStack, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import Image from "next/image";
import profile from "../public/profile.jpg";
import imageCSS from "./about.module.css";

const BlogSection = () => {
  return (
    <>
      <VStack>
        <Text>Blogs</Text>
      </VStack>
    </>
  );
};

export default BlogSection;
