"use client"
import { CircleX, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';


// icons
import { IoHomeOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { BsChatRightQuote } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { GiBlackBook } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";



const items = [
  { icon: <IoHomeOutline />, link: "/", name: "Home" },
  { icon: <GrNotes />, link: "/notes", name: "Notes" },
  { icon: <BsChatRightQuote />, link: "/daily-quote", name: "Daily Quote" },
  { icon: <IoIosContacts />, link: "/about", name: "About" },
  { icon: <GiNotebook />, link: "/guestbook", name: "Guestbook" },
  { icon: <GiBlackBook />, link: "/diary", name: "Diary" },
  { icon: <FaPeopleGroup />, link: "/contributors", name: "Our contributors" },
]

export default function Navbar() {

  // This state hook is responsible for the transition effect on the navbar -> updating this true/false makes the navbar visible/hidden
  const [open, setOpen] = useState(true)

  // handleResize function is responsible to maintain the state value as per the windows width.
  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 768) {
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
      <button className='md:hidden z-10' onClick={() => setOpen(!open)}>
        <Menu />
      </button>
      {
        // Main Navbar
        <nav className={`bg-transparent absolute top-0 left-0 items-center h-screen md:h-auto transition-transform w-full ${open === true ? 'translate-x-0' : '-translate-x-full'}  duration-200 md:flex md:w-auto md:bg-black md:bg-transparent z-30 md:z-[2] md:relative md:flex-row flex  justify-center md:p-4 text-white space-x-4`}>

          {/* This div is containing all necessary navigation links as well as a div (this div is shown on small devices only\-). */}
          <div id='navLinksContainer' className={` flex flex-col md:flex-row gap-y-2 gap-x-8 h-full w-[50%] md:w-auto text-gray-400 bg-transparent shadow-gray-600 shadow-lg md:shadow-none pt-5 md:pt-0`}>


            {/* Close button - Can be closed by clicking on this as well as by the outside the sideBar */}
            <div className="relative py-5 md:hidden">
              <CircleX onClick={() => setOpen(false)}  className='cursor-pointer right-5 top-2 absolute' />
            </div>


            {/* Iterate all the navigation links */}
            {
              items.map((item, index) => (
                <div key={index} className='text-gray-200 group md:px-0 w-fit py-2 px-5 '>
                  <Link className='group-hover:text-white flex items-center justify-start space-x-2 md:space-x-0' href={item.link} onClick={() => handleResize()}>
                    <span className='md:hidden inline-block'>{item.icon}</span>
                    <span className='text-nowrap block' > {item.name} </span>
                  </Link>

                  <div className='w-0 md:block group-hover:w-full h-[1px] md:h-[2px] rounded-full bg-white transition-all delay-750'></div>
                </div>
              ))
            }
          </div>

          {/* This div when clicked, it hides the NavBar. */}
          <div id='closeNavArea' className='md:hidden h-full w-[50%] bg-transparent' onClick={() => setOpen(false)}>
          </div>

        </nav>
      }
    </>
  );
}
