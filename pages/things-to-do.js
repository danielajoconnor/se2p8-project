import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";
import ThingsToDo from "@/components/things-to-do";

export default function () {
  return (
    <div>
      <NavBar />
      <Content>
        <ThingsToDo></ThingsToDo>
      </Content>
      <Footer />
    </div>
  );
}
