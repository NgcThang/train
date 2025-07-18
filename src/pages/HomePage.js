// src/pages/HomePage.js
import React from 'react';
import Section from '../components/Section';
import Slider  from '../components/Slider';

import carousel1 from '../assets/images/carousel1.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel4 from '../assets/images/carousel4.jpg';

export default function HomePage() {
  return (
    <>
      {/* ... các section trên ... */}
      <Section id="carousel">
        <Slider
          images={[carousel1, carousel2, carousel3, carousel4]}
        />
      </Section>
      {/* ... các section dưới ... */}
    </>
  );
}



