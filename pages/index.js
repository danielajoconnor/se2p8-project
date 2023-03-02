import NavBar from "@/components/shared/navbar";
import Hero from "@/components/home/hero";
import Content from "@/components/home/content";
import Footer from "@/components/shared/footer/footer";

export default function Home() {
  return (
    <div className>
      <NavBar></NavBar>
      <Hero></Hero>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
