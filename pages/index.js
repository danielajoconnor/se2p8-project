import NavBar from "@/components/shared/navbar";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />

      <Content className="bg-nature4">
        <Hero />

        <div className="text-center w-2/3 mx-auto text-3xl tracking-tight text-nature1">
          <p className="pt-[94px] pb-[94px] font-serif">
            “You may leave the Lake District, but once you've been, it'll never
            leave you…”
          </p>
        </div>

        <div className="md:flex md:flex-row md:items-center bg-nature5 ">
          {/* <div className="max-h-fit max-w-96 md:w-[559px] bg-langdale"></div> */}
          <div className="h-[400px] md:h-[559px] w-full md:w-[559px] bg-langdale"></div>
          <div className="w-10/12 md:w-[620px] py-16 md:pt-0 text-center mx-auto text-nature1 md:0">
            <h2 className="text-5xl font-serif underline pb-8 ">
              Langdale Valley
            </h2>
            <p className="text-3xl pb-12 md:pb-24 tracking-tight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem voluptatum ab cumque vero exercitationem provident
              maxime saepe suscipit perspiciatis tempore.
            </p>
            <Link className="text-3xl underline font-serif" href="">
              Read More
            </Link>
          </div>
        </div>

      </Content>
      <Footer></Footer>
    </div>
  );
}
