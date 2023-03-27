import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBrands } from "@fortawesome/free-brands-svg-icons";
import NavLink from "./nav-link";

export default function NavBar() {
  return (
    <div>
      <header className="w-full flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto bg-nature4 text-nature1 py-4">
        <div className="p-2 pl-3 hidden md:block">
          <NavLink href="/">
            <img className="h-auto w-12" src="/images/logo-transparent.png"  />
          </NavLink>
        </div>

        <nav className="text-2xl ">
          <ul className="flex flex-col flex-wrap md:flex-row text-center font-serif md:mr-5 gap-2 md:gap-x-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink href="/things-to-do">Things to Do</NavLink>
            </li>
            <li>
              <NavLink href="/blogs">Blogs</NavLink>
            </li>

            <li>
              <NavLink href="/news">News</NavLink>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lakedistrict/?hl=en"
                target="_blank"
                className="block"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon-instagram text-2xl"
                />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
