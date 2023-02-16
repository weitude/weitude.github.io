import blogs from "@/data/Blogs.jsx";
import BlogCard from "@/components/BlogCard.jsx";
import { Flex } from "@chakra-ui/react";
import Title from "@/components/Title.jsx";
import Footer from "@/components/Footer.jsx";

const BlogContainer = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      // h="100vh"
      minH="100vh"
    >
      <Title />
      <Flex flexWrap="wrap" justifyContent="center" gap="50px" p="100px">
        {blogs.map((blog, idx) => {
          return <BlogCard key={idx} blog={blog} />;
        })}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogContainer;
