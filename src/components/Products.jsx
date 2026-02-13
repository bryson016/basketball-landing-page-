import React from 'react'
import './Products.css'

function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: 'Pro Elite',
      category: 'Professional',
      price: '$89.99',
      features: ['Official size & pounds', 'Premium leather', 'Indoor use', 'Championship grade'],
      color: 'orange'
    },
    {
      id: 2,
      name: 'Street Master',
      category: 'Outdoor',
      price: '$59.99',
      features: ['Durable rubber', 'All-weather grip', 'Outdoor courts', 'Long-lasting'],
      color: 'blue'
    },
    {
      id: 3,
      name: 'Youth Champion',
      category: 'Youth',
      price: '$39.99',
      features: ['Size 5 (youth)', 'Soft grip', 'Perfect for learning', 'Lightweight'],
      color: 'green'
    },
    {
      id: 4,
      name: 'Training Pro',
      category: 'Training',
      price: '$69.99',
      features: ['Weighted design', 'Skill development', 'Enhanced control', 'Professional training'],
      color: 'purple'
    },
    {
      id: 5,
      name: 'Indoor Classic',
      category: 'Indoor',
      price: '$74.99',
      features: ['Composite leather', 'Superior bounce', 'Indoor courts', 'Tournament ready'],
      color: 'red'
    },
    {
      id: 6,
      name: 'All-Court Hybrid',
      category: 'Hybrid',
      price: '$64.99',
      features: ['Indoor/Outdoor', 'Versatile design', 'Great grip', 'Multi-surface'],
      color: 'teal'
    }
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Premium Basketballs for Every Player</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className={`product-card ${product.color}`}>
              <div className="product-badge">{product.category}</div>
              <div className="product-icon">🏀</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="product-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
