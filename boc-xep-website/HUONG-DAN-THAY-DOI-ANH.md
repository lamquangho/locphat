# 📸 Hướng Dẫn Thay Đổi Hình Ảnh

## Phương Pháp 1: Thay đổi trong file seed.js (Đơn giản nhất)

### Bước 1: Mở file seed
```bash
# Mở file: backend/seed.js
```

### Bước 2: Tìm phần IMAGE_CONFIG (dòng ~20)
```javascript
const IMAGE_CONFIG = {
  // Bạn có thể thay đổi domain/path ảnh tại đây
  baseUrl: 'https://images.unsplash.com',
  
  // Ảnh cho các dịch vụ
  services: {
    bocxep: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    laodong: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    chuyennha: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    chuyenvanphong: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
  },
  
  // Ảnh cho các dự án
  projects: {
    warehouse1: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800',
    warehouse2: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800',
    office1: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
    office2: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    factory1: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    moving1: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'
  }
};
```

### Bước 3: Thay đổi URL
Thay thế các URL bằng đường dẫn ảnh của bạn:
```javascript
services: {
  bocxep: 'https://your-domain.com/images/bocxep.jpg',
  laodong: 'https://your-domain.com/images/laodong.jpg',
  // ...
}
```

### Bước 4: Chạy lại seed
```bash
cd backend
npm run seed
```

---

## Phương Pháp 2: Sử dụng ảnh từ máy tính (Local)

### Bước 1: Tạo thư mục images
```bash
mkdir frontend/public/images
```

### Bước 2: Copy ảnh vào thư mục
Đặt các file ảnh vào `frontend/public/images/`:
- bocxep.jpg
- laodong.jpg
- chuyennha.jpg
- chuyenvanphong.jpg
- project1.jpg
- project2.jpg
- ...

### Bước 3: Cập nhật seed.js
```javascript
const IMAGE_CONFIG = {
  services: {
    bocxep: '/images/bocxep.jpg',
    laodong: '/images/laodong.jpg',
    chuyennha: '/images/chuyennha.jpg',
    chuyenvanphong: '/images/chuyenvanphong.jpg'
  },
  
  projects: {
    warehouse1: '/images/project1.jpg',
    warehouse2: '/images/project2.jpg',
    office1: '/images/project3.jpg',
    office2: '/images/project4.jpg',
    factory1: '/images/project5.jpg',
    moving1: '/images/project6.jpg'
  }
};
```

### Bước 4: Chạy lại seed
```bash
cd backend
npm run seed
```

---

## Phương Pháp 3: Upload lên Cloud Storage

### Sử dụng Cloudinary (Miễn phí)

#### Bước 1: Đăng ký tài khoản
- Truy cập: https://cloudinary.com
- Đăng ký tài khoản miễn phí

#### Bước 2: Upload ảnh
- Vào Media Library
- Click "Upload" và chọn ảnh
- Copy URL của mỗi ảnh

#### Bước 3: Cập nhật seed.js
```javascript
const IMAGE_CONFIG = {
  services: {
    bocxep: 'https://res.cloudinary.com/your-cloud/image/upload/v1234/bocxep.jpg',
    laodong: 'https://res.cloudinary.com/your-cloud/image/upload/v1234/laodong.jpg',
    // ...
  }
};
```

### Sử dụng Imgur (Đơn giản hơn)

#### Bước 1: Upload ảnh
- Truy cập: https://imgur.com/upload
- Upload ảnh (không cần đăng ký)

#### Bước 2: Lấy direct link
- Click chuột phải vào ảnh → "Copy image address"

#### Bước 3: Cập nhật seed.js
```javascript
const IMAGE_CONFIG = {
  services: {
    bocxep: 'https://i.imgur.com/xxxxx.jpg',
    // ...
  }
};
```

---

## Nguồn Ảnh Miễn Phí Đề Xuất

### 1. Unsplash (https://unsplash.com)
- Ảnh chất lượng cao
- Miễn phí thương mại
- Không cần credit

**Từ khóa tìm kiếm:**
- "warehouse"
- "logistics"
- "moving boxes"
- "office moving"
- "construction workers"

### 2. Pexels (https://pexels.com)
- Tương tự Unsplash
- Video miễn phí

### 3. Pixabay (https://pixabay.com)
- Ảnh và vector
- Hoàn toàn miễn phí

---

## Tips Chọn Ảnh Tốt

### Kích thước khuyến nghị:
- **Ảnh dịch vụ**: 800x600px (tỷ lệ 4:3)
- **Ảnh dự án**: 1200x800px (tỷ lệ 3:2)
- **Banner hero**: 1920x1080px (tỷ lệ 16:9)

### Chất lượng:
- Độ phân giải tối thiểu: 72 DPI
- Format: JPG (cho ảnh), PNG (cho logo/icon)
- Dung lượng: < 500KB mỗi ảnh

### Nội dung:
- Chọn ảnh liên quan đến dịch vụ
- Tránh ảnh có watermark
- Ưu tiên ảnh có ánh sáng tốt
- Chọn ảnh có màu sắc hài hòa với website (tím/xanh dương)

---

## Tối Ưu Hóa Ảnh

### Sử dụng TinyPNG
1. Truy cập: https://tinypng.com
2. Upload ảnh
3. Download ảnh đã nén (giảm 50-70% dung lượng)

### Sử dụng ImageOptim (Mac)
```bash
brew install imageoptim
imageoptim *.jpg
```

### Sử dụng Sharp (Command line)
```bash
npm install -g sharp-cli
sharp -i input.jpg -o output.jpg -q 80
```

---

## Ví Dụ Thực Tế

### Ví dụ 1: Sử dụng ảnh từ Unsplash
```javascript
const IMAGE_CONFIG = {
  services: {
    bocxep: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    laodong: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
  }
};
```

### Ví dụ 2: Mix local và online
```javascript
const IMAGE_CONFIG = {
  services: {
    bocxep: '/images/local-bocxep.jpg',  // Local
    laodong: 'https://cdn.example.com/laodong.jpg',  // CDN
  }
};
```

### Ví dụ 3: Sử dụng Cloudinary với transformations
```javascript
const IMAGE_CONFIG = {
  services: {
    bocxep: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample.jpg',
  }
};
```

---

## Troubleshooting

### Ảnh không hiển thị?
1. Kiểm tra URL có đúng không
2. Kiểm tra CORS (nếu dùng external URL)
3. Xem console log trong trình duyệt (F12)

### Ảnh tải chậm?
1. Giảm kích thước ảnh
2. Sử dụng CDN
3. Compress ảnh trước khi upload

### Ảnh bị méo?
1. Kiểm tra tỷ lệ khung hình
2. Sử dụng `object-fit: cover` trong CSS (đã có sẵn)

---

## Lưu Ý Quan Trọng

⚠️ **Bản quyền**: Đảm bảo bạn có quyền sử dụng ảnh

⚠️ **Sau khi thay đổi**: Luôn chạy lại `npm run seed` để cập nhật database

⚠️ **Backup**: Lưu file seed.js gốc trước khi thay đổi

✅ **Khuyến nghị**: Sử dụng Unsplash hoặc Pexels cho ảnh chất lượng cao miễn phí

---

Nếu có thắc mắc, hãy tham khảo README.md chính hoặc kiểm tra console log!

