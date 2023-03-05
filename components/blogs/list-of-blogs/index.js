import { useEffect, useState } from "react";
import SubTitle from "@/components/shared/title/subtitle";

export default function ListOfBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await fetch(`/api/blogs`);
    const data = await response.json();

    const { blogs } = data;

    setBlogs(blogs);
  };

  return (
    <div>
      <ul className="flex flex-wrap text-center">
        {blogs.map((blog, id) => (
          <li
            key={id}
            className="text-nature1 py-4 odd:bg-nature3 even:bg-nature4 grow w-full md:w-[256px] list-none"
          >
            <SubTitle>{blog.title}</SubTitle>
            <h3>{blog.author}</h3>
            {/* <p>{blog.body}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
