import NavBar from "@/components/shared/navbar";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Link from "next/link";

export default function ThingsToDo() {
  return (
    <div>
      <div className="text-center w-full mx-auto text-3xl tracking-tight text-nature1 bg-nature3">
        <p className="pt-[94px] pb-[94px] font-serif">
          “You may leave the Lake District, but once you've been, it'll never
          leave you…”
        </p>
      </div>
      <div className="w-full grid grid-cols-1 grid-rows-4 bg-nature1">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="image h-[450px]">
            <img src="/images/hiking.jpg" alt="" />
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
        </div>
      </div>
    </div>
  );
}
