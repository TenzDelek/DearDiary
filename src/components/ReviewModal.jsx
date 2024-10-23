import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';

const ReviewModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [thankYouVisible, setThankYouVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    setIsVisible(false);
    setThankYouVisible(true);

    setTimeout(() => {
      setThankYouVisible(false);
    }, 3000);
  };

  return (
    <>
      {isVisible && !thankYouVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 text-center font-sans">
            <h1 className="text-2xl font-bold mb-1 text-black">Rate Our DearDiary</h1>
            <div className="flex justify-center mb-3">
              <ReactStars
                count={5}
                value={rating}
                onChange={handleRatingChange}
                size={50}
                activeColor="#000"
                color="#ccc"
              />
            </div>
            <textarea
              className="w-full h-20 p-2 border border-black text-black bg-white text-sm"
              placeholder="Leave your comments here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {thankYouVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
          <p className="text-black font-bold text-center">Thank you for your feedback!</p>
        </div>
      )}
    </>
  );
};

export default ReviewModal;
