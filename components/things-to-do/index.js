import NavBar from "@/components/shared/navbar";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Link from "next/link";
import SubTitle from "../shared/title/subtitle";

export default function ThingsToDo() {
  return (
    <div>
      <div className="w-full text-center mx-auto bg-nature5">
        <p className="pt-[94px] pb-[94px] font-serif text-3xl md:text-4xl tracking-tight text-nature1">
          Explore all of the activities that the Lake District has to offer
        </p>
      </div>
      <div className="flex-layout w-full bg-nature4 text-nature1 ">
        <div>
          <img src="/images/hiking.jpg" alt="" />
          {/* <div className="flex flex-col items-center justify-center p-5 max-w-[800px] xl:w-[620px] md:pt-0 text-center mx-auto"> */}
          <div className="flex flex-col items-center justify-center px-5 py-16 md:py-0 max-w-[620px] text-center mx-auto">
            <SubTitle>Hiking</SubTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              accusantium consequatur aspernatur quisquam inventore voluptatem
              voluptatibus impedit sapiente, culpa repudiandae! Harum suscipit
              quas aliquam molestias libero ea itaque a modi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Autem fuga laudantium
              recusandae quasi asperiores soluta quos, numquam quo accusamus.
              Culpa quam suscipit quibusdam velit est voluptates dolore
              laboriosam maiores illo.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/biking2.jpg" alt="" />
          <div className="flex flex-col items-center justify-center px-5 py-16 md:py-0 max-w-[620px] text-center mx-auto">
            <SubTitle>Biking</SubTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              accusantium consequatur aspernatur quisquam inventore voluptatem
              voluptatibus impedit sapiente, culpa repudiandae! Harum suscipit
              quas aliquam molestias libero ea itaque a modi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Autem fuga laudantium
              recusandae quasi asperiores soluta quos, numquam quo accusamus.
              Culpa quam suscipit quibusdam velit est voluptates dolore
              laboriosam maiores illo.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/camping.jpg" alt="" />
          <div className="flex flex-col items-center justify-center px-5 py-16 md:py-0 max-w-[620px] text-center mx-auto">
            <SubTitle>Camping</SubTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              accusantium consequatur aspernatur quisquam inventore voluptatem
              voluptatibus impedit sapiente, culpa repudiandae! Harum suscipit
              quas aliquam molestias libero ea itaque a modi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Autem fuga laudantium
              recusandae quasi asperiores soluta quos, numquam quo accusamus.
              Culpa quam suscipit quibusdam velit est voluptates dolore
              laboriosam maiores illo.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/paragliding.jpg" alt="" />
          <div className="flex flex-col items-center justify-center px-5 py-16 md:py-0 max-w-[620px] text-center mx-auto">
            <SubTitle>Paragliding</SubTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              accusantium consequatur aspernatur quisquam inventore voluptatem
              voluptatibus impedit sapiente, culpa repudiandae! Harum suscipit
              quas aliquam molestias libero ea itaque a modi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Autem fuga laudantium
              recusandae quasi asperiores soluta quos, numquam quo accusamus.
              Culpa quam suscipit quibusdam velit est voluptates dolore
              laboriosam maiores illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
