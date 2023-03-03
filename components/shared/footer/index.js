export default function Footer() {
  return (
    <footer className="w-full mx-auto max-w-screen-2xl h-32 px-2 bg-nature4 flex items-center text-nature1">
      <div className="w-full grid grid-cols-3">
        <div className="border-l-2 border-nature1 md:border-0 flex flex-col md:flex-row md:gap-x-10 md:border justify-center p-2">
          ©2023 TheLakeDistrict
        </div>

        <div className="border-l-2 border-nature1 md:border-0 flex flex-col md:flex-row md:gap-x-10 justify-center p-2">
          <a className="hover:underline" href="/">
            Privacy Policy
          </a>
          <a className="hover:underline" href="/">
            Copywright
          </a>
        </div>

        <div className="border-l-2 border-gray-300 md:border-0 flex flex-col md:flex-row md:gap-x-10 justify-center p-2">
          <a className="hover:underline" href="/blog">
            Blog
          </a>
          <a className="hover:underline" href="/aboutUs">
            About
          </a>
          <a className="hover:underline" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
