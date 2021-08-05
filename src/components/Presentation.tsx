import React from "react";
import {
  Flex,
  VStack,
  Heading,
  Divider,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  HERO_TEXT,
  HERO_SECONDARY_TEXT,
  GITHUB_PAGE_URL,
  TWITTER_PAGE_URL,
  LINKEDIN_PAGE_URL,
  PROFILE_IMAGE_URL,
} from "../utils/constants";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import LinkButton from "./LinkButton";

const Presentation = () => {
  const textColor = useColorModeValue("dark", "#CDE2F4");
  const seperatorColor = useColorModeValue("#354B5E", "#7FBFF6");
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  const minH = useBreakpointValue({
    base: undefined,
    md: "90vh",
  });

  const marginT = useBreakpointValue({
    base: "8",
    md: "0",
  });

  console.log(marginT);

  return (
    <Flex
      justify="center"
      align={["center", "center"]}
      minH={minH}
      position="relative"
      zIndex="1"
    >
      <VStack
        spacing={4}
        borderRadius="16"
        mt={marginT}
        px="4"
        minW={["90%", "350px"]}
        maxW={["90%", "400px"]}
        color={textColor}
        zIndex="1"
      >
        <Image
          src={PROFILE_IMAGE_URL}
          borderRadius="full"
          border="solid"
          borderWidth="4px"
          borderColor="rgb(205,226,244)"
          boxSize="200px"
        />
        <Heading size="lg">Hi, there! 👋🏻</Heading>
        <VStack spacing="0" fontWeight="medium">
          <Text fontSize="lg">{HERO_TEXT}</Text>
          <Text fontSize="md">{HERO_SECONDARY_TEXT}</Text>
        </VStack>
        <Flex direction="row" align="center" w="100%">
          <Divider flex="1" orientation="horizontal" />
          <Text mx="2" color={seperatorColor}>
            Social Links
          </Text>
          <Divider flex="1" orientation="horizontal" />
        </Flex>
        <HStack
          width="100%"
          flex="1"
          align="flex-end"
          justify="space-between"
          justifySelf="flex-end"
        >
          <LinkButton
            key="github"
            size={buttonSize}
            to={GITHUB_PAGE_URL ?? ""}
            color="white"
            backgroundColor="black"
            _hover={{ bg: "blackAlpha.700" }}
            leftIcon={<FaGithub />}
          >
            GitHub
          </LinkButton>
          <LinkButton
            key="twitter"
            size={buttonSize}
            to={TWITTER_PAGE_URL ?? ""}
            colorScheme="twitter"
            leftIcon={<FaTwitter />}
          >
            Twitter
          </LinkButton>
          <LinkButton
            key="linkedin"
            size={buttonSize}
            to={LINKEDIN_PAGE_URL ?? ""}
            colorScheme="twitter"
            leftIcon={<FaLinkedin />}
          >
            Linkedin
          </LinkButton>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Presentation;
