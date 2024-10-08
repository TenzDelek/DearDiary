'use client'
import Link from 'next/link';
import { FaGithub,  FaLink } from "react-icons/fa6";

const Footer = () => {

    return (
        <div className="text-black py-5 bg-white">
            <div className="flex justify-center gap-4"> 
                    <Link href="https://github.com/TenzDelek/DearDiary"><FaGithub size={24}/></Link>
                    <Link href="https://dear-diary-black.vercel.app/"><FaLink size={24}/></Link>
            </div>
        </div>
    )
}

export default Footer