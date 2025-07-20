import React from 'react'
import Customers from '../components/Customers'

import capabilityHighlight from '../assets/images/capability.jpg'
import strength1 from '../assets/images/strength1.jpg'
import strength2 from '../assets/images/strength2.jpg'
import strength3 from '../assets/images/strength3.jpg'
import strength4 from '../assets/images/strength4.jpg'
import strength5 from '../assets/images/strength5.jpg'

import '../styles/pages/capabilities.css'

const strengths = [
  {
    img: strength1,
    title: 'In R&D',
    desc:
      'Our in-house development team studies your specifications to design readily practical tools, methods, and work instructions, which combined with the deployment of today technology, ensure timely production and consistent quality standards.',
  },
  {
    img: strength2,
    title: 'LEAN Production',
    desc:
      'It is important for us to focus on sustainability and responsibility in the manufacturing processes. Our application of LEAN manufacturing system improves efficiency which reduces not only waste but also your lead time.',
  },
  {
    img: strength3,
    title: 'OEM/ODM Manufacturing',
    desc:
      'Thygesen’s team is committed to creating innovative ODM/OEM solutions for your fashion brands. Our skillful employees and high-technology machine system allow us to manage the entire process from design to the finished products.',
  },
  {
    img: strength4,
    title: 'Competitive prices & timely delivery',
    desc:
      'We strive to offer international quality standard products at reasonable prices and in a timely manner.',
  },
  {
    img: strength5,
    title: 'A vast network of reliable suppliers and strategic partners',
    desc:
      'Thygesen’s team is committed to creating innovative ODM/OEM solutions for your fashion brands. Our skillful employees and high-technology machine system allow us to manage the entire process from design to the finished products.',
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <div className="capabilities-page">
      <span
          style={{
            display: 'block',
            width: '40px',
            height: '1px',
            backgroundColor: '#a09eb0ff', 
            margin: '2px auto 1px',
            borderRadius: '2px',
          }}
        />
        <header className="capabilities-header">
          <h1>Capabilities</h1>
          <h2 className="capabilities-slogan">We Define Quality</h2>
          <p className="capabilities-intro">
            Competent and dedicated, Thygesen’s team distinguishes itself by maintaining its focus on
            service. With this direction, Thygesen Textile Vietnam can comply with the industry’s most
            demanding standards while maintaining profitability and motivation.
          </p>
        </header>

        <div className="capabilities-stats">
          <img src={capabilityHighlight} alt="Key Metrics" />
        </div>

        <section className="capabilities-strengths">
            <h3>Strengths &amp; Advantages</h3>
            <div className="strengths-list">
            {strengths.map((item, idx) => (
                <div
                key={item.title}
                className={`strengths-row ${idx % 2 === 1 ? 'reverse' : ''}`}
                >
                <div className="strengths-image">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="strengths-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </section>

        <section className="capabilities-customers">
          <Customers />
        </section>
      </div>
    </>
  )
}



