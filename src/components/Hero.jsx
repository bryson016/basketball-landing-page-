import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="basketball-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Premium Basketballs
            <span className="highlight"> Crafted for Champions</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Experience the perfect bounce, grip, and durability. From professional courts to backyard games, we deliver excellence in every shot.
          </p>
          <div className="hero-buttons fade-in">
            <button className="btn btn-primary" onClick={scrollToProducts}>
              Explore Products
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
