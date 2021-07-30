import { theme as defaultTheme, extendTheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    styles: {
      global: {
        body: {
          bg: "#354B5E",
        },
      },
    },
  },
  defaultTheme
);

export default theme;
