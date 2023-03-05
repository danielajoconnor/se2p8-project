import NavBar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import ListOfBlogs from "@/components/blogs/list-of-blogs";

export default function Blog() {
  return( 
    <div>
      
    <Content>
      <ListOfBlogs />
    </Content>
    
  </div>
  )
}
