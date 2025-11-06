# Website Dịch Vụ Bốc Xếp Nhanh 24h

Website đầy đủ với React Frontend và Node.js Backend cho dịch vụ bốc xếp hàng hóa.

## 🚀 Tính Năng

### Frontend (React)
- ✨ Giao diện hiện đại, responsive
- 🎨 Thiết kế đẹp mắt với gradient và animations
- 📱 Tương thích mọi thiết bị
- 🔄 Routing với React Router
- 📡 Tích hợp API với Axios

### Backend (Node.js + Express)
- 🔌 RESTful API
- 💾 MongoDB Database
- 📝 CRUD operations đầy đủ
- 🔐 CORS enabled
- 🌱 Seed data với đường dẫn ảnh dễ thay đổi

## 📋 Yêu Cầu Hệ Thống

- Node.js (v14 trở lên)
- MongoDB (local hoặc MongoDB Atlas)
- npm hoặc yarn

## 📦 Cài Đặt

### 1. Clone Repository

```bash
cd boc-xep-website
```

### 2. Cài Đặt Backend

```bash
cd backend
npm install
```

Tạo file `.env` trong thư mục backend:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bocxep
NODE_ENV=development
```

### 3. Cài Đặt Frontend

```bash
cd ../frontend
npm install
```

## 🌱 Seed Database

**QUAN TRỌNG**: Trước khi chạy seed, bạn có thể thay đổi đường dẫn ảnh tại file `backend/seed.js`

Mở file `backend/seed.js` và tìm phần `IMAGE_CONFIG`:

```javascript
const IMAGE_CONFIG = {
  // Bạn có thể thay đổi domain/path ảnh tại đây
  baseUrl: 'https://images.unsplash.com',
  
  // Ảnh cho các dịch vụ
  services: {
    bocxep: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    laodong: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    // ... thay đổi URL tại đây
  },
  
  // Ảnh cho các dự án
  projects: {
    warehouse1: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800',
    // ... thay đổi URL tại đây
  }
};
```

Sau khi chỉnh sửa, chạy lệnh seed:

```bash
cd backend
npm run seed
```

## 🚀 Chạy Ứng Dụng

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend sẽ chạy tại: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
Frontend sẽ chạy tại: http://localhost:3000

### Production Build

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Chạy Backend:**
```bash
cd backend
npm start
```

## 📁 Cấu Trúc Thư Mục

```
boc-xep-website/
├── backend/
│   ├── config/
│   │   └── db.js                 # Cấu hình MongoDB
│   ├── models/
│   │   ├── Service.js            # Model Dịch vụ
│   │   ├── Pricing.js            # Model Bảng giá
│   │   ├── Project.js            # Model Dự án
│   │   └── Contact.js            # Model Liên hệ
│   ├── routes/
│   │   ├── services.js           # API routes Dịch vụ
│   │   ├── pricing.js            # API routes Bảng giá
│   │   ├── projects.js           # API routes Dự án
│   │   └── contacts.js           # API routes Liên hệ
│   ├── seed.js                   # File seed data (THAY ĐỔI ẢNH TẠI ĐÂY)
│   ├── server.js                 # Entry point
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Header.js         # Component Header
    │   │   ├── Header.css
    │   │   ├── Footer.js         # Component Footer
    │   │   └── Footer.css
    │   ├── pages/
    │   │   ├── Home.js           # Trang chủ
    │   │   ├── Home.css
    │   │   ├── Services.js       # Trang dịch vụ
    │   │   ├── Services.css
    │   │   ├── Projects.js       # Trang dự án
    │   │   ├── Projects.css
    │   │   ├── Contact.js        # Trang liên hệ
    │   │   └── Contact.css
    │   ├── services/
    │   │   └── api.js            # API service
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## 🔌 API Endpoints

### Services (Dịch vụ)
- `GET /api/services` - Lấy tất cả dịch vụ
- `GET /api/services/:id` - Lấy dịch vụ theo ID
- `POST /api/services` - Tạo dịch vụ mới

