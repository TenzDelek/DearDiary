"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import { RiFileCopyLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function DailyQuote() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("Anonymous");
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/quote");
        setQuote(response.data[0].q);
        setAuthor(response.data[0].a);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  const getNewQuote = async () => {
    const response = await axios.get("/api/quote");
    setQuote(response.data[0].q);
    setAuthor(response.data[0].a);
  };

  const copyQuote = async () => {
    await navigator.clipboard.writeText(`${quote} - ${author}`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 overflow-hidden">
      <div className="relative container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Daily Quotes to Inspire You
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Let the words of wisdom brighten your day!
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center">
            <ImQuotesRight className="h-12 w-12 text-blue-300 mx-auto mb-6" />
            <p className="text-3xl italic font-light text-gray-100 mb-4">
              {quote}
            </p>
            <p className="text-xl font-semibold text-purple-300">- {author}</p>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={getNewQuote}
            >
              <ImQuotesRight className="w-5 h-5" /> <span>New Quote</span>
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyQuote}
            >
              <RiFileCopyLine className="w-5 h-5" /> <span>Copy</span>
            </motion.button>
          </div>
        </motion.div>

        <footer className="text-center text-sm text-gray-500 mt-16">
          <p>&copy; {new Date().getFullYear()} Daily Quotes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
