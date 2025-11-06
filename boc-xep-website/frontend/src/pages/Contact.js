import React from 'react';
import './Contact.css';

const Contact = () => {
  // Thay đổi các link này theo ý bạn
  const ZALO_LINK = 'https://zalo.me/0921172210'; // Thay bằng link Zalo của bạn
  const FACEBOOK_GROUP = 'https://www.facebook.com/share/14TmkZ2ZGAe'; // Thay bằng link Facebook Group

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 qua Zalo và Facebook</p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="section quick-contact-section">
        <div className="container">
          <h2 className="section-title">Liên Hệ Nhanh Ngay Bây Giờ</h2>
          <p className="section-subtitle">
            Chọn kênh liên lạc thuận tiện nhất cho bạn
          </p>

          <div className="contact-methods">
            {/* Zalo Contact */}
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card zalo"
            >
              <div className="method-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Chat Zalo Ngay</h3>
              <p>Nhận tư vấn miễn phí qua Zalo</p>
              <div className="method-button">
                <span>Nhắn tin ngay</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            {/* Facebook Group */}
            <a
              href={FACEBOOK_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card facebook"
            >
              <div className="method-icon">
                <i className="fab fa-facebook-messenger"></i>
              </div>
              <h3>Nhóm Facebook</h3>
              <p>Tham gia nhóm để cập nhật tin tức</p>
              <div className="method-button">
                <span>Tham gia ngay</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            {/* Phone Number - Display as plain text */}
            <div className="contact-method-card phone">
              <div className="method-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Gọi Điện Thoại</h3>
              <p>Tư vấn miễn phí 24/7</p>
              <div className="phone-number-box">
                <span className="phone-number-text">0773800431</span>
                <span className="phone-divider-text">hoặc</span>
                <span className="phone-number-text">0921172210</span>
              </div>
              <p className="phone-note">
                {/* <i className="fas fa-info-circle"></i> Vui lòng gõ số để gọi */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      {/* <section className="section social-media-section">
        <div className="container">
          <h2 className="section-title">Kết Nối Với Chúng Tôi</h2>
          <p className="section-subtitle">Theo dõi để cập nhật tin tức và ưu đãi mới nhất</p>

          <div className="social-buttons">
            <a
              href="https://www.facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn facebook-btn"
            >
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn zalo-btn"
            >
              <i className="fas fa-comments"></i>
              <span>Zalo</span>
            </a>
            <a
              href="https://www.youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn youtube-btn"
            >
              <i className="fab fa-youtube"></i>
              <span>Youtube</span>
            </a>
            <a
              href="https://www.instagram.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram-btn"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      {/* <section className="map-section">
        <div className="container">
          <h2>Vị Trí Của Chúng Tôi</h2>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4545897327653!2d106.7675045!3d10.8509682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzAzLjUiTiAxMDbCsDQ2JzAzLjAiRQ!5e0!3m2!1svi!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Bản đồ vị trí"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;

