import React, { useState } from 'react';
import '../styles/pages/news.css';

export default function NewsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    content: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Google Apps Script endpoint cho News
  const NEWS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOJRg5RJrg5IkX03NEw9Gts4A-pP1tduzHs8fXBL1AlGDtfyirBD1mPhIaJBSKk9Nv/exec';

  const validate = () => {
    let err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!form.email.trim()) err.email = "Please enter your email.";
    if (!form.title.trim()) err.title = "Please enter the news title.";
    if (!form.content.trim()) err.content = "Please enter the news content.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const response = await fetch(NEWS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (result.result === "success") {
        setShowThankYou(true);
        setForm({ name: '', email: '', title: '', content: '' });
        setTimeout(() => setShowThankYou(false), 7000);
      } else {
        alert("There was an error. Please try again.");
      }
    } catch {
      alert("There was an error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="news-page-container">
      <h1 className="news-title">Submit Your News</h1>
      <form className="news-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="news-form-group">
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            disabled={loading}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="news-form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            disabled={loading}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        <div className="news-form-group">
          <label>News Title*</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            disabled={loading}
          />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>
        <div className="news-form-group">
          <label>News Content*</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Type your news here..."
            rows={6}
            disabled={loading}
          />
          {errors.content && <span className="form-error">{errors.content}</span>}
        </div>
        <button type="submit" className="news-submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit News"}
        </button>
      </form>

      {showThankYou && (
        <div className="news-thankyou-overlay">
          <div className="news-thankyou-popup">
            <h2>Thank you!</h2>
            <p>Your news has been submitted successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}



