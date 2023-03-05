import NavBar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import NewsApi from "@/components/newsapi";

export default function () {
  return (
    <div>
      
      <Content>
      <NewsApi></NewsApi>
      </Content>
      
    </div>
    );
}
