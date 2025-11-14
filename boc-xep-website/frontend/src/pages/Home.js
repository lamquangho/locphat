import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData, pricingData } from '../data/staticData';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  const services = servicesData;
  const pricing = pricingData;

  return (
    <div className="home">
      <SEO
        title="Trang Chủ"
        description="Dịch vụ bốc xếp chuyên nghiệp tại TPHCM - Chuyển nhà, chuyển văn phòng trọn gói, cho thuê nhân công uy tín. Phục vụ 24/7, giá cả hợp lý, đội ngũ chuyên nghiệp với 5+ năm kinh nghiệm."
        keywords="bốc xếp TPHCM,bốc xếp Bình Dương, bốc xếp, dịch vụ bốc xếp, chuyển nhà trọn gói, chuyển văn phòng, cho thuê nhân công, bốc xếp hàng hóa, vận chuyển hàng hóa, bốc xếp container, bốc xếp kho"
        url="/"
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Giải Pháp Bốc Xếp Hàng Hóa Đáng Tin Cậy Nhất</h1>
          <p className="hero-subtitle">
            Dịch vụ bốc xếp chuyên nghiệp - Chuyển nhà văn phòng trọn gói - Cho thuê nhân công uy tín
          </p>
          <Link to="/contact" className="cta-button">
            Liên hệ ngay <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Năm Kinh Nghiệm</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Khách Hàng Hài Lòng</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Nhân Viên Chuyên Nghiệp</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Hỗ Trợ Liên Tục</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Dịch Vụ Của Chúng Tôi</h2>
          <p className="section-subtitle">
            Quy trình bốc xếp vận chuyển của chúng tôi được xây dựng bài bản,
            đảm bảo an toàn, nhanh chóng và hiệu quả
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <Link
                key={service._id}
                to={`/services#${service._id}`}
                className="service-card"
              >
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">
              Xem tất cả dịch vụ <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Lý Do Chọn Chúng Tôi</h2>
          <p className="section-subtitle">
            Chúng tôi đặt uy tín và chất lượng lên hàng đầu
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Uy Tín & An Toàn</h3>
              <p>Đội ngũ chuyên nghiệp, bảo hiểm toàn diện cho hàng hóa</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Nhanh Chóng</h3>
              <p>Phục vụ 24/7, sẵn sàng triển khai ngay khi nhận yêu cầu</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Giá Cả Hợp Lý</h3>
              <p>Chi phí minh bạch, cạnh tranh nhất thị trường</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <h3>Chất Lượng Cao</h3>
              <p>Nhân viên được đào tạo bài bản, quy trình chuẩn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Bảng Giá Dịch Vụ Bốc Xếp</h2>
          <p className="section-subtitle">
            Giá cả minh bạch tại TPHCM - Tham khảo để lựa chọn dịch vụ phù hợp
          </p>

          {/* Bảng giá theo TẤN */}
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th colSpan="2" className="table-header">BẢNG GIÁ BỐC XẾP THEO TẤN</th>
                </tr>
                <tr className="column-header">
                  <th>Loại hàng hóa</th>
                  <th>Giá (VNĐ/tấn)</th>
                </tr>
              </thead>
              <tbody>
                {pricing.filter(p => p.unit === 'VNĐ/tấn').map((plan) => (
                  <tr key={plan._id}>
                    <td>{plan.name}</td>
                    <td className="price-cell">{plan.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bảng giá theo XE */}
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th colSpan="2" className="table-header">BẢNG GIÁ BỐC XẾP THEO XE</th>
                </tr>
                <tr className="column-header">
                  <th>Loại xe</th>
                  <th>Giá (VNĐ/xe)</th>
                </tr>
              </thead>
              <tbody>
                {pricing.filter(p => p.unit === 'VNĐ/xe').map((plan) => (
                  <tr key={plan._id}>
                    <td>{plan.name}</td>
                    <td className="price-cell">{plan.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bảng giá CONTAINER */}
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th colSpan="2" className="table-header">BẢNG GIÁ BỐC XẾP THEO CONTAINER</th>
                </tr>
                <tr className="column-header">
                  <th>Dịch vụ</th>
                  <th>Giá (VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                {pricing.filter(p => {
                  // Lọc các item CONTAINER: chỉ lấy container, giờ, và người/lần (KHÔNG lấy công nhật)
                  const isContainer = p.unit.includes('container');
                  const isByHour = p.unit.includes('giờ');
                  const isByPersonTime = p.unit.includes('người/lần');
                  const isCongNhat = p.name && p.name.includes('Công nhật');

                  return (isContainer || isByHour || isByPersonTime) && !isCongNhat;
                }).map((plan) => (
                  <tr key={plan._id}>
                    <td>{plan.name}</td>
                    <td className="price-cell">{plan.price} {plan.unit.includes('container') ? '/container' : plan.unit.includes('giờ') ? '/giờ' : plan.unit.includes('người') ? '/người/lần' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bảng giá theo công nhật */}
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th colSpan="2" className="table-header">BẢNG GIÁ BỐC XẾP THEO CÔNG NHẬT</th>
                </tr>
                <tr className="column-header">
                  <th>Loại công nhật</th>
                  <th>Giá (VNĐ/người)</th>
                </tr>
              </thead>
              <tbody>
                {pricing.filter(p => {
                  // Lọc các item công nhật: unit là 'VNĐ/người' và name chứa 'Công nhật'
                  return p.unit === 'VNĐ/người' && p.name && p.name.includes('Công nhật');
                }).map((plan) => (
                  <tr key={plan._id}>
                    <td>{plan.name}</td>
                    <td className="price-cell">{plan.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Lưu ý */}
          <div className="pricing-note">
            <div className="note-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="note-content">
              <h4>Lưu ý:</h4>
              <p>Chi phí sẽ cao hơn nếu các loại hàng hóa có <strong>số lượng lớn</strong>, <strong>khối lượng nặng</strong>, <strong>quá tải trong vận chuyển</strong>, hoặc <strong>di dời xa</strong>.</p>
              <p className="note-highlight">Bảng giá trên chỉ mang tính chất tham khảo. Để được tư vấn và báo giá chính xác, quý khách vui lòng chọn khu vực cần cung cấp dịch vụ, sau đó liên hệ theo Hotline của chúng tôi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Sẵn Sàng Bắt Đầu Dự Án Của Bạn?</h2>
          <p>Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí</p>
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

export default Home;

