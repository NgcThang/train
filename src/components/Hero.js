import React from 'react';
import '../styles/components/hero.css';
import heroImg from '../assets/images/hero-bg.jpg';

export default function Hero({ title, subtitle }) {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={heroImg} alt="Hero" />
      </div>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}



