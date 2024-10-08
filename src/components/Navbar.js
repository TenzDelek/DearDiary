import Link from 'next/link';

const items = [
  {link:"/", name: "Home"},
  {link:"/notes", name: "Notes"},
  {link:"/daily-quote", name: "Daily Quote"},
  {link:"/guestbook", name: "Guestbook"},
  {link:"/about", name: "About"},
]

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-8 p-4  text-white">
      {
        items.map((item, index)=>(
          <div key={index} className='py-2 group'>
            <Link href={item.link}> {item.name} </Link>
            <div className='w-0 group-hover:w-full h-[2px] rounded-full bg-white transition-all delay-750'></div>
          </div>
        ))
      }
      
    </nav>
  );
}
