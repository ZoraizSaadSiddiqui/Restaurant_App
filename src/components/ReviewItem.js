// ReviewItem.js
import React from 'react';

function ReviewItem({ reviewerName, dishName, reviewText, rating, restaurantName, date, imageUrl }) {
  return (
    <div className="review-item">
      {imageUrl && <img src={imageUrl} alt={dishName} className="dish-image" />}
      <h3>{dishName}</h3>
      <p className="restaurant-name">{restaurantName}</p>
      <p className="reviewer-name">Reviewed by: {reviewerName}</p>
      <p>{reviewText}</p>
      <p>Rating: {rating} / 5</p>
      <p>Date: {date}</p>
    </div>
  );
}

export default ReviewItem;
