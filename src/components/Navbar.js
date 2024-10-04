import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-8 p-4  text-white">
      <Link href="/">Home</Link>
      <Link href="/notes">Notes</Link>
      <Link href="/daily-quote">Daily Quote</Link>
    </nav>
  );
}
