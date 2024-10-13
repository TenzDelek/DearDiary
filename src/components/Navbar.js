"use client"
import { CircleX, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const items = [
  {link:"/", name: "Home"},
  {link:"/notes", name: "Notes"},
  {link:"/daily-quote", name: "Daily Quote"},
  {link:"/about", name: "About"},
  {link:"/guestbook", name: "Guestbook"},
  
]

export default function Navbar() {
  const [open, setOpen] = useState(true)
  return (
    <>
      <button className='sm:hidden z-10' onClick={()=>setOpen(!open)}>

        { !open ? <Menu /> :
        <CircleX />}
      </button>
      {
        // open &&
        <nav className={`flex-col absolute top-0 left-0 items-center h-screen sm:h-auto ${open ? 'w-full' : 'hidden'} sm:flex sm:w-auto bg-[#171717] sm:bg-transparent z-[2] sm:relative sm:flex-row flex gap-8  justify-center sm:space-x-8 p-4  text-white`}>
        {
          items.map((item, index)=>(
            <div key={index} className='py-2 group'>
              <Link href={item.link} onClick={()=>setOpen(false)}> {item.name} </Link>
              <div className='w-0 group-hover:w-full h-[2px] rounded-full bg-white transition-all delay-750'></div>
            </div>
          ))
        }
        
      </nav>
      }
    </>
  );
}
