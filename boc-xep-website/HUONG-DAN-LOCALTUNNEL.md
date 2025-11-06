# Hướng Dẫn Sử Dụng Localtunnel để Test Trang Web

## Yêu Cầu
- Node.js đã được cài đặt
- Backend và Frontend đã được cài đặt dependencies

## Các Bước Thực Hiện

### Bước 1: Cài Đặt Localtunnel

Mở terminal và chạy lệnh sau để cài đặt localtunnel globally:

```bash
npm install -g localtunnel
```

Hoặc nếu bạn muốn cài đặt local (chỉ trong project):

```bash
cd boc-xep-website
npm install --save-dev localtunnel
```

### Bước 2: Khởi Động Backend Server

Mở terminal thứ nhất và chạy:

```bash
cd boc-xep-website/backend
npm start
```

Backend sẽ chạy trên `http://localhost:5000`

### Bước 3: Tạo Tunnel cho Backend

Mở terminal thứ hai và chạy:

```bash
lt --port 5000 --subdomain boc-xep-backend
```

Bạn sẽ nhận được một URL như: `https://boc-xep-backend.loca.lt`

**Lưu ý:** Nếu subdomain đã được sử dụng, bạn có thể dùng subdomain khác hoặc để localtunnel tự động tạo:

```bash
lt --port 5000
```

### Bước 4: Tạo Tunnel cho Frontend

Mở terminal thứ ba và chạy:

```bash
lt --port 3000 --subdomain boc-xep-frontend
```

Bạn sẽ nhận được một URL như: `https://boc-xep-frontend.loca.lt`

### Bước 5: Cấu Hình Frontend để Sử Dụng Backend Tunnel

Tạo file `.env` trong thư mục `frontend` (nếu chưa có) và thêm:

```env
REACT_APP_API_URL=https://boc-xep-backend.loca.lt/api
```

**Lưu ý:** Thay `https://boc-xep-backend.loca.lt` bằng URL tunnel backend mà bạn nhận được ở Bước 3.

### Bước 6: Khởi Động Frontend

Mở terminal thứ tư và chạy:

```bash
cd boc-xep-website/frontend
npm start
```

Frontend sẽ chạy trên `http://localhost:3000`

### Bước 7: Truy Cập Trang Web

Bây giờ bạn có thể truy cập trang web qua URL tunnel frontend:
`https://boc-xep-frontend.loca.lt`

## Cách Sử Dụng Nhanh (Script)

Để tiện lợi hơn, bạn có thể tạo các script trong `package.json`:

### Backend/package.json - Thêm script:

```json
"scripts": {
  "start": "node server.js",
  "tunnel": "lt --port 5000 --subdomain boc-xep-backend"
}
```

### Frontend/package.json - Thêm script:

```json
"scripts": {
  "start": "react-scripts start",
  "dev": "react-scripts start",
  "tunnel": "lt --port 3000 --subdomain boc-xep-frontend"
}
```

## Xử Lý CORS (Nếu Gặp Lỗi)

Nếu bạn gặp lỗi CORS, cần cập nhật file `backend/server.js`:

```javascript
// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://boc-xep-frontend.loca.lt',  // Thêm URL tunnel frontend
    /\.loca\.lt$/  // Cho phép tất cả subdomain của loca.lt
  ],
  credentials: true
}));
```

## Troubleshooting

### 1. Lỗi "connection refused: localtunnel.me" (Firewall/Network)

**Nguyên nhân:** Firewall Windows, Antivirus hoặc network đang chặn kết nối đến localtunnel.

**Giải pháp:**

#### A. Kiểm tra và tắt Firewall tạm thời (Chỉ để test)
1. Mở Windows Defender Firewall
2. Tắt Firewall tạm thời (chỉ để test)
3. Thử chạy lại `lt --port 5000`

#### B. Cho phép Node.js qua Firewall
1. Mở Windows Defender Firewall
2. Chọn "Allow an app or feature through Windows Defender Firewall"
3. Tìm "Node.js" và đánh dấu cả Private và Public
4. Nếu không thấy, click "Allow another app" và thêm Node.js

#### C. Tắt Antivirus tạm thời
- Một số Antivirus có thể chặn localtunnel
- Tắt tạm thời để test (chỉ để test)

#### D. Kiểm tra VPN/Proxy
- Tắt VPN nếu đang sử dụng
- Kiểm tra proxy settings

#### E. Thử với host khác
```bash
lt --port 5000 --host https://localtunnel.me
```

