"use client"; // Ensure it's marked as a Client Component

import { useState, useRef } from "react";

export default function Form({ onNewEntry }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = formData.get("entry");

    setPending(true);
    setError(null);  // Clear any previous error

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entry }),
      });

      if (!res.ok) {
        const errorData = await res.json(); // Parse error response
        throw new Error(errorData.error || "Request to /api/guestbook failed");
      }

      const newEntry = await res.json(); // Get the newly created entry from the response

      // Pass the new entry to the parent component
      onNewEntry(newEntry);

      formRef.current?.reset(); // Reset form on success
    } catch (error) {
      console.error("Error saving guestbook entry:", error);
      setError(error.message || "Failed to save your message. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={pending}
        name="entry"
        type="text"
        required
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <button
        className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-8 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled={pending}
        type="submit"
      >
        {pending ? (
          <div className="spinner border-t-transparent border-4 border-neutral-400 rounded-full w-4 h-4 animate-spin"></div>
        ) : (
          "Sign"
        )}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
