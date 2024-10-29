"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import { RiFileCopyLine } from "react-icons/ri";

export default function DailyQuote() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("Anonymous");
  const [copied, setCopied] = useState(false);
  const [category, setCategory] = useState("life"); // Default category

  // Fetch quote based on category
  useEffect(() => {
    fetchQuote();
  }, [category]);

  const fetchQuote = async () => {
    setQuote("Loading...");
    setCopied(false);
    try {
      const response = await axios.get(
        `https://api-get-quotes.vercel.app/api/v1/category/${category}`
      );
      const quotesArray = response.data.quotes; // Access the quotes array from the response

      // Select a random quote from the quotes array
      const randomIndex = Math.floor(Math.random() * quotesArray.length);
      setQuote(quotesArray[randomIndex].quote);
      setAuthor(quotesArray[randomIndex].author);
    } catch (error) {
      setQuote("Could not fetch quote");
      setAuthor("Unknown");
    }
  };

  const copyQuote = async () => {
    await navigator.clipboard.writeText(`${quote} - ${author}`);
    setCopied(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-hidden">
      <div className="relative container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-white">
            Daily Quotes to Inspire You
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Let the words of wisdom brighten your day!
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center space-x-4 mb-6">
          {["life", "motivation", "love", "courage", "Inspiration", "Friendship", "Hope", "Wisdom", "Nature"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-md font-semibold ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto p-8 bg-[#171717] rounded-lg shadow-lg">
          <div className="text-center">
            <ImQuotesRight className="h-12 w-12 mx-auto mb-6" />
            <p className="text-3xl italic font-light mb-4">{quote}</p>
            <p className="text-xl font-semibold">- {author}</p>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md flex items-center space-x-2"
              onClick={fetchQuote}
            >
              <ImQuotesRight className="w-5 h-5" /> <span>New Quote</span>
            </button>
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md flex items-center space-x-2"
              onClick={copyQuote}
            >
              <RiFileCopyLine className="w-5 h-5" /> <span>Copy</span>
            </button>
          </div>
          {copied && (
            <p className="text-green-300 text-center mt-8">
              Copied successfully!
            </p>
          )}
        </div>

        <footer className="text-center text-sm text-gray-500 mt-16">
          <p>&copy; {new Date().getFullYear()} Daily Quotes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
