# 🎯 Hướng Dẫn Thay Đổi Nút Floating

## 📍 Vị Trí File

File cần chỉnh sửa: `frontend/src/components/FloatingContact.js`

## 🔧 Cách Thay Đổi Link

Mở file `FloatingContact.js` và tìm đến **dòng 7-9**:

```javascript
// Thay đổi các link này theo ý bạn
const ZALO_LINK = 'https://zalo.me/0348870335';  // ⬅️ THAY LINK ZALO
const FACEBOOK_LINK = 'https://www.facebook.com/share/14TmkZ2ZGAe';  // ⬅️ THAY LINK FACEBOOK
```

## 📱 Cách Lấy Link Zalo

### Phương pháp 1: Link số điện thoại
```
https://zalo.me/0123456789
```
Thay `0123456789` bằng số Zalo của bạn

### Phương pháp 2: Link QR Code
1. Mở Zalo trên điện thoại
2. Vào **Cá nhân** (icon người ở góc phải dưới)
3. Nhấn vào **Mã QR của tôi**
4. Nhấn nút **Chia sẻ** (icon share)
5. Chọn **Sao chép liên kết**
6. Paste vào code

## 👥 Cách Lấy Link Facebook

### Link Facebook Messenger (Chat riêng)
```
https://m.me/username
```

### Link Facebook Page
```
https://www.facebook.com/page-name
```

### Link Facebook Group
```
https://www.facebook.com/groups/group-id
```

**Cách lấy:**
1. Vào trang Facebook/Group muốn dùng
2. Copy URL từ thanh địa chỉ
3. Paste vào code

## 🎨 Tính Năng Của Nút Floating

✅ **Xuất hiện ở mọi trang** web
✅ **Floating ở góc phải dưới** màn hình
✅ **2 nút liên hệ:**
   - 💬 Zalo (màu xanh #0068FF)
   - 📘 Facebook (màu xanh #1877f2)

✅ **Hiệu ứng đẹp:**
   - Animation pulse liên tục
   - Hover effect mượt mà
   - SlideIn animation khi mở
   - Responsive tự động trên mobile

✅ **Click nút chính** để mở/đóng 2 nút nhỏ

**📞 Số điện thoại** hiển thị ở trang Liên Hệ dưới dạng text thường để khách tự gõ và gọi

## 📱 Responsive Mobile

- **Desktop:** Hiển thị đầy đủ icon + text
- **Tablet:** Icon + text thu gọn
- **Mobile:** Chỉ hiển thị icon tròn
- **Vị trí tự động điều chỉnh** để không che mất nội dung

## 🎨 Tùy Chỉnh Màu Sắc (Nâng Cao)

Nếu muốn đổi màu các nút, mở file `FloatingContact.css` và tìm:

### Zalo (dòng ~125)
```css
.zalo-btn {
  background: linear-gradient(135deg, #0068FF, #0095FF);
}
```

### Facebook (dòng ~133)
```css
.facebook-btn {
  background: linear-gradient(135deg, #1877f2, #42b0ff);
}
```


## 🚀 Test Ngay

Sau khi thay đổi:
1. Save file
2. Website sẽ tự động reload
3. Nhìn góc phải dưới màn hình
4. Click vào nút tròn chính để test

## 💡 Tips

✅ **Link Zalo:** Dùng format `zalo.me/phone` cho đơn giản nhất
✅ **Test trên mobile:** Mở bằng điện thoại để kiểm tra
✅ **Không cần backend:** Các nút này chỉ là link trực tiếp
✅ **Hoạt động offline:** Click sẽ mở app Zalo/Facebook nếu có

## 🐛 Troubleshooting

### Nút không xuất hiện?
- Kiểm tra file `App.js` đã import `FloatingContact` chưa
- Clear cache browser (Ctrl+F5)
- Kiểm tra console log có lỗi không (F12)

### Link không hoạt động?
- Kiểm tra format link đúng chưa
- Test link trước trong browser
- Đảm bảo có `https://` ở đầu

### Nút bị che bởi nội dung khác?
- Thay đổi `z-index` trong `FloatingContact.css` (dòng 4)
- Tăng lên 99999 hoặc cao hơn

## 📞 Support

Nếu gặp vấn đề, check lại:
1. ✅ File path đúng
2. ✅ Import trong App.js đúng  
3. ✅ Link format đúng
4. ✅ Đã save file và reload browser

---

**Chúc bạn thành công! 🎉**

