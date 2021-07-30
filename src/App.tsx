import * as React from "react";
import { ChakraProvider, Box, Image } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import theme from "./theme/index";
import Illustration from "./static/images/background.svg";
import Presentation from "./components/Presentation";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher
      justifySelf="flex-end"
      zIndex="1"
      position="absolute"
      right="2em"
      top="1em"
    />
    <Box textAlign="center">
      <Presentation />
      <Image
        zIndex="-1"
        position="fixed"
        bottom="0"
        src={Illustration}
        minW="100%"
      />
    </Box>
  </ChakraProvider>
);
