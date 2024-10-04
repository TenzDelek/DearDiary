// /app/page.jsx

"use client";

import { Suspense, useEffect, useState } from "react";
import Form from "./form";

function GuestbookForm() {
  return <Form />;
}

function GuestbookEntries() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEntries() {
      try {
        const res = await fetch("/api/guestbook/entries");
        const data = await res.json();
        setEntries(data);
      } catch (error) {
        console.error("Failed to fetch guestbook entries", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEntries();
  }, []);

  if (loading) {
    return <p>Loading entries...</p>;
  }

  if (entries.length === 0) {
    return <p>No entries yet. Be the first to sign!</p>;
  }

  return (
    <ul className="space-y-4">
      {entries.map((entry) => (
        <li key={entry.id} className="border-b pb-2">
          <p className="font-semibold">{entry.created_by}</p>
          <p>{entry.body}</p>
          <p className="text-xs text-gray-500">
            Last modified: {new Date(entry.last_modified).toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Guestbook() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Giridhar&apos;s Guestbook
        </p>
      </div>

      <div className="relative w-full max-w-2xl my-12">
        <h1 className="relative font-semibold dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-2xl mb-8 tracking-tighter">
          Sign my guestbook
        </h1>
        <Suspense fallback={<p>Loading form...</p>}>
          <GuestbookForm />
        </Suspense>

        <h2 className="relative font-semibold text-xl mt-8">Guestbook Entries</h2>
        <Suspense fallback={<p>Loading entries...</p>}>
          <GuestbookEntries />
        </Suspense>
      </div>
    </main>
  );
}

export default Guestbook;
