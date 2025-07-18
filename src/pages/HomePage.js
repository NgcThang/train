import React from 'react';
import Hero    from '../components/Hero';
import Section from '../components/Section';
import Slider  from '../components/Slider';
import '../styles/components/hero.css';

import c1 from '../assets/images/carousel1.jpg';
import c2 from '../assets/images/carousel2.jpg';
import c3 from '../assets/images/carousel3.jpg';
import c4 from '../assets/images/carousel4.jpg';

export default function HomePage() {
  return (
    <>
      <Hero
        title="The Incredible 90-YEAR JOURNEY"
        subtitle="Apparel Manufacturing Excellence Since 1930"
        buttonText="Discover"
        buttonLink="#about"
      />

      <Section id="carousel">
        <Slider images={[c1,c2,c3,c4]} />
      </Section>

      {/* Các section tiếp theo (About / Capabilities / Stats / CTA) */}
      <Section id="about">
        <div className="about-content">
          <h2>Over 90 Years of Heritage & Innovation</h2>
          <p>
            Thygesen Apparel has been at the forefront of quality apparel manufacturing, offering custom solutions for global brands. Our heritage and commitment drive us to exceed expectations.
          </p>
          <a href="/about" className="btn">Read More</a>
        </div>
      </Section>

      <Section id="capabilities">
        <h2>Our Capabilities</h2>
        <div className="cards">
          <div className="card">
            <h3>Activewear</h3>
            <p>High-performance fabrics and precise manufacturing.</p>
          </div>
          <div className="card">
            <h3>Casualwear</h3>
            <p>Comfort and style for everyday wear.</p>
          </div>
          <div className="card">
            <h3>Kidswear</h3>
            <p>Durable, safe, and playful clothing lines.</p>
          </div>
        </div>
      </Section>

      <Section id="stats">
        <div className="stats-grid">
          <div className="stat">
            <h3>800K</h3>
            <p>pcs/month capacity</p>
          </div>
          <div className="stat">
            <h3>16</h3>
            <p>steps process</p>
          </div>
          <div className="stat">
            <h3>45+</h3>
            <p>years industry experience</p>
          </div>
        </div>
      </Section>

      <Section id="contact-cta">
        <h2>Ready to Start Your Project?</h2>
        <a href="/contact" className="btn">Contact Us</a>
      </Section>
    </>
  );
}



