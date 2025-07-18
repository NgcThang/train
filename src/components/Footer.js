import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      textAlign: 'center',
      background: '#f5f5f5',
      marginTop: '2rem'
    }}>
      <p>© {new Date().getFullYear()} Indoweb. All rights reserved.</p>
    </footer>
  );
}



