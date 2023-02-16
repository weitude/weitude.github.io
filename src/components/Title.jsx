import { Image, useColorModeValue } from "@chakra-ui/react";
import white from "@img/weitude_white.png";
import black from "@img/weitude_black.png";

const Title = () => {
  const invert = useColorModeValue("invert(5%)", "invert(95%)");
  const img = useColorModeValue(black, white);
  return <Image src={img} alt="自由緯度" my="8vh" w="25%" minW="300px" />;
};

export default Title;
