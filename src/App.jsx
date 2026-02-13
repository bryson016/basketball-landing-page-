import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="App">
      <Header cart={cart} />
      <Hero />
      <About />
      <Products addToCart={addToCart} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
