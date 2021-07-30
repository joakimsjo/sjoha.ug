import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import theme from "./theme/index";
import Presentation from "./components/Presentation";
import PageBackground from "./components/PageBackground";

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
      <PageBackground />
    </Box>
  </ChakraProvider>
);
