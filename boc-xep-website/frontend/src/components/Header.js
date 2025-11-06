import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // Thay đổi link logo của bạn ở đây
  const LOGO_URL = 'https://res.cloudinary.com/dx8ffnhq3/image/upload/v1762359529/Gemini_Generated_Image_o99wefo99wefo99w_aua585.png'; // Thay bằng link logo của bạn

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span><i className="fas fa-phone"></i> 0773800431 hoặc 0921172210</span>
            {/* <span><i className="fas fa-envelope"></i> info@bocxepnhanh24h.com</span> */}
          </div>
          <div className="top-bar-right">
            <span><i className="fas fa-clock"></i> Phục vụ 24/7</span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src={LOGO_URL} alt="Lộc Phát Logo" />
            </div>
            <span className="logo-text">LỘC PHÁT</span>
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={isActive('/services') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dịch vụ
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={isActive('/projects') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dự án
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive('/contact') ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

