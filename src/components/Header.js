import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.jpg';
import '../styles/components/header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Company Logo" className="site-logo" />
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li className="menu-item">
              <Link to="/products">Sản phẩm</Link>
              <ul className="submenu">
                <li><Link to="/products/tshirt">Áo thun</Link></li>
                <li><Link to="/products/activewear">Áo thể thao</Link></li>
                <li><Link to="/products/poloshirt">Áo polo</Link></li>
                <li><Link to="/products/jacket">Áo khoác</Link></li>
                <li><Link to="/products/jeans">Quần jeans</Link></li>
                <li><Link to="/products/workpants">Quần công sở</Link></li>
              </ul>
            </li>
            <li><Link to="/about">Về chúng tôi</Link></li>
            <li><Link to="/news">Tin tức</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


