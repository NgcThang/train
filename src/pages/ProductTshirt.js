// src/pages/ProductTshirt.js
import React from 'react';
import '../styles/pages/product-tshirt.css';

import tshirtHero    from '../assets/images/products/details/tshirt-hero.jpg';
import tshirtRange1  from '../assets/images/products/details/tshirt-range-1.jpg';
import tshirtRange2  from '../assets/images/products/details/tshirt-range-2.jpg';
import tshirtFair1   from '../assets/images/products/details/tshirt-fairtrade-1.jpg';
import tshirtFair2   from '../assets/images/products/details/tshirt-fairtrade-2.jpg';
import tshirtPowerAll from '../assets/images/products/details/tshirt-power-all.jpg';
import tshirtQuality from '../assets/images/products/details/tshirt-quality.jpg';

import Reviews      from '../components/Reviews';

export default function ProductTshirt() {
  return (
    <div className="tshirt-page">
      {/* Hero */}
      <section className="tshirt-hero">
        <img src={tshirtHero} alt="T-Shirt Manufacturing Hero" />
        <div className="tshirt-hero-text">
          <h1>Custom T-Shirt Manufacturing</h1>
          <p>
            At Thygesen, we create premium custom t-shirts tailored to your brand’s exact
            specifications—from fabric selection and pattern making to printing and finishing.
            Whether you need basics, fashion styles or performance tees, our turnkey solution
            ensures superior quality and fast turnaround.
          </p>
        </div>
      </section>

      {/* Range of Styles */}
      <section className="tshirt-range">
        <h2>Our Range of Customized T-Shirts</h2>
        <div className="range-images">
          <img src={tshirtRange1} alt="Men's Custom T-Shirts" />
          <img src={tshirtRange2} alt="Women's Custom T-Shirts" />
        </div>
        <p className="range-text">
          From classic crew-necks and v-necks to oversized and fitted cuts, we deliver a full range
          of t-shirt styles. Choose your preferred fabric weight, blend, color and finish for a
          product that perfectly represents your label.
        </p>
      </section>

      {/* Fair Trade */}
      <section className="tshirt-fairtrade">
        <h2>Ethical & Fair-Trade Production</h2>
        <div className="fairtrade-images">
          <img src={tshirtFair1} alt="Fairtrade Certified Factory" />
          <img src={tshirtFair2} alt="Fairtrade T-Shirt Production" />
        </div>
        <p className="fairtrade-text">
          All our t-shirts are produced in WRAP and SA8000 certified facilities, ensuring fair
          wages, safe working conditions and zero child labor. We’re committed to ethical practices
          at every step.
        </p>
      </section>

      {/* Power of Fashion */}
      <section className="tshirt-power">
        <h2>We Understand the Power of Fashion</h2>
        <img src={tshirtPowerAll} alt="Fashion Power Gallery" />
      </section>

      {/* Quality & Compliance */}
      <section className="tshirt-quality">
        <h2>We Prioritize Quality Control &amp; Compliance</h2>
        <img src={tshirtQuality} alt="Quality Control Compliance" />
      </section>

    <Reviews />
    </div>
  );
}



