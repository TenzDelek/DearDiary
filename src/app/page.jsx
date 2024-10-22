"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold">Welcome to DearDiary</h1>
        <p className="mt-4 text-lg">
          Capture your thoughts, moments, and ideas in one place.
        </p>
        <div className="mt-8">
          <Button>
            <Link href="/notes">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg shadow-lg bg-neutral-900 transition-transform duration-300 transform hover:scale-105 hover:bg-neutral-800 hover:shadow-xl">
            <h3 className="text-2xl font-semibold">Daily Logs</h3>
            <p className="mt-4">
              Easily write and organize your daily thoughts and experiences.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 rounded-lg shadow-lg bg-neutral-900 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-neutral-800">
            <h3 className="text-2xl font-semibold">Customizable Themes</h3>
            <p className="mt-4">
              Personalize your diary with beautiful themes and styles.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 rounded-lg shadow-lg bg-neutral-900 transition-transform duration-300 transform hover:scale-105 hover:bg-neutral-800 hover:shadow-xl">
            <h3 className="text-2xl font-semibold">Secure and Private</h3>
            <p className="mt-4">
              Your entries are safe and secure with our privacy-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12 bg-neutral-900 transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-semibold">Ready to start journaling?</h2>
        {isSignedIn ? (
          <p className="mt-4 text-lg">
            Start writing your thoughts and experiences!
          </p>
        ) : (
          <p className="mt-4 text-lg">
            Sign up now and keep track of your daily life!
          </p>
        )}

        <div className="mt-8">
          {isSignedIn ? (
            <Button onClick={() => router.push("/notes")}>
              Go to my Diary
            </Button>
          ) : (
            <Button asChild>
              <SignUpButton>Sign Up Now</SignUpButton>
            </Button>
          )}
        </div>
      </section>
    </main>
  );
}
