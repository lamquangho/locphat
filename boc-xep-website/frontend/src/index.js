import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Global error handler để bắt lỗi zaloJSV2 và các lỗi khác từ extension/third-party scripts
window.addEventListener('error', (event) => {
  // Bỏ qua lỗi zaloJSV2 (thường đến từ extension hoặc third-party scripts)
  if (event.message && event.message.includes('zaloJSV2')) {
    event.preventDefault();
    console.warn('Zalo SDK error suppressed (likely from browser extension)');
    return false;
  }
  // Bỏ qua lỗi từ các script bên ngoài khác
  if (event.filename && !event.filename.includes(window.location.origin)) {
    event.preventDefault();
    return false;
  }
});

// Bắt lỗi unhandled promise rejection
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('zaloJSV2')) {
    event.preventDefault();
    console.warn('Zalo SDK promise rejection suppressed');
    return false;
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

