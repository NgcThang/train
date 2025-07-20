import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/footer.css'
import logo from '../assets/icons/logo.jpg'
import allCertsImg from '../assets/icons/all-certifications.jpg'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Logo + Contact */}
        <div className="footer-col about-col">
          <img src={logo} alt="InDong EPIC" className="footer-logo" />
          <h3 className="footer-company">InDong EPIC</h3>
          <p className="footer-slogan">
            Hãy cùng chúng tôi khám phá quy trình sản xuất và những sản phẩm may mặc xuất khẩu chất lượng cao.
          </p>
          <div className="footer-contact">
            <p>📍 Cụm CN Đồng Sóc, Vĩnh Tường, Vietnam</p>
            <p>📞 <a href="tel:0901758833">090 175 88 33</a></p>
            <p>✉️ <a href="mailto:lienhe@indongepic.vn">lienhe@indongepic.vn</a></p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61578135510961" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://zalo.me/pc" target="_blank" rel="noopener noreferrer">Zalo</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* About */}
        <div className="footer-col links-col">
          <h4>About InDong</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/capabilities">Capabilities</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col links-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/activewear">Activewear Manufacturing</Link></li>
            <li><Link to="/services/underwear">Underwear Manufacturing</Link></li>
            <li><Link to="/services/fashionwear">Fashionwear Manufacturing</Link></li>
            <li><Link to="/services/kidswear">Kidswear Manufacturing</Link></li>
            <li><Link to="/services/workwear">Workwear Manufacturing</Link></li>
          </ul>
        </div>

        {/* News */}
        <div className="footer-col links-col">
          <h4>News</h4>
          <ul>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="footer-col cert-col">
          <h4>Certifications</h4>
          <div className="footer-certs">
            <img src={allCertsImg} alt="All Certifications" />
          </div>
        </div>
      </div>
    </footer>
  )
}



