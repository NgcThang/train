import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import '../styles/components/section.css';

export default function HomePage() {
  return (
    <main>
      {/* Hero section */}
      <Hero
        title="Over 90 Years of Experience in the Textile Industry"
        subtitle="In 1931, Carla Søren Thygesen began a journey that would link the name Thygesen Textile Group (Denmark) with quality in designing, manufacturing and selling textile products."
      />

      {/* Carousel */}
      <Slider />

      {/* Mission / Vision / Core Values */}
      <section className="values">
        <div className="values__item">
          <h3>Mission</h3>
          <p>
            To inspire and motivate change toward <strong>True Values</strong> and{' '}
            <strong>Sustainable Development.</strong>
          </p>
        </div>
        <div className="values__item">
          <h3>Vision</h3>
          <p>
            To become a prestigious textile supplier in Vietnam and worldwide while continually
            bringing <strong>True Added Values</strong> to our customers, partners, employees, and
            shareholders.
          </p>
        </div>
        <div className="values__item">
          <h3>Core Values</h3>
          <p>
            From the beginning, Thygesen Textile Vietnam has strived to translate our core values
            into everything we do. <strong>Truthfulness</strong>, <strong>Compassion</strong>,
            <strong>Kindness</strong>, <strong>Commitment</strong>, and{' '}
            <strong>Persistence</strong> are what made us a prestigious and sustainable textile
            manufacturing company today.
          </p>
        </div>
      </section>
    </main>
  );
}



