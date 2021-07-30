import React from "react";
import { useColorModeValue, chakra } from "@chakra-ui/react";
import DarkIllustration from "./../static/images/background.svg";
import LightIllustration from "./../static/images/background-light.svg";

const PageBackground = () => {
  const Illustration = useColorModeValue(LightIllustration, DarkIllustration);

  return (
    <chakra.img position="fixed" bottom="0" src={Illustration} minW="100%" />
  );
};

export default PageBackground;
