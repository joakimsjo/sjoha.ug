import { theme as defaultTheme, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    styles: {
      global: (props) => ({
        body: {
          bg: mode("#7FBFF6", "#354B5E")(props),
        },
      }),
    },
  },
  defaultTheme
);

export default theme;