### Pricing (Bảng giá)
- `GET /api/pricing` - Lấy tất cả gói giá
- `GET /api/pricing/:id` - Lấy gói giá theo ID
- `POST /api/pricing` - Tạo gói giá mới

### Projects (Dự án)
- `GET /api/projects` - Lấy tất cả dự án
- `GET /api/projects/:id` - Lấy dự án theo ID
- `POST /api/projects` - Tạo dự án mới

### Contacts (Liên hệ)
- `GET /api/contacts` - Lấy tất cả liên hệ
- `GET /api/contacts/:id` - Lấy liên hệ theo ID
- `POST /api/contacts` - Tạo yêu cầu liên hệ mới
- `PATCH /api/contacts/:id` - Cập nhật trạng thái liên hệ

## 🎨 Thay Đổi Hình Ảnh

### Cách 1: Thay đổi trong file seed.js (Khuyến nghị)

1. Mở file `backend/seed.js`
2. Tìm đến object `IMAGE_CONFIG` (dòng ~20)
3. Thay đổi các URL trong object `services` và `projects`
4. Chạy lại `npm run seed`

### Cách 2: Sử dụng ảnh local

1. Tạo thư mục `frontend/public/images`
2. Đặt ảnh vào thư mục này
3. Trong `seed.js`, thay đổi URL thành:
```javascript
services: {
  bocxep: '/images/bocxep.jpg',
  laodong: '/images/laodong.jpg',
  // ...
}
```

### Cách 3: Upload lên CDN/Cloud Storage

1. Upload ảnh lên Cloudinary, AWS S3, hoặc dịch vụ tương tự
2. Lấy URL public
3. Cập nhật trong `seed.js`

## 🔧 Cấu Hình Nâng Cao

### Thay đổi Port

**Backend** - Sửa file `.env`:
```env
PORT=5001
```

**Frontend** - Tạo file `.env` trong thư mục frontend:
```env
PORT=3001
REACT_APP_API_URL=http://localhost:5001/api
```

### Kết nối MongoDB Atlas

1. Tạo cluster trên MongoDB Atlas
2. Lấy connection string
3. Cập nhật file `.env`:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bocxep
```

## 📝 Script Commands

### Backend
```bash
npm start          # Chạy production
npm run dev        # Chạy development với nodemon
npm run seed       # Seed database
```

### Frontend
```bash
npm start          # Chạy development server
npm run build      # Build production
npm test           # Chạy tests
```

## 🎯 Tính Năng Chính

### 1. Trang Chủ
- Hero banner với call-to-action
- Thống kê ấn tượng
- Dịch vụ nổi bật
- Lý do chọn công ty
- Bảng giá
- Call-to-action section

### 2. Trang Dịch Vụ
- Danh sách chi tiết các dịch vụ
- Hình ảnh minh họa
- Tính năng của từng dịch vụ
- Quy trình làm việc
- Form yêu cầu báo giá

### 3. Trang Dự Án
- Filter theo loại dự án
- Grid layout responsive
- Thông tin chi tiết dự án
- Thống kê dự án

### 4. Trang Liên Hệ
- Form liên hệ với validation
- Thông tin liên hệ đầy đủ
- Social media links
- Google Maps tích hợp

## 🐛 Troubleshooting

### Lỗi kết nối MongoDB
```bash
# Kiểm tra MongoDB đang chạy
# Windows:
net start MongoDB

# Mac/Linux:
sudo service mongod start
```

### Lỗi CORS
- Đảm bảo backend đang chạy trên port 5000
- Kiểm tra file `backend/server.js` có `app.use(cors())`

### Frontend không gọi được API
- Kiểm tra `proxy` trong `frontend/package.json`
- Đảm bảo backend đang chạy
- Xem console log để debug

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👨‍💻 Hỗ Trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra log trong terminal
2. Đảm bảo MongoDB đang chạy
3. Kiểm tra các biến môi trường trong file `.env`

## 🎉 Hoàn Thành!

Website của bạn giờ đã sẵn sàng! Truy cập http://localhost:3000 để xem.

Chúc bạn thành công! 🚀

