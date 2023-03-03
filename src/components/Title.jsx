import { Flex, Image, Skeleton, useColorModeValue } from "@chakra-ui/react";
import white from "@img/weitude_white.webp";
import black from "@img/weitude_black.webp";

const Title = () => {
  const img = useColorModeValue(black, white);
  return (
    <Skeleton isLoaded={img}>
      <Flex justifyContent="center">
        <Image src={img} alt="自由緯度" ml="4" mt="8vh" mb="6vh" w="25%" minW="300px" />
      </Flex>
    </Skeleton>
  );
};

export default Title;
