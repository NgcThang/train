import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/footer.css'
import logo from '../assets/icons/logo.jpg'

export default function Footer() {
  const scrollToTop = () => window.scrollTo(0, 0)

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

        {/* About InDong */}
        <div className="footer-col links-col about-links">
          <h4>About InDong</h4>
          <ul>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/capabilities" onClick={scrollToTop}>Capabilities</Link></li>
            <li><Link to="/sustainability" onClick={scrollToTop}>Sustainability</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
            <li><Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-col links-col products-links">
          <h4>Products</h4>
          <ul>
            <li><Link to="/products/tshirt" onClick={scrollToTop}>Áo thun</Link></li>
            <li><Link to="/products/activewear" onClick={scrollToTop}>Áo thể thao</Link></li>
            <li><Link to="/products/poloshirt" onClick={scrollToTop}>Áo polo</Link></li>
            <li><Link to="/products/jacket" onClick={scrollToTop}>Áo khoác</Link></li>
            <li><Link to="/products/jeans" onClick={scrollToTop}>Quần jeans</Link></li>
            <li><Link to="/products/workpants" onClick={scrollToTop}>Quần công sở</Link></li>
          </ul>
        </div>

        {/* News */}
        <div className="footer-col links-col news-col">
          <h4>News</h4>
          <ul>
            <li><Link to="/news" onClick={scrollToTop}>News</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}


