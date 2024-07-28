import React from 'react';
import { menuImages } from '../utils/images'; 
import './Style.css';


const Menu = () => {
  const menuItems = Object.entries(menuImages).map(([src, image]) => ({ src: image, alt: src }));

  return (
    <section className="menu" id="menu-section">
      <h1 className="heading">
        Our <span>Menu</span>
      </h1>
      <div className="box-container">
        {menuItems.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.src} alt={item.alt} className="menu-image" />
            <div className="Price">$15.99 <span>$20.99</span></div>
            <a href="#" className="btn">
              Add to cart
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
