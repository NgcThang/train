import React from 'react'
import '../styles/components/certifications.css'

import gsv from '../assets/images/certifications/gsv-certification.jpg'
import iso9001 from '../assets/images/certifications/iso-9001certification.jpg'
import iso13485 from '../assets/images/certifications/iso-13485-certification.jpg'
import sa8000 from '../assets/images/certifications/sa-8000.jpg'
import wrap from '../assets/images/certifications/wrap.jpg'
import betterWork from '../assets/images/certifications/better-work.jpg'
import grs from '../assets/images/certifications/grs.jpg'
import gots from '../assets/images/certifications/gots.jpg'


const CERT_LINK = 'https://www.facebook.com/profile.php?id=61578135510961'


const certifications = [
  { src: gsv,        title: 'GSV',           link: CERT_LINK },
  { src: iso9001,    title: 'ISO 9001:2015', link: CERT_LINK },
  { src: iso13485,   title: 'ISO 13485:2016', link: CERT_LINK },
  { src: sa8000,     title: 'SA 8000:2014',   link: CERT_LINK },
  { src: wrap,       title: 'WRAP',          link: CERT_LINK },
  { src: betterWork, title: 'Better Work',   link: CERT_LINK },
  { src: grs,        title: 'GRS',           link: CERT_LINK },
  { src: gots,       title: 'GOTS',          link: CERT_LINK },
]


export default function Certifications() {
  return (
    <section className="certifications-section">
      <span className="certifications-divider" />
      <h2 className="certifications-title">Our Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((c) => (
          <a
            key={c.title}
            href={c.link}
            className="certification-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c.src} alt={c.title} />
            <p className="certification-item-title">{c.title}</p>
          </a>
        ))}
      </div>
    </section>
  )
}





