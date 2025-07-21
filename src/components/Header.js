import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.jpg';
import '../styles/components/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Hàm dùng đóng menu khi click Link (chỉ áp dụng cho mobile)
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={handleMenuClose}>
          <img src={logo} alt="Company Logo" className="site-logo" />
        </Link>

        {/* Hamburger cho mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleMenuClose}>Trang chủ</Link>
            </li>
            <li className="menu-item">
              <span>Sản phẩm</span>
              <ul className="submenu">
                <li><Link to="/products/tshirt" onClick={handleMenuClose}>Áo thun</Link></li>
                <li><Link to="/products/activewear" onClick={handleMenuClose}>Áo thể thao</Link></li>
                <li><Link to="/products/poloshirt" onClick={handleMenuClose}>Áo polo</Link></li>
                <li><Link to="/products/jacket" onClick={handleMenuClose}>Áo khoác</Link></li>
                <li><Link to="/products/jeans" onClick={handleMenuClose}>Quần jeans</Link></li>
                <li><Link to="/products/workpants" onClick={handleMenuClose}>Quần công sở</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/about" onClick={handleMenuClose}>Về chúng tôi</Link>
            </li>
            <li>
              <Link to="/news" onClick={handleMenuClose}>Tin tức</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleMenuClose}>Liên hệ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}



