import Link from "next/link";

export default function NavLink({href, children}) {
  return <Link href={href}>{children}</Link>;

}


  // create hover effect for Links
