import React, { useRef } from 'react'
import { scrollToRef } from '../utils/scrollToRef'
import Certifications from '../components/Certifications'

// ảnh
import aboutHero     from '../assets/images/about-hero.jpg'
import ourCompanyImg from '../assets/images/ourcompany.jpg'
import whoWeAreImg1  from '../assets/images/whoweare1.jpg'
import whoWeAreImg2  from '../assets/images/whoweare2.jpg'
import historyImg    from '../assets/images/history.jpg'
import coreValuesImg from '../assets/images/corevalues.jpg'

import '../styles/pages/about.css'

export default function AboutPage() {
  const whoRef     = useRef(null)
  const historyRef = useRef(null)
  const csrRef     = useRef(null)

  return (
    <div className="about-page">

      {/* Hero banner */}
      <section className="about-hero">
        <div className="hero-wrapper">
          <img src={aboutHero} alt="About Us Hero Banner" />
        </div>
      </section>

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
            title: 'Who We Are',
            text:  'Thygesen Textile Vietnam is proud to be part of Thygesen Textile Group (TTG)…',
            onClick: () => scrollToRef(whoRef)
          },
          {
            title: 'Our History',
            text:  'From a 90 m² production room to the Global Incredible Journey…',
            onClick: () => scrollToRef(historyRef)
          },
          {
            title: 'Our CSR',
            text:  'At Thygesen, Corporate Social Responsibility (CSR) is an integrated part…',
            onClick: () => scrollToRef(csrRef)
          },
        ].map((c,i) => (
          <div className="about-card" key={i}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <button onClick={c.onClick}>DISCOVER</button>
          </div>
        ))}
      </section>

      {/* Our Certifications */}
      <Certifications />

      {/* From a 90 m² Room to the Incredible Journey */}
      <section className="about-detail about-journey">
        <h2>From a 90 m² Room to the Incredible Journey</h2>
        <div className="detail-content">
          <div className="text">
            <p>
              Our company belongs to Thygesen Textile Group (TTG), which was formed in 1991 by the
              merger of three local, family-owned companies. But the story of the Group and the
              Thygesen family is rooted way further back in time.
            </p>
            <p>
              It all began from a 90 m² room production facility in Ikast, Denmark, where Carla
              Sorensen Thygesen started the production of underwear for children and women in 1931.
              The company grew steadily through the years and became a leading textile manufacturer,
              delivering its goods to the world market.
            </p>
            <p>
              Through nearly a century with significant milestones, TTG now consists of eight
              international subsidiaries, all involved in the textile industry, including a
              Vietnamese manufacturing company and a share in the global German company – Müller
              Textil GmbH which manufactures spacer fabrics for the automotive industry. The core
              competencies of the Group cover development, production, and sale of knitted/space
              fabrics, hosiery and finished garments. We employ more than 1,400 people in Denmark,
              Vietnam, Germany, Slovakia, Turkey, the USA, Mexico, China, Korea and Japan.
            </p>
          </div>
          <div className="images">
            <img src={historyImg} alt="Thygesen Textile Group Structure" />
          </div>
        </div>
      </section>

      {/* Thygesen Textile Vietnam */}
      <section className="about-company">
        <h2>Thygesen Textile Vietnam</h2>
        <div className="company-row">
          <div className="company-text">
            <p>
              Thygesen Textile Vietnam is proud to be part of the incredible journey. The company,
              formerly known as Thygesen Fabrics Vietnam Company Ltd., was established in September
              2004 and located in Vinh Tuy Industrial Zone, Hanoi Capital; then relocated to Hung Yen
              Province on 10th August 2009.
            </p>
          </div>
          <div className="company-image">
            <img src={whoWeAreImg1} alt="Thygesen Vietnam Office" />
          </div>
        </div>

        <div className="company-row reverse">
          <div className="company-text">
            <p>
              To capitalize on the benefits of locating our factories in Vietnam, our company has
              created a strong manufacturing capacity supported by a broad network of material
              suppliers, two factories with cutting-edge technology, a skilled labor force, and
              professional administration. We have in-house expertise to master the latest
              technology, material research, and development from fabric to garment construction
              and styling.
            </p>
            <p>
              Moreover, we hold ISO9001:2015, ISO13485:2016, Oeko-Tex 100, SA8000:2014, and WRAP
              certificates to demonstrate our high commitment to complying with quality standards
              and social responsibility. We also joined the Better Work program, which brings
              together all levels of the garment industry to improve working conditions and respect
              for labor rights for workers.
            </p>
          </div>
          <div className="company-image">
            <img src={whoWeAreImg2} alt="Thygesen Vietnam Factory" />
          </div>
        </div>
      </section>

      {/* Our Mission / Vision / Core Values */}
      <section className="about-corevalues">
        <h2>Our Mission, Vision & Core Values</h2>
        <div className="core-text">
          <h3>Our Mission</h3>
          <p>Our mission is to inspire and motivate change toward True Values and Sustainable Development.</p>

          <h3>Our Vision</h3>
          <p>
            Thygesen desires to become a prestigious textile supplier in Vietnam and worldwide while
            continually bringing True Added Values to our customers, partners, employees, and shareholders.
          </p>

          <h3>Our Core Values</h3>
          <p>
            From the beginning, Thygesen Textile Vietnam has strived to integrate our core values into
            everything we do. Truthfulness, Compassion, Kindness, Commitment, and Persistence have made
            us an innovative textile manufacturing company today.
          </p>
        </div>
        <div className="core-image">
          <img src={coreValuesImg} alt="Core Values" />
        </div>
      </section>

      {/* Our CSR – Mở rộng */}
      <section className="about-detail about-csr-expanded" ref={csrRef}>
        <h2>Our CSR</h2>
        <div className="csr-expanded">
          <p>
            From the beginning, Thygesen Textile Vietnam’s ambition has been to operate ethically and
            sustainably. Therefore, Corporate Social Responsibility (CSR) is an integrated part of our
            core business.
          </p>
          <p>
            We care about the environment, society, and our employees. Our CSR activities include
            supporting local communities, empowering our employees by creating a safe working
            environment, and progressing toward a low-carbon world through the eco-friendly garment
            production process. These efforts have been internationally accredited as we get SA8000:2014
            and WRAP certificates, as well as being a member of the Better Work program.
          </p>

          <h3>Thygesen Supporting Local Communities</h3>
          <ul>
            <li>Being the first company to invest in Yen Lap Industrial Park, Yen Lap District (Phu Tho Province), and create jobs for the local community of Yen Lap.</li>
            <li>Helping stop the spread of Covid-19 by donating money and providing masks to remote, isolated, and infected areas.</li>
            <li>Donating and supporting children of 11 primary schools in Nam Po District, Dien Bien Province – a northern province during the 4th COVID-19 outbreak in Vietnam.</li>
            <li>Donating to people living in poverty and victims of agent orange in Yen Lap District (Phu Tho Province).</li>
          </ul>

          <h3>Promoting a Safe Working Environment</h3>
          <ul>
            <li>Our responsibility is to treat our people fairly and ensure a safe and healthy working environment which is proven by our WRAP certification and Better Work participation.</li>
            <li>We believe in empowering the vulnerable and giving them equal opportunities to participate in the company.</li>
            <li>We commit to complying with both local and international labor laws. No form of child labor will be used or supported.</li>
          </ul>

          <h3>Green Production for the Environment</h3>
          <ul>
            <li>Environmental sustainability is at the heart of everything we do. We offer sustainable materials such as recycled fabrics (recycle polyester, recycle cotton, recycle nylon), and natural materials (bamboo, hemp, organic cotton) that are GOTS, FSC, and OCS certified.</li>
            <li>We apply the LEAN system to minimize time and industrial waste in manufacturing.</li>
            <li>Thygesen also focuses on projects that raise awareness about protecting the environment in society.</li>
          </ul>

          <p>
            To find out about our Corporate Social Responsibility efforts, you may visit Thygesen Sustainability and our CSR activities.
          </p>
        </div>
      </section>
      

    </div>
  )
}


