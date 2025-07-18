import React from 'react'
import '../styles/components/hero.css'

export default function Hero({ title, subtitle, image }) {
  return (
    <section className="hero-container">
      <div className="hero-image">
        <img src={image} alt="Hero background"/>
      </div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}



