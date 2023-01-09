import Btn from "./Btn";
import Card from "./Card";
import { useState } from "react";
const menus = [
  { name: "All", category: "" },
  { name: "UI Design", category: "UI" },
  { name: "UX Design", category: "UX" },
  { name: "DEV Design", category: "DEV" },
  { name: "Articles", category: "" },
  { name: "Tutorials", category: "" },
  { name: "News", category: "" },
];
const blogs = [
  {
    category: "UI",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content1.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "UX",
    title: "This way is wrong about UX Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "UI",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content1.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "DEV",
    title: "This way is wrong about DEV Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "DEV",
    title: "This way is wrong about DEV Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content1.png",
    date: "NOV 23 2020",
    link: "#",
  },
  {
    category: "DEV",
    title: "This way is wrong about DEV Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    image: "/images/content2.png",
    date: "NOV 23 2020",
    link: "#",
  },
];

const Content = () => {
  const [news, setNews] = useState(blogs);

  const handleChange = (category) => {
    console.log("cat", category);
    const filtered = blogs.filter((item) => item.category === category);
    console.log("FIL", filtered);
    setNews(filtered);
  };

  return (
    <div className="container">
      <div className="content-menu">
        {menus.map((menu) => {
          return <Btn menu={menu} handleChange={handleChange} />;
        })}
      </div>
      <div className="grid">
        {news.map((blog) => {
          return <Card card={blog} />;
        })}
      </div>
    </div>
  );
};

export default Content;
