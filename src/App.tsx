import * as React from "react";
import { ChakraProvider, Box, Portal } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import theme from "./theme/index";
import Presentation from "./components/Presentation";
import PageBackground from "./components/PageBackground";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher
      justifySelf="flex-end"
      zIndex="2"
      position="absolute"
      right={["0.5em", "2em"]}
      top={["0.5em", "1em"]}
    />
    <PageBackground />
    <Portal>
      <Box textAlign="center">
        <Presentation />
      </Box>
    </Portal>
  </ChakraProvider>
);
