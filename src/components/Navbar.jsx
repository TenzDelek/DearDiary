// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="flex justify-center space-x-8 p-4  text-white">
//       <Link href="/">Home</Link>
//       <Link href="/notes">Notes</Link>
//       <Link href="/daily-quote">Daily Quote</Link>
//     </nav>
//   );
// }
"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
 const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Notes",
      link: "/notes",
    },
    {
      name: "Daily Quote",
      link: "/daily-quote",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
export default Navbar;
