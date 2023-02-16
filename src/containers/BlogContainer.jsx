import blogs from "@/data/Blogs.jsx";
import BlogCard from "@/components/BlogCard.jsx";
import { Flex } from "@chakra-ui/react";
import Title from "@/components/Title.jsx";
import Footer from "@/components/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher.jsx";

const BlogContainer = () => {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" minH="100vh">
      <ThemeSwitcher />
      <Title />
      <Flex flexWrap="wrap" justifyContent="center" gap="50px" mx="100px" mb="50">
        {blogs.map((blog, idx) => {
          return <BlogCard key={idx} blog={blog} />;
        })}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogContainer;
