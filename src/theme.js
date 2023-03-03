import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Trebuchet MS",
    body: "Avenir"
  },
  styles: {
    global: () => ({
      body: {
        color: "default",
        bgGradient: useColorModeValue(
          "linear(to-br,purple.100,white, cyan.100)",
          "linear(to-br,purple.900,gray.600, cyan.900)"
        )
      }
    })
  }
});

export default theme;
