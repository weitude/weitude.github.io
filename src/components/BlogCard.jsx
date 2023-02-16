import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";

const BlogCard = ({ blog }) => {
  const { title, img, info, btns } = blog;
  return (
    <Card w="20%" minW="300px">
      <CardBody>
        <Image src={img} alt={title} borderRadius="lg" w="100%" h="70%" fit="cover" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{info}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="4">
          {btns.map((btn, idx) => {
            return (
              <Button key={idx} size="sm" leftIcon={btn.icon} onClick={() => window.open(btn.link)}>
                {btn.title}
              </Button>
            );
          })}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
