# Khắc Phục Lỗi "Invalid Host header" Khi Dùng Localtunnel

## Nguyên Nhân

Lỗi "Invalid Host header" xảy ra vì React dev server (webpack-dev-server) chỉ cho phép truy cập từ `localhost` mặc định. Khi bạn truy cập qua localtunnel (domain khác như `loca.lt`), nó bị chặn.

## Giải Pháp

### Cách 1: Tạo File .env (Khuyến Nghị)

1. **Tạo file `.env` trong thư mục `frontend`:**
   - Đường dẫn: `boc-xep-website/frontend/.env`
   - Tạo file mới với tên chính xác là `.env` (có dấu chấm ở đầu)

2. **Thêm nội dung sau vào file `.env`:**

```env
# Cho phép truy cập từ domain khác localhost (cần thiết cho localtunnel/ngrok)
DANGEROUSLY_DISABLE_HOST_CHECK=true

# Cho phép kết nối từ bất kỳ IP nào
HOST=0.0.0.0

# Cấu hình Webpack Dev Server Socket
WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000

# API URL - Thay đổi URL này bằng URL tunnel backend của bạn
# Ví dụ: REACT_APP_API_URL=https://boc-xep-backend.loca.lt/api
REACT_APP_API_URL=http://localhost:5000/api
```

3. **Lưu file và restart frontend:**
   ```bash
   # Dừng frontend (Ctrl + C)
   # Sau đó chạy lại:
   cd boc-xep-website/frontend
   npm start
   ```

### Cách 2: Sửa package.json (Tạm thời)

Nếu không thể tạo file `.env`, bạn có thể sửa `package.json`:

1. **Mở file `frontend/package.json`**

2. **Sửa script "start" thành:**

```json
"scripts": {
  "start": "DANGEROUSLY_DISABLE_HOST_CHECK=true HOST=0.0.0.0 react-scripts start",
  "dev": "DANGEROUSLY_DISABLE_HOST_CHECK=true HOST=0.0.0.0 react-scripts start"
}
```

**Lưu ý:** Cách này chỉ hoạt động trên Linux/Mac. Trên Windows, cần dùng package `cross-env`:

```bash
npm install --save-dev cross-env
```

Sau đó sửa script:
```json
"scripts": {
  "start": "cross-env DANGEROUSLY_DISABLE_HOST_CHECK=true HOST=0.0.0.0 react-scripts start",
  "dev": "cross-env DANGEROUSLY_DISABLE_HOST_CHECK=true HOST=0.0.0.0 react-scripts start"
}
```

### Cách 3: Tạo File .env.local (Windows)

Nếu không tạo được file `.env` (do Windows không cho phép tên file bắt đầu bằng dấu chấm):

1. **Tạo file `.env.local` thay vì `.env`**
   - React sẽ tự động đọc file này

2. **Hoặc tạo file `env.txt` rồi đổi tên thành `.env`**
   - Mở Command Prompt hoặc PowerShell
   - Chạy: `cd boc-xep-website/frontend`
   - Chạy: `echo. > .env` (tạo file rỗng)
   - Mở file `.env` và thêm nội dung như Cách 1

## Các Bước Hoàn Chỉnh

### 1. Tạo File .env trong Frontend

Tạo file `boc-xep-website/frontend/.env` với nội dung:

```env
DANGEROUSLY_DISABLE_HOST_CHECK=true
HOST=0.0.0.0
WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000
REACT_APP_API_URL=http://localhost:5000/api
```

### 2. Cập Nhật REACT_APP_API_URL Khi Có Tunnel Backend

Khi bạn đã có URL tunnel backend (ví dụ: `https://boc-xep-backend.loca.lt`), cập nhật file `.env`:

```env
DANGEROUSLY_DISABLE_HOST_CHECK=true
HOST=0.0.0.0
WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000
REACT_APP_API_URL=https://boc-xep-backend.loca.lt/api
```

### 3. Restart Frontend

```bash
# Dừng frontend (Ctrl + C trong terminal đang chạy)
# Sau đó chạy lại:
cd boc-xep-website/frontend
npm start
```

### 4. Tạo Tunnel cho Frontend

Mở terminal mới:

```bash
cd boc-xep-website/frontend
lt --port 3000 --subdomain boc-xep-frontend
```

### 5. Truy Cập

Truy cập qua URL tunnel frontend: `https://boc-xep-frontend.loca.lt`

## Lưu Ý Bảo Mật

⚠️ **Cảnh báo:** `DANGEROUSLY_DISABLE_HOST_CHECK=true` tắt kiểm tra host header, có thể không an toàn trong production. Chỉ dùng cho development/testing.

## Troubleshooting

### Vẫn Bị Lỗi "Invalid Host header"

1. **Đảm bảo đã restart frontend sau khi tạo/sửa file .env**
   - Dừng hoàn toàn (Ctrl + C)
   - Chạy lại `npm start`

2. **Kiểm tra file .env có đúng tên không**
   - Phải là `.env` (có dấu chấm ở đầu)
   - Không phải `env.txt` hay `.env.txt`

3. **Kiểm tra file .env có đúng vị trí không**
   - Phải ở: `boc-xep-website/frontend/.env`
   - Không phải ở thư mục root hay backend

4. **Xóa cache và thử lại:**
   ```bash
   cd boc-xep-website/frontend
   rm -rf node_modules/.cache
   npm start
   ```

### Hot Reload Không Hoạt Động

Nếu hot reload không hoạt động khi dùng tunnel, thử thêm vào `.env`:

```env
WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000
FAST_REFRESH=false
```

## Tóm Tắt

1. ✅ Tạo file `.env` trong `frontend/`
2. ✅ Thêm `DANGEROUSLY_DISABLE_HOST_CHECK=true` và `HOST=0.0.0.0`
3. ✅ Restart frontend
4. ✅ Tạo tunnel cho frontend
5. ✅ Truy cập qua URL tunnel

