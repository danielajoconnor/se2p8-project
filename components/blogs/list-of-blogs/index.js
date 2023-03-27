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
      <div className="w-full text-center mx-auto bg-nature5">
        <h1 className="py-[31px] md:py-[63px] font-serif text-3xl md:text-6xl tracking-tight text-nature1">
          Blogs
        </h1>
      </div>
      <ul className="flex flex-wrap text-center">
        {blogs.map((blog, id) => (
          
            <li
              key={id}
              className="text-nature1 py-4 odd:bg-nature3 even:bg-nature4 grow w-full md:w-[256px] list-none"
            >
              <SubTitle className="hover:underline-offset-6 "><a href={`/blogs/${blog.id}`}>{blog.title}</a></SubTitle>
              <h3>{blog.author}</h3>
              
            </li>
          
        ))}
      </ul>
    </div>
  );
}
