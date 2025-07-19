import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/components/process-setup.css'


import step1 from '../assets/images/step1.png'
import step2 from '../assets/images/step2.png'
import step3 from '../assets/images/step3.png'
import step4 from '../assets/images/step4.png'
import step5 from '../assets/images/step5.png'
import step6 from '../assets/images/step6.png'


const steps = [
  {
    img: step1,
    title: "Handle Customer’s Inquiry",
    desc:
      "Send us an inquiry and share more details about your projects, and our dedicated team will handle it.",
  },
  {
    img: step2,
    title: "Make Quotation",
    desc:
      "If your project is suitable for our standard MOQ and production, then we offer an initial quotation based on the techpack, selected fabric quality, and quantity.",
  },
  {
    img: step3,
    title: "Sample Development",
    desc:
      "After the customer’s approval of the quotation, we proceed with sample development to confirm quality before starting bulk production.",
  },
  {
    img: step4,
    title: "Bulk Production",
    desc:
      "Following order confirmation and a deposit, we initiate bulk production with all specifications carefully followed.",
  },
  {
    img: step5,
    title: "Quality Control",
    desc:
      "We follow strictly our QC procedures, ensuring 100% end-line inspections. We also apply AQL 2.5 for final inspections. Third-party QC is always welcome.",
  },
  {
    img: step6,
    title: "Packaging & Shipping",
    desc:
      "Once the quality is confirmed, the finished products are carefully packaged and shipped in bulk to your warehouse.",
  },
]


export default function ProcessSetup() {
  return (
    <section className="process-section">
      <span className="process-divider" />
      <h2 className="process-title">
        Our Process Setup is Optimized for Mass Production
      </h2>


      <div className="process-grid">
        {steps.map((s, i) => (
          <div className="process-item" key={i}>
            <div className="process-icon">
              <img src={s.img} alt={s.title} />
            </div>
            <p className="process-step">Step {i + 1}</p>
            <h3 className="process-item-title">{s.title}</h3>
            <p className="process-item-desc">{s.desc}</p>
          </div>
        ))}
      </div>


      <div className="process-cta">
        <Link to="/contact" className="button-primary">
            Get your quote now
        </Link>
      </div>
    </section>
  )
}





