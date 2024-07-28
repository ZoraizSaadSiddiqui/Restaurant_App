import React from 'react';
import { productImages } from '../utils/images'; 
import './Style.css';


const Product = () => {
  const productItems = Object.entries(productImages).map(([src, image]) => ({ src: image, alt: src }));

  return (
    <section className="product" id="product-section">
      <h1 className="heading">
        Our <span>Products</span>
      </h1>
      <div className="box-container">
        {productItems.map((item, index) => (
          <div className="box" key={index}>
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <img src={item.src} alt={item.alt} className="product-image" />
            <div className="Price">$9.99<span>  $20.99</span></div>
            <div className="star">
            <li className="fas fa-star"/>
            <li className="fas fa-star"/>
            <li className="fas fa-star"/>
            <li className="fas fa-star"/>
            <li className="fas fa-star-half-alt"/>

                </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
