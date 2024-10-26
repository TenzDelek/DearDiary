"use client"
import { BookHeart, BookType, Gem, Home, Menu, Notebook, Quote } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import favicon from "@/../public/favicon/DearDiary.png"
import Image from 'next/image';

const items = [
  { icon: <Home />, link: "/", name: "Home" },
  { icon: <Notebook />, link: "/notes", name: "Notes" },
  { icon: <Quote />, link: "/daily-quote", name: "Daily Quote" },
  { icon: <Gem />, link: "/about", name: "About" },
  { icon: <BookHeart />, link: "/guestbook", name: "Guestbook" },
  { icon: <BookType />, link: "/diary", name: "Diary" }
]

export default function Navbar() {

  // This state hook is responsible for the transition effect on the navbar -> updating this true/false makes the navbar visible/hidden
  const [open, setOpen] = useState(true)

  // handleResize function is responsible to maintain the state value as per the windows width.
  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 640) {
        setOpen(true)
      }
      else {
        setOpen(false)
      }
    }
  }

  // This useEffect hook is responsible for maintaining the Navbar layout on resizing.
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>

      {/* Hamburger Menu -> Visible on small devices only */}
      <button className='sm:hidden z-10' onClick={() => setOpen(!open)}>
        <Menu />
      </button>
      {
        // Main Navbar
        <nav className={`bg-transparent absolute top-0 left-0 items-center h-screen sm:h-auto transition-transform w-full ${open === true ? 'translate-x-0' : '-translate-x-full'}  duration-200 sm:flex sm:w-auto sm:bg-black sm:bg-transparent z-30 sm:z-[2] sm:relative sm:flex-row flex  justify-center sm:p-4 text-white space-x-4`}>

          {/* This div is containing all necessary navigation links as well as a div (this div is shown on small devices only\-). */}
          <div id='navLinksContainer' className={` flex flex-col sm:flex-row gap-y-2 gap-x-8 h-full w-[75%] sm:w-auto text-gray-400 bg-black shadow-gray-600 shadow-lg sm:shadow-none`}>

            {/* DearDiary Logo and Text */}
            <Link href={"/"} onClick={handleResize} className='sm:hidden w-fit flex items-center justify-start p-5 mb-3 space-x-2'>
              <Image width={32} height={32} src={favicon.src} alt="Icon" className='w-10 h-10' />
              <span className='font-bold text-white'>DearDiary</span>
            </Link>

            {/* Iterate all the navigation links */}
            {
              items.map((item, index) => (
                <div key={index} className='sm:px-0 group px-5 py-2'>
                  <Link className='group-hover:text-white flex items-center justify-start space-x-2' href={item.link} onClick={() => handleResize()}>
                    <span className='sm:hidden inline-block'>{item.icon}</span>
                    <span className='text-nowrap block' > {item.name} </span>
                  </Link>
                  <div className='w-[50%] sm:block sm:w-0 group-hover:w-full h-[1px] sm:h-[2px] rounded-full bg-white transition-all delay-750'></div>
                </div>
              ))
            }
          </div>

          {/* This div when clicked, it hides the NavBar. */}
          <div id='closeNavArea' className='sm:hidden h-full w-[25%] bg-transparent' onClick={() => setOpen(false)}>
          </div>

        </nav>
      }
    </>
  );
}
