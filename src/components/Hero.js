import React from 'react';
import '../styles/components/hero.css';

// Import trực tiếp hero-bg từ assets
import heroBg from '../assets/images/hero-bg.jpg';

export default function Hero({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={buttonLink} className="btn hero-btn">
          {buttonText}
        </a>
      </div>
    </section>
  );
}


