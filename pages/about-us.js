import AboutUsHero from "@/components/about-us-hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";

export default function Accommodation() {
  return (
    <div>
      <NavBar/>
      <Content className="bg-nature5">
        <AboutUsHero/>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 text-justify md:text-start w-11/12 xl:w-3/4 px-4 gap-8 md:gap-16 mx-auto text-xl py-16 text-nature1 ">
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam fugiat sunt doloremque. Impedit illum sint accusantium ab repellat placeat, dolor nihil error magni, provident dolorem enim, assumenda voluptatem quo. Amet, dicta molestiae neque ipsum accusantium pariatur fugiat commodi porro ad esse alias maxime. Numquam laboriosam beatae accusamus aliquam voluptas praesentium, saepe veniam ipsam in, obcaecati dicta. In ut facere natus laborum voluptatum! Inventore, autem ipsum. Aliquam laboriosam minima explicabo quaerat, fugit incidunt veritatis exercitationem dicta repellendus numquam velit fuga mollitia qui, at aut quasi iusto quisquam nemo ipsum nam cupiditate esse. Temporibus, quasi eum in incidunt amet quae doloremque.</p>

          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam velit nesciunt at, ex quam molestias laboriosam ullam quasi delectus quo quas, et quisquam ratione possimus! Illo nihil vitae excepturi incidunt nesciunt! Esse mollitia laudantium debitis, fugiat facere perspiciatis libero at maxime commodi exercitationem corporis quibusdam perferendis consequuntur, numquam aliquam architecto! Totam rem provident assumenda, nisi fugit ut autem aliquam vero soluta veritatis voluptatum fuga. Aperiam optio, eum illum ut delectus voluptates! Quas quod veniam nemo nisi non doloribus, distinctio maxime ullam ex, neque voluptate sed, omnis possimus quaerat eligendi dignissimos architecto repellendus quisquam nostrum tempora? Animi culpa perferendis porro.</p>
        </div>
      </Content>
      <Footer/>
    </div>
  );
}
