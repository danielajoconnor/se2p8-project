import NavBar from "@/components/shared/navbar";
import Hero from "@/components/home/hero";
import Content from "@/components/home/content";
import Footer from "@/components/shared/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />

      <Content>
        <Hero/>

        <div className="text-center text-white w-2/3 mx-auto text-3xl tracking-tight">
          <p className="pt-[94px] pb-[94px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quas itaque alias ut inventore architecto eos temporibus obcaecati quia sequi?
          </p>
          </div>

      <div className="flex items-center bg-nature5">
        {/* <div className="bg-red-200 h-{559} w-{559}"></div> */}
        <img className="h-[559px] w-[559px]" src="/images/langdale-image.jpg" alt="" />
        <div className="w-[620px] text-center mx-auto text-white">
          <h2 className="text-5xl font-serif underline pb-6 ">Langdale Valley</h2>
          <p className="text-3xl pb-24 tracking-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum ab cumque vero exercitationem provident maxime saepe suscipit perspiciatis tempore.</p>
          <Link className="text-3xl underline font-serif" href="">Read More</Link>
        </div>
      </div>



      </Content>
      <Footer></Footer>
    </div>
  );
}
