import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Bỏ qua lỗi zaloJSV2
    if (error && error.message && error.message.includes('zaloJSV2')) {
      return { hasError: false };
    }
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Bỏ qua lỗi zaloJSV2
    if (error && error.message && error.message.includes('zaloJSV2')) {
      console.warn('Zalo SDK error caught and ignored:', error);
      return;
    }
    
    // Log lỗi thật sự
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Có thể hiển thị UI lỗi tùy chỉnh ở đây
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          color: '#666'
        }}>
          <h2>Đã xảy ra lỗi</h2>
          <p>Vui lòng tải lại trang hoặc liên hệ hỗ trợ.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              marginTop: '10px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Tải lại trang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

