"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        type: "spring",
      },
    }),
  };

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen bg-[#0A0A0A] text-gray-100">
      {/* Hero Section */}
      <motion.section
        className="text-center py-12"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
          variants={fadeUp}
        >
          Welcome to DearDiary
        </motion.h1>
        <motion.p
          className="mt-4 text-2xl text-gray-300"
          variants={fadeUp}
          custom={0.2}
        >
          Capture your thoughts, moments, and ideas in one place.
        </motion.p>
        <motion.div
          className="mt-8"
          variants={fadeUp}
          custom={0.4}
        >
          <Button>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-semibold text-center mb-8"
          variants={fadeUp}
        >
          Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={fadeUp}
        >
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-all duration-300 border-2 border-transparent border-gradient-to-r from-blue-300 to-purple-300"
            style={{
              borderImage: "linear-gradient(to right, #93c5fd, #d8b4fe) 1",
            }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Daily Logs
            </h3>
            <p className="mt-4 text-gray-300">
              Easily write and organize your daily thoughts and experiences.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg shadow-lg bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-all duration-300 border-2 border-transparent border-gradient-to-r from-green-300 to-teal-300"
            style={{
              borderImage: "linear-gradient(to right, #6ee7b7, #2dd4bf) 1",
            }}
            variants={fadeUp}
            custom={0.2}
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
              Customizable Themes
            </h3>
            <p className="mt-4 text-gray-300">
              Personalize your diary with beautiful themes and styles.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg shadow-lg bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-all duration-300 border-2 border-transparent"
            style={{
              borderImage: "linear-gradient(to right, #fca5a5, #fcd34d) 1",
            }}
            variants={fadeUp}
            custom={0.4}
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-yellow-300">
              Secure and Private
            </h3>
            <p className="mt-4 text-gray-300">
              Your entries are safe and secure with our privacy-first approach.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="text-center py-12 bg-neutral-900/80 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h2
          className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300"
          variants={fadeUp}
        >
          Ready to start journaling?
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-gray-300"
          variants={fadeUp}
          custom={0.2}
        >
          Sign up now and keep track of your daily life!
        </motion.p>
        <motion.div className="mt-8" variants={fadeUp} custom={0.4}>
          <Button asChild>
            <SignUpButton>Sign Up Now</SignUpButton>
          </Button>
        </motion.div>
      </motion.section>
    </main>
  );
}
