import React, { useState, useRef, useEffect } from 'react';
import '../styles/pages/contact.css';
import heroImg from '../assets/images/contact-hero.jpg';
import bottomImg from '../assets/images/contact-bottom.jpg';

export default function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const timerRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch('https://formspree.io/f/mblkgqjq', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          setShowThankYou(true);
          form.reset();
          // Sau 10s thì trở lại contact và ẩn popup
          timerRef.current = setTimeout(() => {
            setShowThankYou(false);
            window.location.href = "/contact";
          }, 10000);
        }
      });
  }

  function handleBack() {
    setShowThankYou(false);
    window.location.href = "/contact";
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="contact-wrapper">
      {/* Hero Banner */}
      <div className="contact-hero" style={{ backgroundImage: `url(${heroImg})` }} />

      {/* Content Section */}
      <section className="contact-content">
        {/* Left Intro Text */}
        <div className="contact-info">
          <h2>Let’s Talk</h2>
          <p>
            Whether you have questions about our services, need a quote, or just want to say hello,
            our team is ready to help. Fill out the form and we’ll be in touch shortly.
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

        {/* Right Form */}
        <div className="contact-form-wrapper">
          {showThankYou ? (
            <div className="thankyou-popup">
              <h2>Thank you!</h2>
              <p>Your message has been submitted successfully.</p>
              <button onClick={handleBack}>Go Back</button>
              <p style={{ marginTop: 8, color: '#888' }}>
                You will be redirected in 10 seconds...
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
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
          )}
        </div>
      </section>

      {/* Bottom Image */}
      <div className="contact-bottom" style={{ backgroundImage: `url(${bottomImg})` }} />
    </div>
  );
}



