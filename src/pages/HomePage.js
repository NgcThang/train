import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Section from '../components/Section' // mission/vision/core values

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
      <div style={{ padding: '0 2rem' }}>
        <Slider images={images}/>
      </div>

      <Hero
        title="Over 90 Years of Experience in the Textile Industry"
        subtitle="In 1931, Carla Søren Thygesen began a journey that would link the name Thygesen Textile Group (Denmark) with quality in designing, manufacturing and selling textile products."
        image={heroBg}
      />

      <Section />
    </>
  )
}



