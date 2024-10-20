import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import './ReviewModal.css'; // Your CSS styles

const ReviewModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [thankYouVisible, setThankYouVisible] = useState(false); // State for thank you message

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000); // 15 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send data to a server)
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    setIsVisible(false);
    setThankYouVisible(true); // Show thank you message

    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setThankYouVisible(false);
    }, 3000); // 3 seconds
  };

  return (
    <>
      {isVisible && !thankYouVisible && ( // Only show modal if thank-you is not visible
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-heading">Rate Our DearDiary</h2>
            <div className="stars-container">
              <ReactStars
                count={5}
                value={rating}
                onChange={handleRatingChange}
                size={40}  // Increased star size
                activeColor="#000"  // Black stars
                color="#ccc"        // Light grey for unselected stars
              />
            </div>
            <textarea
              placeholder="Leave your comments here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
      {thankYouVisible && ( // Show thank-you message without overlay
        <div className="thank-you-container">
          <p className="thank-you-message">Thank you for your feedback!</p>
        </div>
      )}
    </>
  );
};

export default ReviewModal;
