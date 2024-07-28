import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images.jpeg';

const Navbar = ({ title }) => {
  const searchRef = useRef();
  const navbarRef = useRef();

  const searchHandler = () => {
    if (searchRef.current) {
      searchRef.current.classList.toggle('active');
    }
  };

  const navbarHandler = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <style>
        {`
          .navbar-custom {
            background-color: #000000;
            border-bottom: 0.2rem solid #ffc107;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            color: white;
          }
          .navbar-brand-custom {
            color: white;
            align-items: center;
            font-weight: bold;
            font-family: 'Times New Roman';
            letter-spacing: 0.5px;
            margin-right: auto;
            font-size: 15px;
          }
          .nav-link-custom {
            color: white;
            text-decoration: none;
          }
          .nav-link-custom:hover,
          .nav-link-custom.active {
            color: #ffc107;
            border-bottom: 0.05rem solid #ffc107;
          }
          .icons {
            display: flex;
            align-items: center;
            margin-right: 15px;
          }
          .icons .fas {
            color: white;
            font-size: 1.5rem;
            margin-left: 15px;
          }
          .icons .fas:hover {
            color: #ffc107;
          }
          .search-form {
            position: absolute;
            top: 115%;
            right: 7%;
            background: #fff;
            width: 30rem;
            height: 2.5rem;
            align-items: center;
            display: flex;
            transform: scaleY(0);
            transition: transform 0.3s ease;
          }
          .search-form.active {
            transform: scaleY(1);
          }
          .search-form input[type="search"] {
            width: 80%;
            height: 100%;
            border: 1px solid #ccc;
            padding: 0.5rem;
            box-sizing: border-box;
          }
          .search-form .fas {
            font-size: 1.5rem;
            cursor: pointer;
            margin: 0 1rem;
            color: black;
          }
          @media (max-width: 992px) {
            #menu-btn {
              display: block;
            }
            .navbar-custom {
              flex-direction: column;
              align-items: flex-start;
              padding: 0.5rem 1rem;
            }
            .navbar-toggler {
              border: none;
              color: white;
              font-size: 1.5rem;
            }
            .collapse {
              position: fixed;
              top: 0;
              right: 0;
              height: 100%;
              width: 250px;
              background: #000000;
              z-index: 999;
              transform: translateX(100%);
              transition: transform 0.3s ease-in-out;
              padding: 2rem 1rem;
            }
            .collapse.show {
              transform: translateX(0);
            }
            .navbar-nav {
              flex-direction: column;
              align-items: flex-start;
            }
            .nav-item {
              margin: 0.5rem 0;
            }
            .nav-link-custom {
              color: white;
              padding: 0.5rem 1rem;
              text-align: left;
              width: 100%;
            }
            .search-form {
              width: 100%;
              right: 0;
            }
          }
          @media (max-width: 768px) {
            .navbar-brand-custom {
              font-size: 12px;
            }
            .icons {
              margin-right: 10px;
            }
            .search-form {
              width: 100%;
              right: 0;
              top: 120%;
            }
          }
          @media (max-width: 576px) {
            .navbar-brand-custom {
              font-size: 10px;
            }
            .icons .fas {
              font-size: 1.2rem;
              margin-left: 10px;
            }
            .search-form {
              width: 100%;
              top: 125%;
              right: 0;
            }
          }
          .logo {
            height: 50px;
            margin-left: 15px;
            width: 100px;
          }
        `}
      </style>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={navbarHandler}>
          <span className="fas fa-bars"></span>
        </button>
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
          <span className="navbar-brand navbar-brand-custom">
            {title}
          </span>
        </div>
        <div className="collapse navbar-collapse" ref={navbarRef}>
          <ul className="navbar-nav ml-auto m-1">
            <li className="nav-item">
              <HashLink smooth to="/home#home-section" className="nav-link nav-link-custom">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/about#about-section" className="nav-link nav-link-custom">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/menu#menu-section" className="nav-link nav-link-custom">
                Menu
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/product#product-section" className="nav-link nav-link-custom">
                Products
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/reviews#reviews-section" className="nav-link nav-link-custom">
                Reviews
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart"></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search" onClick={searchHandler}></label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
