import { Box, Center, HStack, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import Image from "next/image";
import profile from "../public/profile.jpg";
import imageCSS from "./about.module.css";

const About = () => {
  return (
    <>
      <Center p="8">
        <VStack>
          <Image
            className={imageCSS.image}
            src={profile}
            alt="my memoji profile picture"
          />

          <Text fontWeight="extrabold">aniruddh mukherjee</Text>
          <HStack>{/* todo */}</HStack>
          <Text>
            Hi 👋, I'm a 19 yo developer, designer and builder. I started my
            journey as a freelancer, doing projects for local and international
            small to medium sized business, but later on I moved my focus on
            working with early-stage startups. I help people with designing user
            interfaces, (sometimes even logos!), building their backend and
            sometimes building their frontend. The work varies from contract to
            contract.
          </Text>
          <Text>Right now I'm building prysm as a solo-dev.</Text>
          <Text>Learn more about prysm!</Text>
        </VStack>
      </Center>
    </>
  );
};

export default About;
