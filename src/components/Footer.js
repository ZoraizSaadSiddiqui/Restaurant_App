import React from 'react';
import './Footer.css'; 


function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section" style={{ textAlign: 'slightly-left' }}>
          <h4>About Us</h4>
          <p>Indulge in exceptional dining at Restaurant</p>
          <p>where every meal is a culinary masterpiece.</p>
        </div>
        <div className="footer-section" style={{ textAlign: 'center' }}>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section" style={{ textAlign: 'slightly-right' }}>
          <h4>Contact Us</h4>
          <p>Email: zoraizsaad50@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Town, Pakistan</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
