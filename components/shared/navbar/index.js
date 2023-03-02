import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBrands } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <div>
      <nav className="w-full text-xl font-mono p-5">
        <ul className="w-full flex flex-row flex-wrap justify-center items-center gap-x-10 bg-green-50">
          <li className="basis-full ">
            <a href="/">
              <img
                src="images/cropped-logo.png"
                className="h-14 mx-auto mb-2"
              />
            </a>
          </li>
          <li>
            <a
              href="/accommodation"
              className="text-green-800 block hover:text-black"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="/thingsToDo"
              className="text-green-800 block hover:text-black"
            >
              Things to Do
            </a>
          </li>
          <li>
            <a
              href="/whatsOn"
              className="text-green-800 block hover:text-black"
            >
              What's On
            </a>
          </li>
          <li>
            <a href="/blog" className="text-green-800 block hover:text-black">
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-green-800 block hover:text-black"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vikingtrips/?hl=en"
              target="_blank"
              className="block"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon-instagram text-fuchsia-700 mr-1 text-2xl hover:text-black"
              />
              <span className="text-cyan-200 sr-only">Instagram</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
