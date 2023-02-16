import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import ramen from "@img/ramen.webp";
import book from "@img/book.webp";
import csie from "@img/csie.webp";

const blogs = [
  {
    title: "緯度拉麵",
    img: ramen,
    info: "我的拉麵食記",
    btns: [
      {
        title: "Repository",
        link: "https://github.com/weitude/ramen",
        icon: <FaGithub />
      },
      {
        title: "Website",
        link: "https://weitude.github.io/ramen/",
        icon: <FaGlobeAmericas />
      }
    ]
  },
  {
    title: "緯度書房",
    img: book,
    info: "我的讀書心得",
    btns: [
      {
        title: "Repository",
        link: "https://github.com/weitude/book",
        icon: <FaGithub />
      },
      {
        title: "Website",
        link: "https://weitude.github.io/book/",
        icon: <FaGlobeAmericas />
      }
    ]
  },
  {
    title: "緯度資工",
    img: csie,
    info: "我的資工筆記",
    btns: [
      {
        title: "Repository",
        link: "https://github.com/weitude/csie",
        icon: <FaGithub />
      },
      {
        title: "Website",
        link: "https://weitude.github.io/csie/",
        icon: <FaGlobeAmericas />
      }
    ]
  }
];

export default blogs;
