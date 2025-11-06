# Khắc Phục Lỗi "zaloJSV2 is not defined"

## Nguyên Nhân

Lỗi "zaloJSV2 is not defined" thường xảy ra do:

1. **Extension trình duyệt:** Một số extension trình duyệt (đặc biệt trên mobile) có thể tự động inject Zalo SDK và gây lỗi
2. **Third-party scripts:** Script từ bên ngoài đang cố gọi Zalo SDK nhưng SDK chưa được load
3. **Browser auto-inject:** Một số trình duyệt tự động inject Zalo SDK khi phát hiện link Zalo

## Giải Pháp Đã Áp Dụng

### 1. Global Error Handler

Đã thêm error handler trong `index.js` để:
- Bắt và bỏ qua lỗi zaloJSV2
- Ngăn lỗi hiển thị trên màn hình
- Vẫn log cảnh báo trong console để debug

### 2. Error Boundary Component

Đã thêm Error Boundary component để:
- Bắt lỗi React và ngăn crash ứng dụng
- Bỏ qua lỗi zaloJSV2
- Hiển thị UI lỗi thân thiện nếu có lỗi thật sự

## Kiểm Tra

Sau khi cập nhật code:

1. **Restart frontend:**
   ```bash
   # Dừng frontend (Ctrl + C)
   cd boc-xep-website/frontend
   npm start
   ```

2. **Clear cache trình duyệt:**
   - Trên mobile: Xóa cache và dữ liệu trình duyệt
   - Hoặc dùng chế độ ẩn danh để test

3. **Kiểm tra lại:**
   - Lỗi "zaloJSV2 is not defined" sẽ không còn hiển thị
   - Website sẽ hoạt động bình thường

## Nếu Vẫn Còn Lỗi

### Cách 1: Tắt Extension Trình Duyệt

1. Mở trình duyệt trên điện thoại
2. Vào Settings > Extensions
3. Tắt tất cả extension liên quan đến Zalo
4. Thử lại

### Cách 2: Dùng Trình Duyệt Khác

Thử dùng trình duyệt khác (Chrome, Firefox, Safari) để xem lỗi có còn không.

### Cách 3: Clear Cache và Reload

1. Xóa cache trình duyệt
2. Hard reload trang (Ctrl + Shift + R hoặc Cmd + Shift + R)
3. Thử lại

### Cách 4: Kiểm Tra Console

Mở Developer Tools (nếu có thể) và kiểm tra:
- Lỗi có đến từ file nào
- Có script nào đang inject Zalo SDK không

## Lưu Ý

- Lỗi này **KHÔNG ảnh hưởng** đến chức năng của website
- Website vẫn hoạt động bình thường
- Chỉ là cảnh báo từ extension/third-party script
- Error handler đã được thêm để bỏ qua lỗi này

## Code Đã Thêm

### File: `frontend/src/index.js`
- Global error handler để bắt lỗi zaloJSV2
- Bỏ qua lỗi từ third-party scripts

### File: `frontend/src/components/ErrorBoundary.js`
- Error Boundary component mới
- Bắt lỗi React và ngăn crash

### File: `frontend/src/App.js`
- Wrap App với ErrorBoundary

## Tóm Tắt

✅ Đã thêm error handler để bỏ qua lỗi zaloJSV2
✅ Đã thêm Error Boundary để bắt lỗi React
✅ Website sẽ không còn hiển thị lỗi này
✅ Chức năng website không bị ảnh hưởng

Sau khi restart frontend, lỗi sẽ không còn hiển thị nữa!

