import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Section from '../components/Section' 

// import ảnh
import heroBg from '../assets/images/hero-bg.jpg'
import carousel1 from '../assets/images/carousel1.jpg'
import carousel2 from '../assets/images/carousel2.jpg'
import carousel3 from '../assets/images/carousel3.jpg'
import carousel4 from '../assets/images/carousel4.jpg'



export default function HomePage() {
  const images = [carousel1, carousel2, carousel3, carousel4]

  return (
    <>
      <Slider images={images} interval={4000} />

      <Hero
        image={heroBg}
        title="Over 90 Years of Experience in the Textile Industry"
        subtitle="In 1931, Carla Søren Thygesen began a journey that would link the name Thygesen Textile Group (Denmark) with quality in designing, manufacturing and selling textile products."
      />

      <section className="container values-section">
        <div className="card">
          <h3>Mission</h3>
          <p>To inspire and motivate change toward <strong>True Values</strong> and <strong>Sustainable Development</strong>.</p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>To become a prestigious textile supplier in Vietnam and worldwide while continually bringing <strong>True Added Values</strong> to our customers, partners, employees, and shareholders.</p>
        </div>
        <div className="card">
          <h3>Core Values</h3>
          <p>From the beginning, Thygesen Textile Vietnam has strived to translate our core values into everything we do: <strong>Truthfulness</strong>, <strong>Compassion</strong>, <strong>Kindness</strong>, <strong>Commitment</strong>, and <strong>Persistence</strong>.</p>
        </div>
      </section>

    </>
  )
}



