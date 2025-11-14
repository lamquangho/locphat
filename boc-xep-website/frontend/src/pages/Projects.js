import React, { useState } from 'react';
import { projectsData } from '../data/staticData';
import SEO from '../components/SEO';
import './Projects.css';

const Projects = () => {
  const projects = projectsData;
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <SEO
        title="Dự Án Đã Thực Hiện"
        description="Xem các dự án bốc xếp, chuyển kho, chuyển nhà đã hoàn thành của chúng tôi tại TPHCM và các tỉnh lân cận. 100% khách hàng hài lòng với chất lượng dịch vụ."
        keywords="dự án bốc xếp, dự án chuyển kho, dự án chuyển nhà, bốc xếp container, bốc xếp kho hàng, dự án đã hoàn thành"
        url="/projects"
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Dự Án Đã Thực Hiện</h1>
          <p>Những dự án tiêu biểu đã hoàn thành với chất lượng xuất sắc</p>
        </div>
      </section>

      {/* Filter */}
      <section className="section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'Tất cả' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project._id} className="project-card">
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <div className="meta-item">
                      <i className="fas fa-user"></i>
                      <span>{project.client}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{project.location}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-calendar"></i>
                      <span>{new Date(project.completedDate + 'T00:00:00').toLocaleDateString('vi-VN')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-results">
              <i className="fas fa-folder-open"></i>
              <p>Không tìm thấy dự án nào</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{projects.length}+</div>
              <div className="stat-label">Dự Án Hoàn Thành</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Khách Hàng Hài Lòng</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Năm Kinh Nghiệm</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Hỗ Trợ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

