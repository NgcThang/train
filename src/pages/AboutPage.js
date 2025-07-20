// src/pages/AboutPage.js
import React, { useRef } from 'react'
import { scrollToRef } from '../utils/scrollToRef'
import Certifications from '../components/Certifications'

// import ảnh ở đây
import ourCompanyImg    from '../assets/images/ourcompany.jpg'
import whoWeAreImg1     from '../assets/images/whoweare1.jpg'
import whoWeAreImg2     from '../assets/images/whoweare2.jpg'
import historyImg       from '../assets/images/history.jpg'
import coreValuesImg    from '../assets/images/corevalues.jpg'

import '../styles/pages/about.css'

export default function AboutPage() {
  const whoRef     = useRef(null)
  const historyRef = useRef(null)
  const csrRef     = useRef(null)

  return (
    <div className="about-page">

      {/* Intro */}
      <section className="about-intro">
        <div className="intro-text">
          <p>
            Over ninety years ago, Carla Soren Thygesen began a journey that would link the name
            Thygesen Textile Group (TTG) with quality in designing, manufacturing and selling textile
            products. Thygesen Textile Vietnam is proud to be part of this incredible journey.
          </p>
          <p>
            With long-term experience and expertise in knitting and sewing, we have become an
            innovative company specializing in OEM/ODM manufacturing. We take care of everything to
            materialize your idea and strive to translate our core values of Truthfulness, Compassion,
            Kindness, Commitment and Persistence into actions.
          </p>
        </div>
        <div className="intro-image">
          <img src={ourCompanyImg} alt="Our Company" />
        </div>
      </section>

      {/* Quick Links */}
      <section className="about-cards">
        {[
          {
            title : 'Who We Are',
            text  : 'Thygesen Textile Vietnam is proud to be part of Thygesen Textile Group (TTG)…',
            onClick: () => scrollToRef(whoRef)
          },
          {
            title : 'Our History',
            text  : 'From a 90 m² production room to the Global Incredible Journey…',
            onClick: () => scrollToRef(historyRef)
          },
          {
            title : 'Our CSR',
            text  : 'At Thygesen, Corporate Social Responsibility (CSR) is an integrated part…',
            onClick: () => scrollToRef(csrRef)
          },
        ].map((c, i) => (
          <div className="about-card" key={i}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <button onClick={c.onClick}>DISCOVER</button>
          </div>
        ))}
      </section>

      {/* Who We Are */}
      <section className="about-detail" ref={whoRef}>
        <h2>Who We Are</h2>
        <div className="detail-content">
          <div className="images">
            <img src={whoWeAreImg1} alt="Who We Are 1" />
            <img src={whoWeAreImg2} alt="Who We Are 2" />
          </div>
          <div className="text">
            <p>
              Thygesen Textile Vietnam is a member of Thygesen Textile Group (TTG). We are committed
              to innovation, quality, and ethical manufacturing, translating our core values into
              every product we craft.
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="about-detail reverse" ref={historyRef}>
        <h2>Our History</h2>
        <div className="detail-content">
          <div className="text">
            <p>
              From a 90 m² production room to the Global Incredible Journey, it has been nearly a
              century of creating true values with significant milestones.
            </p>
          </div>
          <div className="images">
            <img src={historyImg} alt="Our History" />
          </div>
        </div>
      </section>

      {/* Our CSR */}
      <section className="about-detail" ref={csrRef}>
        <h2>Our CSR</h2>
        <div className="csr-text">
          <p>
            At Thygesen, Corporate Social Responsibility (CSR) is an integrated part of our core
            business. We strive every day for the environment, people, and society, ensuring safe
            working conditions and community engagement.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-corevalues">
        <h2>Our Mission, Vision & Core Values</h2>
        <div className="corevalues-image">
          <img src={coreValuesImg} alt="Core Values" />
        </div>
        <div className="corevalues-list">
          <div>
            <h4>Mission</h4>
            <p>To deliver high-quality, sustainable apparel that empowers our partners’ brands.</p>
          </div>
          <div>
            <h4>Vision</h4>
            <p>To be the most trusted textile partner, leading in innovation and responsibility.</p>
          </div>
          <div>
            <h4>Core Values</h4>
            <p>Truthfulness, Compassion, Kindness, Commitment, Persistence.</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="about-certifications">
        <h2>Our Certifications</h2>
        <Certifications />
      </section>

    </div>
  )
}



