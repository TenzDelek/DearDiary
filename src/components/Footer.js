'use client'
import Link from 'next/link';
import { Github, Link as FaLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-black py-5 bg-white w-full mt-auto">
      <div className="flex justify-center gap-4">
        <Link href="https://github.com/TenzDelek/DearDiary" target="_blank">
          <Github />
        </Link>
        <Link href="https://dear-diary-black.vercel.app/" target="_blank">
          <FaLink />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
