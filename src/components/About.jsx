import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">Crafting Excellence Since 2008</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Basketball Manufacturing Co. was founded with a simple mission: to create the perfect basketball. 
              For over 15 years, we've been dedicated to crafting high-quality basketballs that meet the demands 
              of players at every level.
            </p>
            <p>
              From professional leagues to backyard games, our products are designed with precision engineering 
              and premium materials. We believe that every player deserves equipment that enhances their game, 
              which is why we never compromise on quality.
            </p>
            <p>
              Our commitment to innovation and excellence has made us a trusted name in basketball manufacturing. 
              Each ball undergoes rigorous testing to ensure optimal performance, durability, and that perfect bounce 
              that players love.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Precision Engineering</h4>
              <p>Every basketball is crafted with meticulous attention to detail and quality control.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h4>Premium Materials</h4>
              <p>We use only the finest materials to ensure durability and optimal performance.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h4>Perfect Grip</h4>
              <p>Our unique surface texture provides superior grip in all playing conditions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>Championship Quality</h4>
              <p>Trusted by professionals and loved by players worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
