import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const blogs = [
  {
    title: "緯度拉麵",
    img: "https://i.imgur.com/SEW7r2M.jpg",
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
    img: "https://i.imgur.com/kG4XmAM.png",
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
    img: "https://i.imgur.com/254bTSz.png",
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
