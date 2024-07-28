import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Product from './components/Product';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
     <About/>

     <Menu/>
     <Product/>
     <Reviews/>
     <Footer/>
    </Router>
  );
}

export default App;
