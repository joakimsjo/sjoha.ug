import {
  theme as defaultTheme,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    config,
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
