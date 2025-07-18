import React from 'react';
import '../styles/components/hero.css';
import heroBg from '../assets/images/hero-bg.jpg';

export default function Hero({ title, subtitle }) {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </div>
  );
}



