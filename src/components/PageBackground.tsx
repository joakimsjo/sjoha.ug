import React from "react";
import { useColorModeValue, Image } from "@chakra-ui/react";
import DarkIllustration from "./../static/images/background.svg";
import LightIllustration from "./../static/images/background-light.svg";

const PageBackground = () => {
  const Illustration = useColorModeValue(LightIllustration, DarkIllustration);

  return (
    <Image
      zIndex="-1"
      position="fixed"
      bottom="0"
      src={Illustration}
      minW="100%"
    />
  );
};

export default PageBackground;
