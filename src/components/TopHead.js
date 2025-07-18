import React, { useEffect, useState } from 'react';
import '../styles/components/tophead.css';

const messages = [
  'Công ty may mặc uy tín với nhiều năm kinh nghiệm',
  'Chất lượng được đặt lên hàng đầu'
];

export default function TopHead() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 4000); // đổi text mỗi 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tophead">
        <div className="container">
            <div className="marquee">
                <span key={index} className="message">
                {messages[index]}
                </span>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61578135510961" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/icons/facebookicon.jpg')} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/icons/linkedinicon.jpg')} alt="LinkedIn" />
                </a>
                <a href="https://zalo.me/pc" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/icons/zaloicon.jpg')} alt="Zalo" />
                </a>
            </div>
        </div>
    </div>
  );
}



