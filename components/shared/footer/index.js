export default function Footer() {
  return (
    <footer>
      <div className="w-full grid grid-cols-3 bg-blue-100">
        <div className="bg-red-100 border-l-2 border-black md:border-0 flex flex-col md:flex-row md:gap-x-10 md:border justify-center p-2">
          ©2023 TheLakeDistrict
        </div>

        <div className="border-l-2 border-black md:border-0 bg-gray-50 flex flex-col md:flex-row md:gap-x-10 justify-center p-2">
          <a className="hover:underline" href="/">
            Privacy Policy
          </a>
          <a className="hover:underline" href="/">
            Copywright
          </a>
        </div>

        <div className="border-l-2 border-black md:border-0 bg-blue-500 flex flex-col md:flex-row md:gap-x-10 justify-center p-2">
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
