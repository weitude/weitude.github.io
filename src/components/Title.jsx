import { Image, useColorModeValue } from "@chakra-ui/react";
import weitude from "@img/weitude.png";

const Title = () => {
  const invert = useColorModeValue("invert(5%)", "invert(95%)");
  return <Image src={weitude} alt="自由緯度" my="8vh" w="25%" minW="300px" filter={invert} />;
};

export default Title;
