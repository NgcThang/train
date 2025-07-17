import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css'; // Đặt ở styles/components/header.css

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li className="menu-item">
            <Link to="/products">Sản phẩm</Link>
            <ul className="submenu">
              <li><Link to="/products/activewear">Activewear</Link></li>
              <li><Link to="/products/casualwear">Casualwear</Link></li>
              <li><Link to="/products/kidswear">Kidswear</Link></li>
            </ul>
          </li>
          <li><Link to="/about">Về chúng tôi</Link></li>
          <li><Link to="/news">Tin tức</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
        </ul>
      </nav>
    </header>
  );
}
