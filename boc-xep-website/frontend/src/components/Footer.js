import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Về Chúng Tôi</h3>
            <p>
              Bốc Xếp Nhanh 24h là công ty uy tín hàng đầu trong lĩnh vực
              bốc xếp, chuyển nhà văn phòng và cho thuê nhân công tại TP.HCM.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-comments"></i>
              </a>
              {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a> */}
            </div>
          </div>

          <div className="footer-section">
            <h3>Dịch Vụ</h3>
            <ul>
              <li><Link to="/services">Dịch vụ bốc xếp</Link></li>
              <li><Link to="/services">Cho thuê lao động</Link></li>
              <li><Link to="/services">Dịch vụ chuyển nhà</Link></li>
              <li><Link to="/services">Dịch vụ chuyển văn phòng</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Khu Vực Dịch Vụ</h3>
            <ul>
              <li><a href="#!">TP. Hồ Chí Minh</a></li>
              <li><a href="#!">Bình Dương</a></li>
              <li><a href="#!">Long An</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Liên Hệ</h3>
            <ul className="contact-list">
              {/* <li>
                <i className="fas fa-map-marker-alt"></i>
                32 Đường Tăng Nhơn Phú, Phước Long B, Tp Thủ Đức
              </li> */}
              <li>
                <i className="fas fa-phone"></i>
                0773800431 hoặc 0921172210
              </li>
              {/* <li>
                <i className="fas fa-envelope"></i>
                info@bocxepnhanh24h.com
              </li> */}
              <li>
                <i className="fas fa-clock"></i>
                24/7 - Cả tuần
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Bốc Xếp Nhanh 24h. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

