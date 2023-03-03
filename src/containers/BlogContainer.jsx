import blogs from "@/data/blogs.jsx";
import BlogCard from "@/components/BlogCard";
import { Flex } from "@chakra-ui/react";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const BlogContainer = () => {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" minH="100vh">
      <ThemeSwitcher />
      <Title />
      <Flex flexWrap="wrap" justifyContent="center" gap="50px" mx="100px" mb="100px">
        {blogs.map((blog, idx) => {
          return <BlogCard key={idx} blog={blog} />;
        })}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogContainer;
