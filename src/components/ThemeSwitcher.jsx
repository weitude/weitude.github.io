import { Flex, Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const spring = {
    type: "spring",
    stiffness: 100,
    mass: 0.5,
    damping: 5
  };

  return (
    <Flex position="absolute" top="5" right="8">
      <motion.div
        transition={spring}
        whileTap={{ rotate: 180, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <IconButton aria-label="colorMode" onClick={toggleColorMode} variant="none">
          {colorMode === "dark" ? (
            <Icon as={BsMoonFill} color="purple.400" boxSize="8" />
          ) : (
            <Icon as={BsSunFill} color="orange.500" boxSize="8" />
          )}
        </IconButton>
      </motion.div>
    </Flex>
  );
};

export default ThemeSwitcher;
