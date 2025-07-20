import React from 'react'
import Certifications from '../components/Certifications'
import ProcessSetup from '../components/ProcessSetup'

import '../styles/pages/sustainability.css'

import sustain1 from '../assets/images/sustain1.jpg'
import sustain2 from '../assets/images/sustain2.jpg'
import sustain3 from '../assets/images/sustain3.jpg'
import sustain4 from '../assets/images/sustain4.jpg'
import sustain5 from '../assets/images/sustain5.jpg'
import differentSolutions from '../assets/images/differentSolutions.jpg'

const whyChoose = [
  {
    img: sustain1,
    title: 'Responsible Materials',
    desc: 'We source only GOTS, OCS, FSC-certified fabrics and sustainable fibers to ensure environmental stewardship from raw material to finished product.',
  },
  {
    img: sustain2,
    title: 'Ethical Production',
    desc: 'All our factories adhere to SA8000 and WRAP standards, providing fair wages, safe working conditions, and no child labor.',
  },
  {
    img: sustain3,
    title: 'Circularity & Waste Reduction',
    desc: 'We apply zero-waste pattern making, fabric offcut recycling, and water-saving dye houses to minimize environmental footprint.',
  },
  {
    img: sustain4,
    title: 'Energy & Resource Efficiency',
    desc: 'Our facilities use solar-powered lighting, high-efficiency machines, and closed-loop water systems to cut energy and water use.',
  },
  {
    img: sustain5,
    title: 'Community Engagement',
    desc: 'We partner with local NGOs and schools, funding training programs and supporting community development in our regions.',
  },
]

export default function SustainabilityPage() {
  return (
    <>
      <div className="sustain-page">
      <span
          style={{
            display: 'block',
            width: '40px',
            height: '1px',
            backgroundColor: '#a09eb0ff', 
            margin: '2rem auto 20px',
            borderRadius: '2px',
          }}
        />
        <header className="sustain-header">
          <h1>We Strive For A More Sustainable And Responsible Future</h1>
          <p className="sustain-intro">
            Thygesen Textile Vietnam is a sustainable clothing manufacturer based in Vietnam. We are committed to ethical and sustainable practices, creating positive impacts for the environment, people, and society. In addition, we focus on waste reduction, eco-friendly materials, and LEAN processes while prioritizing our team’s well-being.
          </p>
        </header>

        <section className="sustain-choose">
        <h2>Why Choose Thygesen As Your Sustainable Clothing Manufacturer?</h2>
        <div className="choose-list">
            {whyChoose.map((item, i) => (
            <div
                className={`choose-item ${i % 2 === 1 ? 'reverse' : ''}`}
                key={i}
            >
                <div className="choose-img">
                <img src={item.img} alt={item.title} />
                </div>
                <div className="choose-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </section>

        <section className="sustain-certs">
          <h2>Our Sustainable Certifications</h2>
          <Certifications />
        </section>

        <section className="sustain-different">
          <h2>How Are Our OEM/ODM Solutions Different?</h2>
          <img src={differentSolutions} alt="Different Solutions" />
          <div className="cta">
            <a href="/contact" className="button-primary">
              Get Started
            </a>
          </div>
        </section>

        <section className="sustain-process">
          <ProcessSetup />
        </section>
      </div>
    </>
  )
}