### 2. Lỗi "Port đã được sử dụng"
- Kiểm tra xem port 3000 hoặc 5000 đã được sử dụng chưa
- Dừng các process đang chạy trên port đó: 
  ```bash
  # Windows PowerShell
  netstat -ano | findstr :5000
  taskkill /PID <PID_NUMBER> /F
  ```
- Hoặc sử dụng port khác: `lt --port 5000 --port 8000`

### 3. Lỗi "Subdomain đã được sử dụng"
- Sử dụng subdomain khác
- Hoặc để localtunnel tự động tạo subdomain: `lt --port 5000`

### 4. Frontend không kết nối được với Backend
- Kiểm tra file `.env` trong frontend có đúng URL tunnel backend không
- Đảm bảo backend tunnel vẫn đang chạy
- Kiểm tra CORS config trong backend

### 5. Tunnel bị disconnect
- Localtunnel có thể bị disconnect sau một thời gian không hoạt động
- Chạy lại lệnh `lt` để tạo tunnel mới
- Hoặc sử dụng flag `--keep-alive`: `lt --port 5000 --keep-alive`

## Lưu Ý Quan Trọng

1. **Security:** Localtunnel tạo public URL, bất kỳ ai có link đều có thể truy cập. Không dùng cho production.

2. **HTTPS:** Localtunnel tự động tạo HTTPS URL, nhưng có thể có cảnh báo về certificate.

3. **Performance:** Localtunnel có thể chậm hơn so với localhost, tùy thuộc vào server.

4. **Stability:** Tunnel có thể bị disconnect, cần theo dõi và restart nếu cần.

## Các Lựa Chọn Thay Thế (Khuyến Nghị)

Nếu localtunnel không hoạt động do firewall, bạn có thể thử các giải pháp sau:

### 1. Ngrok (Khuyến nghị - Ổn định nhất)

**Cài đặt:**
1. Tải ngrok từ: https://ngrok.com/download
2. Hoặc cài qua npm: `npm install -g ngrok`
3. Đăng ký tài khoản miễn phí tại https://ngrok.com
4. Lấy authtoken từ dashboard và chạy: `ngrok config add-authtoken <YOUR_TOKEN>`

**Sử dụng:**
```bash
# Backend tunnel
ngrok http 5000

# Frontend tunnel (terminal khác)
ngrok http 3000
```

**Ưu điểm:**
- Ổn định, ít bị lỗi firewall
- Có web interface để xem requests
- Hỗ trợ custom domain (bản trả phí)
- HTTPS miễn phí

**Cập nhật CORS trong backend/server.js:**
Thêm domain ngrok vào CORS:
```javascript
origin: [
  'http://localhost:3000',
  /\.loca\.lt$/,
  /\.ngrok-free\.app$/,  // Ngrok free tier
  /\.ngrok\.io$/         // Ngrok paid tier
]
```

**Cập nhật .env trong frontend:**
```env
REACT_APP_API_URL=https://<your-ngrok-url>.ngrok-free.app/api
```

### 2. Cloudflare Tunnel (Cloudflared)

**Cài đặt:**
```bash
# Windows - Tải từ: https://github.com/cloudflare/cloudflared/releases
# Hoặc dùng winget
winget install --id Cloudflare.cloudflared
```

**Sử dụng:**
```bash
# Backend
cloudflared tunnel --url http://localhost:5000

# Frontend
cloudflared tunnel --url http://localhost:3000
```

**Ưu điểm:**
- Miễn phí hoàn toàn
- Rất ổn định
- Tốc độ nhanh
- Không cần đăng ký

### 3. Serveo (SSH Tunnel)

**Sử dụng:**
```bash
# Cần SSH client
ssh -R 80:localhost:5000 serveo.net
```

**Ưu điểm:**
- Không cần cài đặt thêm
- Miễn phí
- Đơn giản

**Nhược điểm:**
- Cần SSH client
- Có thể bị chặn bởi firewall

### 4. Localhost.run

**Sử dụng:**
```bash
ssh -R 80:localhost:5000 ssh.localhost.run
```

## So Sánh Các Giải Pháp

| Giải pháp | Dễ sử dụng | Ổn định | Miễn phí | Firewall Friendly |
|-----------|------------|---------|----------|-------------------|
| Localtunnel | ⭐⭐⭐⭐ | ⭐⭐ | ✅ | ❌ |
| Ngrok | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ (có giới hạn) | ✅ |
| Cloudflare Tunnel | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| Serveo | ⭐⭐ | ⭐⭐⭐ | ✅ | ❌ |

