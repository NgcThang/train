import React from 'react';
import '../styles/pages/contact.css';
import heroImg from '../assets/images/contact-hero.jpg';
import bottomImg from '../assets/images/contact-bottom.jpg';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Main Content */}
      <section className="contact-content">
        {/* Company Info */}
        <div className="contact-info">
          <h2>Let’s Talk</h2>
          <p>
            Whether you have questions about our services, need a quote, or just want to say hello, our team is ready to help. Fill out the form and we’ll be in touch shortly.
          </p>
          <p>
            We are always open to discuss new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="company-details">
            <p><strong>INDONG EPIC COMPANY LIMITED</strong></p>
            <p>📍 Cụm CN Đồng Sóc, Vĩnh Tường, Việt Nam</p>
            <p>📞 090 175 88 33</p>
            <p>📧 lienhe@indongepic.vn</p>
            <p>Facebook | Zalo | LinkedIn</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/mblkgqjq"
          method="POST"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country/Region*</label>
              <input type="text" id="country" name="country" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Inquiry Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Bottom Image */}
      <div
        className="contact-bottom"
        style={{ backgroundImage: `url(${bottomImg})` }}
      />
    </div>
  );
}


