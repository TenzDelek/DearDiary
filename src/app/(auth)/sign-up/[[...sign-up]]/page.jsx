"use client";
import { SignUp, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
    if (isSignedIn && userId) {
      // Call the API to store user info in the DB
      fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      }).catch((error) => console.error("Error storing user:", error));
    }
  }, [isSignedIn, userId]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 w-4/5 m-auto gap-10">
      <div>
        <h1 className="text-4xl">DearDairy</h1>
        <p className="text-lg">Welcome to the World of Journal and healing</p>
      </div>
      <SignUp />
    </div>
  );
}
