import React, { useState } from "react";
import "../styles/pages/contact.css";
import heroImg from "../assets/images/contact-hero.jpg";
import bottomImg from "../assets/images/contact-bottom.jpg";

const YOUR_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwn4cIHusCrzDzHzF3rhz4jjZLED7z2XaGbTNQwu1sYKCmgU_-daYacwKrOs_nQSx52wA/exec";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Đang gửi...");
    if (!form.email || !form.country || !form.subject) {
      setStatus("Vui lòng điền đủ các trường bắt buộc.");
      return;
    }
    try {
      await fetch(YOUR_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("Đã gửi thành công!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus("Có lỗi, vui lòng thử lại!");
    }
  };

  return (
    <div className="contact-wrapper">
      {/* Hero Banner */}
      <div className="contact-hero" style={{ backgroundImage: `url(${heroImg})` }} />

      {/* Content Section */}
      <section className="contact-content">
        {/* Left Intro Text */}
        <div className="contact-info">
          {/* ... giữ nguyên phần giới thiệu ... */}
        </div>
        {/* Right Form */}
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          {/* ... input fields giữ nguyên, chỉ đổi value & onChange ... */}
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email*</label>
              <input name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Country/Region*</label>
              <input name="country" value={form.country} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Inquiry Subject*</label>
              <input name="subject" value={form.subject} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group full-width">
            <label>Message</label>
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
          {status && <div className="form-status">{status}</div>}
        </form>
      </section>
      {/* Bottom Image */}
      <div className="contact-bottom" style={{ backgroundImage: `url(${bottomImg})` }} />
    </div>
  );
}



