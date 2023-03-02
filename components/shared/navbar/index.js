import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBrands } from "@fortawesome/free-brands-svg-icons";
import NavLink from "./nav-link";

export default function NavBar() {
  return (
    <div>
 
      <header className="w-full flex justify-between items-center max-w-screen-2xl mx-auto bg-nature4 text-white">
        <div className="p-1">
          <a href="/">
            <img
              src="images/logo-transparent.png"
              className="h-12 mx-auto"
            />
          </a>
        </div>

        <nav className="text-xl">
          <ul className="flex flex-row flex-wrap gap-x-8">
            <li>
              <NavLink href="/things-to-do" >Things to Do</NavLink>
            </li>
            <li>
              <NavLink href="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vikingtrips/?hl=en"
                target="_blank"
                className="block"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon-instagram mr-5 text-2xl"
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
