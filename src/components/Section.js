import React from 'react';
import '../styles/components/section.css'; // styles/components/section.css

export default function Section({ id, children }) {
  return (
    <section id={id} className="section" data-aos="fade-up">
      {children}
    </section>
  );
}
