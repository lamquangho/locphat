# Hướng Dẫn Sử Dụng Ngrok (Giải Pháp Thay Thế Localtunnel)

## Tại Sao Nên Dùng Ngrok?

- ✅ Ít bị lỗi firewall hơn localtunnel
- ✅ Ổn định hơn, ít bị disconnect
- ✅ Có web interface để debug requests
- ✅ Miễn phí với giới hạn hợp lý

## Cài Đặt

### Cách 1: Tải Trực Tiếp (Khuyến nghị)

1. Truy cập: https://ngrok.com/download
2. Tải file `.zip` cho Windows
3. Giải nén và đặt vào thư mục (ví dụ: `C:\ngrok`)
4. Thêm đường dẫn vào PATH environment variable

### Cách 2: Cài Qua NPM

```bash
npm install -g ngrok
```

### Cách 3: Cài Qua Chocolatey

```bash
choco install ngrok
```

### Cách 4: Cài Qua Winget (Windows 11)

```bash
winget install ngrok
```

## Đăng Ký và Cấu Hình

1. Đăng ký tài khoản miễn phí tại: https://dashboard.ngrok.com/signup
2. Đăng nhập và vào phần "Your Authtoken"
3. Copy authtoken của bạn
4. Chạy lệnh sau để cấu hình:

```bash
ngrok config add-authtoken YOUR_AUTHTOKEN_HERE
```

## Sử Dụng

### Bước 1: Khởi Động Backend

```bash
cd boc-xep-website/backend
npm start
```

Backend sẽ chạy trên `http://localhost:5000`

### Bước 2: Tạo Tunnel cho Backend

Mở terminal mới và chạy:

```bash
ngrok http 5000
```

Bạn sẽ thấy output như sau:
```
Forwarding   https://abc123.ngrok-free.app -> http://localhost:5000
```

Copy URL `https://abc123.ngrok-free.app` (đây là URL tunnel backend)

**Lưu ý:** Ngrok cũng cung cấp web interface tại: `http://localhost:4040` để xem tất cả requests

### Bước 3: Cấu Hình Frontend

Tạo file `.env` trong thư mục `frontend` (nếu chưa có) và thêm:

```env
REACT_APP_API_URL=https://abc123.ngrok-free.app/api
```

**Lưu ý:** Thay `abc123.ngrok-free.app` bằng URL tunnel backend bạn nhận được ở Bước 2.

### Bước 4: Tạo Tunnel cho Frontend

Mở terminal mới và chạy:

```bash
ngrok http 3000
```

Bạn sẽ nhận được URL như: `https://xyz789.ngrok-free.app`

### Bước 5: Khởi Động Frontend

Mở terminal mới và chạy:

```bash
cd boc-xep-website/frontend
npm start
```

Frontend sẽ chạy trên `http://localhost:3000`

### Bước 6: Truy Cập Trang Web

Truy cập qua URL tunnel frontend: `https://xyz789.ngrok-free.app`

## Cấu Hình CORS (Đã được cập nhật)

Backend đã được cấu hình để hỗ trợ ngrok domains. Kiểm tra file `backend/server.js` đã có:

```javascript
origin: [
  'http://localhost:3000',
  /\.loca\.lt$/,
  /\.ngrok-free\.app$/,  // Ngrok free tier
  /\.ngrok\.io$/         // Ngrok paid tier
]
```

## Sử Dụng Với Custom Domain (Tùy chọn)

Nếu bạn có tài khoản ngrok trả phí, có thể dùng custom domain:

```bash
ngrok http 5000 --domain=your-custom-domain.ngrok.io
```

## Scripts Hữu Ích

### Thêm vào package.json

**Backend/package.json:**
```json
{
  "scripts": {
    "start": "node server.js",
    "tunnel": "ngrok http 5000"
  }
}
```

**Frontend/package.json:**
```json
{
  "scripts": {
    "start": "react-scripts start",
    "tunnel": "ngrok http 3000"
  }
}
```

## Troubleshooting

### 1. Lỗi "authtoken not found"
- Đảm bảo đã chạy `ngrok config add-authtoken YOUR_TOKEN`
- Kiểm tra file config: `%APPDATA%\ngrok\ngrok.yml` (Windows)

### 2. URL thay đổi mỗi lần chạy
- Đây là bình thường với bản miễn phí
- Nếu muốn URL cố định, cần upgrade lên bản trả phí

### 3. Lỗi "session limit exceeded"
- Bản miễn phí có giới hạn số session đồng thời
- Đóng các tunnel không cần thiết
- Hoặc upgrade lên bản trả phí

### 4. Web interface không mở
- Ngrok tự động mở web interface tại `http://localhost:4040`
- Nếu không mở, truy cập thủ công: `http://localhost:4040`

## Ưu Điểm So Với Localtunnel

| Tính năng | Localtunnel | Ngrok |
|-----------|-------------|-------|
| Firewall friendly | ❌ | ✅ |
| Ổn định | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Web interface | ❌ | ✅ |
| URL cố định | ❌ (free) | ✅ (paid) |
| Dễ sử dụng | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## Lưu Ý

1. **Security:** Ngrok tạo public URL, bất kỳ ai có link đều có thể truy cập. Không dùng cho production.

2. **Giới hạn bản miễn phí:**
   - 40 connections/minute
   - URL thay đổi mỗi lần chạy
   - 1 tunnel đồng thời

3. **Performance:** Ngrok thường nhanh hơn localtunnel.

4. **Stability:** Ngrok ổn định hơn, ít bị disconnect.

