import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Arial, sans-serif",
        color: "gray.800",
        bg: "gray.50",
        margin: 0,
        padding: 0,
      },
    },
  },
});

export default theme;
