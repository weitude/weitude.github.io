// theme.js

// 1. import `extendTheme` function
import { extendTheme, useColorModeValue } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true
};

// 3. extend the theme
const theme = extendTheme({
  config,
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
