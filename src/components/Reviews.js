// Reviews.js
import React from 'react';
import './Style.css';

import r1 from '../assets/r1.jpeg';
import r2 from '../assets/r2.jpeg';
import r3 from '../assets/r3.jpeg';
import ReviewItem from './ReviewItem';


function Reviews() {
  const reviews = [
    {
      Name: "Alice Johnson",
      dishName: "Spaghetti Carbonara",
      review:" Definitely a must-try!",
       rating: 5,
      restaurantName: "Italian Bistro",
      date: "2024-07-27",
      imageUrl: r1,
    },
    {
      Name: "Bob Williams",
      dishName: "Chicken Makhni Handi",
      review: "A delightful blend of spices and flavors. The chicken was tender and flavorful.",
      rating: 4.5,
      restaurantName: "Fry Master",
      date: "2024-07-26",
      imageUrl: r2,
    },
    {
        Name: "John",
        dishName: "Chocolate Cake",
        review:"An incredibly rich and moist cake with the perfect amount of chocolate. ",
    
         rating: 5,
        restaurantName: "Layers",
        date: "2024-07-20",
        imageUrl: r3,
      },
  ];

  return (
    <section className="reviews" id="reviews-section">
      <h1 className="heading">
        Customer<span> Reviews</span>
      </h1>
      <div className="box-container">
        {reviews.map((review, index) => (
          <ReviewItem
            key={index}
            reviewerName={review.Name}
            dishName={review.dishName}
            reviewText={review.review}
            rating={review.rating}
            restaurantName={review.restaurantName}
            date={review.date}
            imageUrl={review.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
