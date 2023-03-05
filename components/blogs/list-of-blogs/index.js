import { useEffect, useState } from "react";
import SubTitle from "@/components/shared/title/subtitle";

export default function ListOfBlogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => 
    {getBlogs()}, []);

    const getBlogs = async () => {
        const response = await fetch(`/api/blogs`);
        const data = await response.json();

        const {blogs} = data;


        setBlogs(blogs);
    }

    return (
        <div className="flex flex-wrap text-center">
        {blogs.map((blog, id) => (
             <div key={id} className="text-red-500 py-4 odd:bg-nature3 even:bg-nature4 grow w-full md:w-[256px]">
                <SubTitle>{blog.title}</SubTitle>
                <h3>{blog.author}</h3>
                {/* <p>{blog.body}</p> */}
             </div>
            ))}
      </div>
      );
      
}

