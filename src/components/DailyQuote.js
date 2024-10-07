import React, { useState, useEffect } from 'react';

const DailyQuote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        setLoading(true); // Set loading to true before fetching
        try {
            const response = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
            const data = await response.json();
            console.log(data);
            // Access the quote text and author directly
            setQuote(data.quoteText);
            setAuthor(data.quoteAuthor || "Unknown"); // Use "Unknown" if author is not provided

        } catch (error) {
            console.error('Error fetching quote:', error);
            setQuote('An inspirational quote will be here.');
            setAuthor(''); // Optionally you could also set a default author
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Display loading message
    }

    return (
        <div className="daily-quote">
            <h3>Quote of the Day</h3>
            <p>"{quote}"</p>
            <p>- {author}</p>
        </div>
    );
};

export default DailyQuote;
