import Content from "@/components/shared/content";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function BlogPage() {
    const router = useRouter();
    const [blog, setBlog] = useState(null);
    const {blogId} = router.query;

    useEffect(() => {
        if (!blogId) return;

        getBlog(blogId);
    }, [blogId]);

    const getBlog = async (id) => {
        const response = await fetch(`/api/blogs-by-id?id=${id}`);
        const data = await response.json();
        const { blog } = data;
        setBlog(blog);
      };

    //   console.log(blog)

    if (!blog) {
        return (
            <Content>
        <div className="w-full text-center mx-auto bg-nature5">
            <h1 className="pt-[94px] pb-[94px] font-serif text-3xl md:text-4xl tracking-tight text-nature1 animate-pulse">...</h1>
            <div className="sm:grid-cols-1 md:grid-cols-2 text-center px-24 mx-auto text-base md:text-2xl py-16 text-nature1 tracking-tight bg-nature4">
                <p className="">...</p>
            </div>
        </div>
            </Content>
        )
    }


    return(
        <Content>
        <div className="w-full text-center mx-auto bg-nature5">
            <div className="py-[31px] md:py-[94px]">
                <h1 className="font-serif text-3xl md:text-6xl tracking-tight text-nature1">{blog.title}</h1>
                <h2 className="font-sans text-1xl md:text-2xl tracking-tight text-nature1">{blog.author}</h2>
            </div>
            <div className="text-justify px-8 md:px-24 py-16  mx-auto text-xl md:text-2xl text-nature1 tracking-tight bg-nature4">
                <p className="">{blog.body}</p>
            </div>
        </div>
        </Content>
    )
}
