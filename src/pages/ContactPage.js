import React, { useState, useRef } from 'react';
import '../styles/pages/contact.css';
import heroImg from '../assets/images/contact-hero.jpg';
import bottomImg from '../assets/images/contact-bottom.jpg';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const timeoutRef = useRef(null);

  function validate() {
    let newErrors = {};
    if (!form.email.trim()) newErrors.email = "Please complete this required field.";
    if (!form.country.trim()) newErrors.country = "Please complete this required field.";
    if (!form.subject.trim()) newErrors.subject = "Please complete this required field.";
    return newErrors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit to Formspree
    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key]));
    await fetch("https://formspree.io/f/mblkgqjq", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    setShowThankYou(true);
    setForm({
      firstName: '', lastName: '', email: '', country: '',
      phone: '', subject: '', message: ''
    });
    timeoutRef.current = setTimeout(() => setShowThankYou(false), 10000);
  }

  function handleCloseThankYou() {
    setShowThankYou(false);
    clearTimeout(timeoutRef.current);
  }

  return (
    <div className="contact-wrapper">
      {/* Hero Banner */}
      <div className="contact-hero" style={{ backgroundImage: `url(${heroImg})` }} />

      {/* Content Section */}
      <section className="contact-content">
        <div className="contact-info">
          <h2>Let’s Talk</h2>
          <p>Whether you have questions about our services, need a quote, or just want to say hello, our team is ready to help. Fill out the form and we’ll be in touch shortly.</p>
          <p>We are always open to discuss new projects, creative ideas or opportunities to be part of your vision.</p>
          <div className="company-details">
            <p><strong>INDONG EPIC COMPANY LIMITED</strong></p>
            <p>📍 Cụm CN Đồng Sóc, Vĩnh Tường, Việt Nam</p>
            <p>📞 090 175 88 33</p>
            <p>📧 lienhe@indongepic.vn</p>
            <p>Facebook | Zalo | LinkedIn</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email<span style={{ color: 'red' }}>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="country">Country/Region<span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              />
              {errors.country && <div className="form-error">{errors.country}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Inquiry Subject<span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
              {errors.subject && <div className="form-error">{errors.subject}</div>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Bottom Image */}
      <div className="contact-bottom" style={{ backgroundImage: `url(${bottomImg})` }} />

      {/* Thank You Overlay Popup (LUÔN ĐẶT Ở NGOÀI CÙNG) */}
      {showThankYou && (
        <div className="thankyou-overlay">
          <div className="thankyou-popup">
            <h2>Thank you!</h2>
            <div>Your message has been submitted.<br />We will contact you soon.</div>
            <button onClick={handleCloseThankYou}>Back to contact page</button>
            <div style={{ fontSize: "0.97rem", color: "#666", marginTop: 8 }}>You’ll be redirected after 10 seconds.</div>
          </div>
        </div>
      )}
    </div>
  );
}


