import React from 'react';
import photo from '../photo/16.jpg'; 

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f39c12',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  // Changed to center content on mobile
    textAlign: 'center',       // Center text horizontally
    height: '100vh',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  return (
    <section className="home" id="home-section" style={sectionStyle}>
      <div className="content">
        <h3>
          <span>Welcome to Flavor Haven</span>
          <br />
          Where Every Bite is a Culinary Adventure!
        </h3>
        <p>
          Discover a world of flavors with Flavor Haven, your ultimate guide to
          the best culinary experiences and hidden gems around you.
        </p>
      </div>
      <style>
        {`
          .content {
            text-align: center;
            margin: 0; /* Remove margin for better alignment */
          }
          .content span {
            color: #f39c12;
          }
          .content h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: white;
          }
          .content p {
            font-size: 1rem;
            max-width: 100%; /* Adjust to full width */
            margin: 0 auto;
          }
          @media (max-width: 768px) {
            .content h3 {
              font-size: 1.5rem;
            }
            .content p {
              font-size: 0.9rem;
            }
            section {
              padding: 2rem 1rem; /* Adjust padding for smaller screens */
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
