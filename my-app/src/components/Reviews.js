import React, { useState } from 'react';
import './Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState([
    
  ]);

  const [newReview, setNewReview] = useState({
    user: '',
    rating: 0,
    text: '',
  });

  const handleUserChange = (event) => {
    setNewReview({ ...newReview, user: event.target.value });
  };

  const handleRatingChange = (event) => {
    setNewReview({ ...newReview, rating: parseInt(event.target.value) });
  };

  const handleTextChange = (event) => {
    setNewReview({ ...newReview, text: event.target.value });
  };

  const handleReviewSubmit = () => {
    if (newReview.user && newReview.rating && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ user: '', rating: 0, text: '' });
    }
  };

  return (
    <section className="reviews">
      <h2>Student Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.user}</h3>
            <p>Rating: {review.rating}/5</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <h3>Add Your Review</h3>
      <form>
        <label>Your Name: </label>
        <input className='name'
          type="text"
          placeholder="Your Name"
          value={newReview.user}
          onChange={handleUserChange}
        /><br/>
        <label>College Name: </label>
        <input className='name'
          type="text"
          placeholder="College Name"
          value={newReview.collegename}
          onChange={handleUserChange}
        /><br/>
        <label>Your Rating: </label>
        <input
          type="number"
          className="input"
          placeholder="Rating (1-5)"
          value={newReview.rating}
          onChange={handleRatingChange} 
          min="1"
          max="5"
        /><br/>
        <textarea
          placeholder="Your Review"
          value={newReview.text}
          onChange={handleTextChange}
        />
        <button type="button" onClick={handleReviewSubmit}>
          Submit Review
        </button>
      </form>
    </section>
  );
}

export default Reviews;
