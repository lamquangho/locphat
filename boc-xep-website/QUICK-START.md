# ⚡ Quick Start Guide

Hướng dẫn khởi động nhanh trong 5 phút!

## 📋 Checklist

- [ ] Node.js đã cài (v14+)
- [ ] MongoDB đã cài hoặc có MongoDB Atlas account
- [ ] Terminal/Command Prompt

## 🚀 3 Bước Để Chạy

### Bước 1: Cài đặt dependencies

```bash
# Cài tất cả dependencies một lần
npm run install-all
```

Hoặc cài riêng:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Bước 2: Cấu hình MongoDB

**Option A: MongoDB Local**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo service mongod start
```

**Option B: MongoDB Atlas (Cloud - Miễn phí)**
1. Tạo account tại https://mongodb.com/atlas
2. Tạo cluster miễn phí
3. Lấy connection string
4. Tạo file `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bocxep
NODE_ENV=development
```

**Option C: Sử dụng mặc định (Local)**
```bash
# Tạo file backend/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bocxep
NODE_ENV=development
```

### Bước 3: Seed data và chạy

```bash
# Seed database (tạo dữ liệu mẫu)
npm run seed

# Chạy cả frontend và backend cùng lúc
npm run dev
```

Hoặc chạy riêng:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm start
```

## ✅ Kiểm tra

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## 🎨 Thay đổi ảnh (Tùy chọn)

1. Mở `backend/seed.js`
2. Tìm `IMAGE_CONFIG` (dòng ~20)
3. Thay URL ảnh theo ý muốn
4. Chạy lại: `npm run seed`

Chi tiết xem file: `HUONG-DAN-THAY-DOI-ANH.md`

## 🐛 Troubleshooting

### Backend không chạy?
```bash
# Kiểm tra MongoDB
mongod --version

# Kiểm tra port 5000
# Windows: netstat -ano | findstr :5000
# Mac/Linux: lsof -i :5000
```

### Frontend không kết nối backend?
- Kiểm tra backend đã chạy chưa (http://localhost:5000)
- Xem console trong browser (F12)
- Kiểm tra file `frontend/package.json` có `"proxy": "http://localhost:5000"`

### Lỗi "Cannot connect to MongoDB"?
```bash
# Kiểm tra MongoDB đang chạy
# Windows
net start MongoDB

# Mac
brew services list

# Linux
sudo systemctl status mongod
```

### Port 3000 hoặc 5000 đã được dùng?
```bash
# Thay đổi port trong file .env
# Backend: PORT=5001
# Frontend: tạo file frontend/.env với PORT=3001
```

## 📁 Cấu trúc nhanh

```
boc-xep-website/
├── backend/          # Node.js + Express API
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   ├── seed.js      # ⭐ THAY ĐỔI ẢNH TẠI ĐÂY
│   └── server.js    # Entry point
│
└── frontend/        # React app
    ├── src/
    │   ├── components/  # Header, Footer
    │   ├── pages/       # Home, Services, Projects, Contact
    │   └── services/    # API calls
    └── public/
```

## 🎯 Các tính năng chính

✅ Trang chủ với hero banner và thống kê
✅ Trang dịch vụ với hình ảnh
✅ Trang dự án với filter
✅ Form liên hệ hoạt động
✅ Responsive mobile
✅ Admin API để quản lý

## 📚 Đọc thêm

- Chi tiết đầy đủ: `README.md`
- Hướng dẫn thay ảnh: `HUONG-DAN-THAY-DOI-ANH.md`
- API docs: Xem `README.md` phần API Endpoints

## 🎉 Hoàn thành!

Website đã sẵn sàng tại: **http://localhost:3000**

Chúc bạn thành công! 🚀

