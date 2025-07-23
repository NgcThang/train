import React from 'react'
import '../styles/pages/product-tshirt.css'

// ảnh
import tshirtHero   from '../assets/images/products/details/tshirt-hero.jpg'
import tshirtRange1 from '../assets/images/products/details/tshirt-range-1.jpg'
import tshirtRange2 from '../assets/images/products/details/tshirt-range-2.jpg'
import tshirtFair1  from '../assets/images/products/details/tshirt-fairtrade-1.jpg'
import tshirtFair2  from '../assets/images/products/details/tshirt-fairtrade-2.jpg'
import tshirtQuality from '../assets/images/products/details/tshirt-quality.jpg'
import tshirtPowerAll from '../assets/images/products/details/tshirt-power-all.jpg'

// component
import Customer from '../components/Customers.js'
import Reviews  from '../components/Reviews.js'

const ProductTshirt = () => (

  
  <div className="product-tshirt">

    {/* Hero banner full-width */}
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${tshirtHero})` }}
    />  

    {/* 1. Discover An Extensive Range */}
    <section className="feature-section">
      <div className="text">
        <h2>Discover An Extensive Range Of Casual & Fashionwear</h2>
        <div className="underline" />
        <p>
          Our casual & fashionwear manufacturing service caters to diverse preferences,
          providing a wide array of styles, from classic essentials to the latest trends,
          all tailored to your fashion brand needs.
        </p>
        <p>
          Our commitment to sustainability drives us to use natural and eco-friendly
          materials, including 100% Cotton, Organic Cotton, BCI Cotton, Cotton/Spandex,
          Tencel, and Bamboo Viscose/Spandex. With a focus on customer satisfaction,
          our fashion-forward garments not only look great but also feel comfortable
          and gentle on the skin.
        </p>
      </div>
      <div className="images range">
        <img src={tshirtRange1} alt="Range style 1" />
        <img src={tshirtRange2} alt="Range style 2" />
      </div>
    </section>

    {/* 2. Fair-Trade & Fair Fashion */}
    <section className="feature-section reverse">
      <div className="text">
        <h2>We Support Fair Trade & Fair Fashion</h2>
        <div className="underline" />
        <p>
          At Thygesen Textile Vietnam, we stand firmly behind fair trade and fair
          fashion practices. Our commitment to creating a positive social impact
          and upholding ethical standards drives our manufacturing process.
        </p>
        <p>
          By advocating fair trade, we guarantee fair wages, safe working conditions
          and opportunities for personal growth and development for the workers involved
          in our casual & fashionwear manufacturing.
        </p>
        <p>
          We are dedicated to promoting an equitable and responsible supply chain,
          fostering a culture of fairness and social responsibility in the fashion industry.
        </p>
      </div>
      <div className="images fair">
        <img src={tshirtFair1} alt="Fair-trade production" />
        <img src={tshirtFair2} alt="Fair-trade production" />
      </div>
    </section>

    <section className="feature-power">
      <div className="text">
        <h2>We Understand The Power Of Fashion In Expressing Personalities</h2>
        <div className="underline"/>
        <p>
          Thygesen delivers diverse styles of Casual & Fashion wear, tailored to your
          preferences, from essential basics to cutting-edge trends. We also offer
          customized packaging, hangtags and labeling solutions, creating a seamless
          OEM journey that ensures your customers achieve the perfect look they desire.
        </p>
        <p>
          With our expertise in fashion and unwavering commitment to quality, let Thygesen
          elevate your brand to new heights of style and satisfaction.
        </p>
      </div>
      <div className="power-image">
        <img src={tshirtPowerAll} alt="Power Of Fashion" />
      </div>
    </section>

    {/* 3. Quality Control & Compliance */}
    <section className="feature-section">
      <div className="text">
        <h2>We Prioritize Quality Control & Industry Compliance</h2>
        <div className="underline" />
        <p>
          Our process includes inline inspections, lab testing and final audits to ensure
          every tee meets international standards. We hold ISO 9001:2015, ISO 13485:2016
          and Oeko-Tex certifications to guarantee both quality and safety.
        </p>
        <ul>
          <li>
            <strong>Material Sourcing/Development:</strong> Materials meet specified standards—
            fashionable design, comfortable fit, sustainable color.
          </li>
          <li>
            <strong>In-process Inspections:</strong> We check measurements, stitching quality,
            color consistency and overall workmanship.
          </li>
          <li>
            <strong>Final Inspection:</strong> We welcome third-party audits to validate our
            standards and ensure transparency.
          </li>
        </ul>
      </div>
      <div className="images quality">
        <img src={tshirtQuality} alt="Quality control" />
      </div>
    </section>

    {/* Customer logos & Testimonials */}
    <Customer />
    <Reviews />

  </div>
)

export default ProductTshirt



