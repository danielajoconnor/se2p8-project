import { useEffect, useState } from "react";
import SubTitle from "@/components/shared/title/subtitle";
import Content from "@/components/shared/content";

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


  if (!blogs || !blogs.length) {
    return (
      <div>
        <div className="w-full text-center mx-auto bg-nature5">
          <h1 className="py-[31px] md:py-[63px] font-serif text-3xl md:text-6xl tracking-tight text-nature1">
            Blogs
          </h1>
        </div>

        <div className="sm:grid-cols-1 md:grid-cols-2 text-center px-24 mx-auto text-base md:text-2xl py-16 text-nature1 tracking-tight bg-nature4">
              <p className="animate-pulse">...</p>
          </div>

      </div>
    );
  }

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
            <SubTitle className="hover:underline-offset-6 ">
              <a href={`/blogs/${blog.id}`}>{blog.title}</a>
            </SubTitle>
            <h3>{blog.author}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
