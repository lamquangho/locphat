import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getServices } from '../services/api';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
        setLoading(false);

        // Scroll to service if hash exists in URL
        if (location.hash) {
          setTimeout(() => {
            // Get ID from hash (remove #)
            const id = location.hash.substring(1);
            // Use getElementById instead of querySelector (works with IDs starting with numbers)
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // Add highlight effect
              element.style.backgroundColor = '#f0f4ff';
              element.style.transition = 'background-color 2s';
              setTimeout(() => {
                element.style.backgroundColor = '';
              }, 2000);
            }
          }, 100);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, [location.hash]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Dịch Vụ Của Chúng Tôi</h1>
          <p>Giải pháp toàn diện cho mọi nhu cầu bốc xếp và vận chuyển</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service._id}
              id={service._id}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="service-image">
                <img src={service.imageUrl} alt={service.title} />
              </div>
              <div className="service-content">
                <div className="service-icon-large">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Yêu cầu báo giá <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Quy Trình Làm Việc</h2>
          <p className="section-subtitle">
            6 bước đơn giản để hoàn thành công việc một cách chuyên nghiệp
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Nhận Thông Tin</h3>
              <p>Tiếp nhận và tư vấn miễn phí</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Khảo Sát</h3>
              <p>Đánh giá và báo giá chi tiết</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ký Hợp Đồng</h3>
              <p>Thỏa thuận và cam kết</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Triển Khai</h3>
              <p>Thực hiện công việc</p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Nghiệm Thu</h3>
              <p>Kiểm tra và thanh toán</p>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Hoàn Thành</h3>
              <p>Xuất hóa đơn và kết thúc</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Cần Tư Vấn Về Dịch Vụ?</h2>
          <p>Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">
              <i className="fas fa-envelope"></i> Liên hệ ngay
            </Link>
            <a href="tel:0939779123" className="btn btn-outline">
              <i className="fas fa-phone"></i> 0939 779 123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

