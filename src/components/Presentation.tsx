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
import { EmailIcon } from "@chakra-ui/icons";
import {
  HERO_TEXT,
  HERO_SECONDARY_TEXT,
  GITHUB_PAGE_URL,
  TWITTER_PAGE_URL,
  MAIL_ADDRESS,
} from "../utils/constants";
import { FaGithub, FaTwitter } from "react-icons/fa";

import LinkButton from "./LinkButton";

const Presentation = () => {
  const textColor = useColorModeValue("dark", "#CDE2F4");
  const seperatorColor = useColorModeValue("#354B5E", "#7FBFF6");

  const minH = useBreakpointValue({
    base: undefined,
    md: "100vh",
  });

  return (
    <Flex
      justify="center"
      align={["flex-start", "center"]}
      minH={minH}
      position="relative"
      zIndex="1"
    >
      <VStack
        spacing={4}
        borderRadius="16"
        p="4"
        mt="8"
        minW={["90%", "350px"]}
        maxW={["90%", "400px"]}
        color={textColor}
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1289988561127841792/PIKjur9t_400x400.jpg"
          borderRadius="full"
          border="solid"
          borderWidth="4px"
          borderColor="rgb(205,226,244)"
          boxSize="200px"
        />
        <Heading size="lg">Hi, there! 👋🏻</Heading>
        <VStack spacing="0">
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
            to={GITHUB_PAGE_URL ?? ""}
            color="white"
            backgroundColor="black"
            _hover={{ bg: "blackAlpha.700" }}
            leftIcon={<FaGithub />}
          >
            Github
          </LinkButton>
          <LinkButton
            key="twitter"
            to={TWITTER_PAGE_URL ?? ""}
            colorScheme="twitter"
            leftIcon={<FaTwitter />}
          >
            Twitter
          </LinkButton>
          <LinkButton
            key="mail"
            to={`mailto:${MAIL_ADDRESS}`}
            colorScheme="twitter"
            leftIcon={<EmailIcon />}
          >
            Mail
          </LinkButton>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Presentation;
