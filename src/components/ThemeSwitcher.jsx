import { Flex, IconButton, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex position="absolute" top="5" right={isMobile ? "5" : "8"}>
      <IconButton
        size="lg"
        aria-label={"Theme-Switcher"}
        icon={
          colorMode === "light" ? (
            <BsSunFill color="orange" size={24} />
          ) : (
            <BsFillMoonStarsFill color="#B794F4" size={20} />
          )
        }
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Flex>
  );
};

export default ThemeSwitcher;
