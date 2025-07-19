import React from 'react'
import '../styles/components/customers.css'


import elis from '../assets/images/customers/elis.jpg'
import dkny from '../assets/images/customers/dkny.jpg'
import gForm from '../assets/images/customers/g-form.jpg'
import girlfriend from '../assets/images/customers/girlfriend-collective.jpg'
import fjallraven from '../assets/images/customers/fjallraven.jpg'
import calvinKlein from '../assets/images/customers/calvin-klein.jpg'
import tommyHilfiger from '../assets/images/customers/tommy-hilfiger.jpg'
import bFree from '../assets/images/customers/b-free.jpg'


// Tạm dùng URL trang chủ; bạn có thể sửa lại đúng URL sau
const customers = [
  { src: elis,         alt: 'Elis',               link: 'https://www.elis.com' },
  { src: dkny,         alt: 'DKNY',               link: 'https://www.dkny.com' },
  { src: gForm,        alt: 'G-Form',             link: 'https://www.g-form.com' },
  { src: girlfriend,   alt: 'Girlfriend Collective', link: 'https://www.girlfriend.com' },
  { src: fjallraven,   alt: 'Fjällräven',         link: 'https://www.fjallraven.com' },
  { src: calvinKlein,  alt: 'Calvin Klein',       link: 'https://www.calvinklein.com' },
  { src: tommyHilfiger,alt: 'Tommy Hilfiger',     link: 'https://global.tommy.com' },
  { src: bFree,        alt: 'B Free Australia',   link: 'https://www.bfreeaustralia.com' },
]


export default function Customers() {
  return (
    <section className="customers-section">
      <span className="customers-divider" />
      <h2 className="customers-title">Featured Customers</h2>
      <div className="customers-grid">
        {customers.map((c) => (
          <a
            key={c.alt}
            href={c.link}
            className="customer-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c.src} alt={c.alt} />
          </a>
        ))}
      </div>
    </section>
  )
}





