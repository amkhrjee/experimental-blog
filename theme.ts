import { extendTheme } from "@chakra-ui/react";
import "@fontsource/space-grotesk";
import "@fontsource/crimson-pro";

const theme = extendTheme({
  fonts: {
    title: "Space Grotesk",
    body: "Crimson Pro",
  },
});

export default theme;
