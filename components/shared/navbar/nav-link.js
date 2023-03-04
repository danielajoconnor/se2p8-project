import Link from "next/link";

export default function NavLink({href, children}) {
  return <Link className="hover:underline" href={href}>{children}</Link>;

}


  // create hover effect for Links
