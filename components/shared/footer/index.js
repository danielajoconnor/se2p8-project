import NavLink from "../navbar/nav-link";

export default function Footer() {
  return (
    <div className="mt-28 md:mt-16 ">
      <footer className="w-full mx-auto max-w-screen-2xl h-28 md:h-16 px-2  bg-nature4 flex items-center text-nature1 fixed bottom-0 left-0 right-0 z-[-1] ">
        <div className="w-full grid grid-cols-3">
          <div className="md:border-0 flex flex-col md:flex-row md:gap-x-10 justify-center py-2 tracking-tight">
            ©2023 TheLakeDistrict
          </div>
          <div className="border-l-2 border-nature3 md:border-0 flex flex-col md:flex-row md:gap-x-10 justify-center p-2 tracking-tight">
            <NavLink href="/">Privacy Policy</NavLink>
            <NavLink href="/">Copyright</NavLink>
          </div>
          <div className="border-l-2 border-nature3 md:border-0 flex flex-col md:flex-row md:gap-x-10 justify-center p-2 tracking-tight">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blogs">Blogs</NavLink>
            <NavLink href="/about-us">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
