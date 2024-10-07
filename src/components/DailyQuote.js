import React, { useState, useEffect } from 'react';

const DailyQuote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState(''); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        setLoading(true); 
        try {
            const response = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
            const data = await response.json();
            console.log(data); // Log the API response

            // Access quote text and author from the API response
            setQuote(data.quoteText);
            setAuthor(data.quoteAuthor || "Unknown");
            
            /*setQuote("The only way to do great work is to love what you do.");
    setAuthor("Steve Jobs");
    */
        } catch (error) {
            console.error('Error fetching quote:', error);
            setQuote('An inspirational quote will be here.');
            setAuthor('');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
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
