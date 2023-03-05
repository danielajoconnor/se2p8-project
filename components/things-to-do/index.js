import NavBar from "@/components/shared/navbar";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Link from "next/link";
import SubTitle from "../shared/title/subtitle";

export default function ThingsToDo() {
  return (
    <div>
      <div className="flex-layout w-full bg-nature4 text-nature1 ">
        <div>
          <img
            className="h-[400px] md:h-[450px] md:w-[559px] w-full object-cover"
            src="/images/hiking.jpg"
            alt=""
          />

          <div className="flex flex-col items-center justify-center p-5 w-10/12 md:w-[620px] md:pt-0 text-center mx-auto">
            <SubTitle>Hiking</SubTitle>
            <p className="">
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
          <img
            className="h-[400px] md:h-[450px] w-full md:w-[559px] object-cover"
            src="/images/biking2.jpg"
            alt=""
          />

          <div className="flex flex-col items-center justify-center p-5 w-10/12 md:w-[620px] md:pt-0 text-center mx-auto">
            <SubTitle>
              Biking
            </SubTitle>
            <p className="">
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

        {/* <div className="grid grid-cols-2 grid-rows-1">
          <div className="description h-[450px] flex flex-col items-center justify-center p-5 text-center">
            <span className="text-3xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusantium consequatur aspernatur quisquam inventore voluptatem
            voluptatibus impedit sapiente, culpa repudiandae! Harum suscipit
            quas aliquam molestias libero ea itaque a modi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Autem fuga laudantium
            recusandae quasi asperiores soluta quos, numquam quo accusamus.
            Culpa quam suscipit quibusdam velit est voluptates dolore laboriosam
            maiores illo.
          </div>
          <div className="image h-[450px]">
            <img src="/images/biking2.jpg" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1">
          <div className="image h-[450px]">
            <img src="/images/camping.jpg" alt="" />
          </div>
          <div className="description h-[450px] flex flex-col items-center justify-center p-5 text-center">
            <span className="text-3xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusantium consequatur aspernatur quisquam inventore voluptatem
            voluptatibus impedit sapiente, culpa repudiandae! Harum suscipit
            quas aliquam molestias libero ea itaque a modi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Autem fuga laudantium
            recusandae quasi asperiores soluta quos, numquam quo accusamus.
            Culpa quam suscipit quibusdam velit est voluptates dolore laboriosam
            maiores illo.
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1">
          <div className="description h-[450px] flex flex-col items-center justify-center p-5 text-center">
            <span className="text-3xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusantium consequatur aspernatur quisquam inventore voluptatem
            voluptatibus impedit sapiente, culpa repudiandae! Harum suscipit
            quas aliquam molestias libero ea itaque a modi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Autem fuga laudantium
            recusandae quasi asperiores soluta quos, numquam quo accusamus.
            Culpa quam suscipit quibusdam velit est voluptates dolore laboriosam
            maiores illo.
          </div>
          <div className="image h-[450px]">
            <img src="/images/paragliding.jpg" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
