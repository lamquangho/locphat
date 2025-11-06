# Khắc Phục Lỗi Localtunnel "connection refused"

## Lỗi Bạn Gặp Phải

```
Error: connection refused: localtunnel.me:26109 (check your firewall settings)
```

## Các Cách Khắc Phục (Thử Từng Cách)

### Cách 1: Cho Phép Node.js Qua Firewall (Khuyến Nghị)

1. **Mở Windows Defender Firewall:**
   - Nhấn `Windows + R`
   - Gõ `firewall.cpl` và nhấn Enter
   - Hoặc tìm "Windows Defender Firewall" trong Start Menu

2. **Cho phép ứng dụng qua Firewall:**
   - Click "Allow an app or feature through Windows Defender Firewall" (bên trái)
   - Click "Change settings" (nếu cần quyền admin)
   - Tìm "Node.js" trong danh sách
   - Đánh dấu cả 2 ô: **Private** và **Public**
   - Click OK

3. **Nếu không thấy Node.js:**
   - Click "Allow another app..."
   - Click "Browse..."
   - Tìm đến file Node.js (thường ở: `C:\Program Files\nodejs\node.exe` hoặc `C:\Users\<YourName>\AppData\Local\nvm\...`)
   - Click "Add"
   - Đánh dấu cả Private và Public
   - Click OK

4. **Thử chạy lại localtunnel:**
   ```bash
   lt --port 5000 --subdomain boc-xep-backend
   ```

### Cách 2: Tắt Firewall Tạm Thời (Chỉ Để Test)

1. **Mở Windows Defender Firewall**
2. **Tắt Firewall:**
   - Click "Turn Windows Defender Firewall on or off" (bên trái)
   - Tắt cả "Private network settings" và "Public network settings" (tạm thời)
   - Click OK

3. **Thử chạy lại localtunnel:**
   ```bash
   lt --port 5000 --subdomain boc-xep-backend
   ```

4. **Nếu hoạt động, nhớ bật lại Firewall sau khi test xong!**

### Cách 3: Kiểm Tra Antivirus

- Một số phần mềm Antivirus (như Kaspersky, Norton, Avast) có thể chặn localtunnel
- Tắt tạm thời để test (chỉ để test)
- Nếu hoạt động, thêm exception cho Node.js trong Antivirus

### Cách 4: Tắt VPN/Proxy

- Nếu bạn đang dùng VPN, hãy tắt tạm thời
- Kiểm tra proxy settings:
  - Mở Settings > Network & Internet > Proxy
  - Đảm bảo "Use a proxy server" đang tắt

### Cách 5: Thử Không Dùng Subdomain

Thay vì dùng subdomain cố định, để localtunnel tự động tạo:

```bash
lt --port 5000
```

### Cách 6: Thử Port Khác

Đôi khi port bị chặn, thử port khác:

```bash
# Thay đổi port backend tạm thời (ví dụ: 5001)
# Trong backend/server.js, đổi PORT thành 5001
# Sau đó chạy:
lt --port 5001
```

### Cách 7: Kiểm Tra Kết Nối Internet

Đảm bảo máy bạn có kết nối internet ổn định và có thể truy cập:
- https://localtunnel.me

### Cách 8: Cài Lại Localtunnel

```bash
npm uninstall -g localtunnel
npm install -g localtunnel
```

## Kiểm Tra Backend Đang Chạy

Trước khi chạy localtunnel, đảm bảo backend đang chạy:

```bash
cd boc-xep-website/backend
npm start
```

Bạn sẽ thấy: `Server is running on port 5000`

## Thứ Tự Thực Hiện

1. ✅ Đảm bảo backend đang chạy trên port 5000
2. ✅ Thử Cách 1 (Cho phép Node.js qua Firewall) - **Khuyến nghị nhất**
3. ✅ Nếu không được, thử Cách 2 (Tắt Firewall tạm thời)
4. ✅ Nếu vẫn không được, thử Cách 5 (Không dùng subdomain)

## Sau Khi Khắc Phục

Khi localtunnel chạy thành công, bạn sẽ thấy:

```
your url is: https://boc-xep-backend.loca.lt
```

Sau đó:
1. Copy URL này
2. Tạo file `.env` trong `frontend` với nội dung:
   ```
   REACT_APP_API_URL=https://boc-xep-backend.loca.lt/api
   ```
3. Chạy frontend tunnel:
   ```bash
   cd boc-xep-website/frontend
   lt --port 3000 --subdomain boc-xep-frontend
   ```
4. Khởi động frontend:
   ```bash
   npm start
   ```

## Vẫn Không Được?

Nếu đã thử tất cả các cách trên mà vẫn không được, có thể:
- Network của bạn (công ty/trường học) đang chặn localtunnel
- ISP đang chặn
- Cần liên hệ IT support để mở port

Trong trường hợp này, bạn có thể thử các giải pháp thay thế (xem file `HUONG-DAN-NGROK.md`).

