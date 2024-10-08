import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-8 p-4  text-white">
      <div className='py-2 group'>
        <Link href="/">Home</Link>
        <div className='w-0 group-hover:w-full h-[2px] rounded-full bg-white transition-all delay-750'></div>
      </div>
      <div className='py-2 group'>
        <Link href="/notes">Notes</Link>
        <div className='w-0 group-hover:w-full h-[2px] rounded-full bg-white transition-all delay-750'></div>
      </div>
      <div className='py-2 group'>
        <Link href="/daily-quote">Daily Quote</Link>
        <div className='w-0 group-hover:w-full h-[2px] rounded-full bg-white transition-all delay-750'></div>
      </div>
      <div className='py-2 group'>
        <Link href="/guestbook">Guestbook</Link>
        <div className='w-0 group-hover:w-full h-[2px] rounded-full bg-white transition-all delay-750'></div>
      </div>
      <div className='py-2 group'>
        <Link href="/about">About</Link>
        <div className='w-0 group-hover:w-full h-[2px] rounded-full bg-white transition-all delay-750'></div>
      </div>
    </nav>
  );
}
