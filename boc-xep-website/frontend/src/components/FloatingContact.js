import React, { useState } from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Thay đổi các link này theo ý bạn
  const ZALO_LINK = 'https://zalo.me/0921172210';
  const FACEBOOK_LINK = 'https://www.facebook.com/share/14TmkZ2ZGAe';

  return (
    <div className="floating-contact">
      {/* Main Toggle Button */}
      <button
        className={`floating-toggle ${isExpanded ? 'active' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Toggle Contact Menu"
      >
        <i className={`fas ${isExpanded ? 'fa-times' : 'fa-comments'}`}></i>
      </button>

      {/* Contact Buttons */}
      <div className={`floating-buttons ${isExpanded ? 'show' : ''}`}>
        {/* Zalo Button */}
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn zalo-btn"
          aria-label="Chat Zalo"
        >
          <div className="btn-icon">
            <i className="fas fa-comments"></i>
          </div>
          <span className="btn-label">Zalo</span>
        </a>

        {/* Facebook Button */}
        <a
          href={FACEBOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn facebook-btn"
          aria-label="Facebook Messenger"
        >
          <div className="btn-icon">
            <i className="fab fa-facebook-messenger"></i>
          </div>
          <span className="btn-label">Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;

