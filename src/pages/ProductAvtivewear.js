import React from 'react';
import '../styles/pages/product-activewear.css';

import heroImg       from '../assets/images/products/details/activewear-hero.jpg';
import range1Img     from '../assets/images/products/details/activewear-range-1.jpg';
import range2Img     from '../assets/images/products/details/activewear-range-2.jpg';
import fair1Img      from '../assets/images/products/details/activewear-fairtrade-1.jpg';
import fair2Img      from '../assets/images/products/details/activewear-fairtrade-2.jpg';
import powerAllImg   from '../assets/images/products/details/activewear-power-all.jpg';
import qualityImg    from '../assets/images/products/details/activewear-quality.jpg';

import Certifications from '../components/Certifications';
import Customers      from '../components/Customers';
import ProcessSetup   from '../components/ProcessSetup';

export default function ProductActivewear() {
  return (
    <div className="activewear-page">
      <section className="hero">
        <img src={heroImg} alt="Activewear Hero" />
        <div className="hero-text">
          <h1>Custom Activewear Manufacturing</h1>
          <p> copy text from sample page here </p>
        </div>
      </section>

      <section className="range">
        <h2>Our Range of Customized Activewear</h2>
        <div className="range-images">
          <img src={range1Img} alt="" />
          <img src={range2Img} alt="" />
        </div>
        <p className="range-text"> copy text </p>
      </section>

      <section className="fairtrade">
        <h2>Ethical & Fair-Trade Production</h2>
        <div className="fairtrade-images">
          <img src={fair1Img} alt="" />
          <img src={fair2Img} alt="" />
        </div>
        <p className="fairtrade-text">/* copy text */</p>
      </section>

      <section className="power">
        <h2>We Understand the Power of Fashion</h2>
        <img src={powerAllImg} alt="" />
      </section>

      <section className="quality">
        <h2>We Prioritize Quality Control &amp; Compliance</h2>
        <img src={qualityImg} alt="" />
      </section>

      <section className="certs">
        <h2>Our Certifications</h2>
        <Certifications />
      </section>

      <section className="clients">
        <h2>Our Clients Say</h2>
        <Customers />
      </section>

      <section className="process">
        <h2>Our Process Setup is Optimized for Mass Production</h2>
        <ProcessSetup />
      </section>
    </div>
  );
}



