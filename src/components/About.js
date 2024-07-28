import React from 'react';
import about from '../photo/about.jpeg';
import './Style.css';

function About() {
  return (
    <section className="about" id="about-section">
      <h1 className="heading">
        About
        <span> Us</span>
      </h1>
      <div className="row">
        <div className="image">
          <img src={about} alt="About Us" />
        </div>
        <div className="content">
          <h3>
            What Makes Our Food Special?
          </h3>
          <p>
            Our food is distinguished by its unparalleled freshness,
            artisanal craftsmanship, and global inspirations.
            We source the freshest local ingredients and blend traditional
            techniques with innovative touches.
          </p>
          <p>
            Our menu celebrates the diversity of global cuisine,
            offering unique flavor combinations and exceptional quality.
            From savory spices to sweet indulgences, every dish is crafted
            to delight your senses.
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
