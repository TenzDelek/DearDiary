'use client'
import Link from 'next/link';
import { Github, Link as FaLink } from 'lucide-react';

const Footer = () => {

    return (
        <div className="text-black py-5 bg-white">
            <div className="flex justify-center gap-4">
                    <Link href="https://github.com/TenzDelek/DearDiary"><Github /></Link>
                    <Link href="https://dear-diary-black.vercel.app/"><FaLink /></Link>
            </div>
        </div>
    )
}

export default Footer