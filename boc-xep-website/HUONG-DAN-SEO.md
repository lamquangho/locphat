# Hướng Dẫn SEO Cho Website Bốc Xếp

## ✅ Đã Triển Khai

### 1. **Meta Tags Động**
- Đã cài đặt `react-helmet-async` để quản lý meta tags cho từng trang
- Mỗi trang có title, description, keywords riêng
- Hỗ trợ Open Graph và Twitter Cards

### 2. **Structured Data (JSON-LD)**
- Đã thêm schema.org LocalBusiness để Google hiểu rõ hơn về doanh nghiệp
- Bao gồm thông tin: tên, mô tả, địa chỉ, số điện thoại, giờ làm việc

### 3. **Sitemap.xml**
- File `frontend/public/sitemap.xml` chứa tất cả các trang quan trọng
- **CẦN CẬP NHẬT**: Thay `https://your-domain.com` bằng domain thực tế của bạn

### 4. **Robots.txt**
- File `frontend/public/robots.txt` cho phép search engines crawl website
- **CẦN CẬP NHẬT**: Thay `https://your-domain.com` bằng domain thực tế của bạn

## 🔧 Cần Cấu Hình

### 1. **Cập Nhật Domain**
Tìm và thay thế `https://your-domain.com` trong các file sau:
- `frontend/public/sitemap.xml`
- `frontend/public/robots.txt`
- `frontend/src/components/SEO.js` (dòng `siteUrl`)

Hoặc tạo file `.env` trong thư mục `frontend`:
```
REACT_APP_SITE_URL=https://your-domain.com
```

### 2. **Cập Nhật Thông Tin Doanh Nghiệp**
Trong file `frontend/src/components/SEO.js`, cập nhật:
- Số điện thoại (đã cập nhật: 0773800431)
- Địa chỉ chi tiết (hiện tại: TP. Hồ Chí Minh)
- Tọa độ GPS (latitude, longitude) nếu có địa chỉ cụ thể

### 3. **Tối Ưu Hình Ảnh**
- Đảm bảo tất cả hình ảnh có thuộc tính `alt` mô tả rõ ràng
- Sử dụng hình ảnh chất lượng cao, kích thước phù hợp
- Nén hình ảnh để tăng tốc độ tải trang

## 📋 Checklist Sau Khi Deploy

### Google Search Console
1. Đăng ký website tại [Google Search Console](https://search.google.com/search-console)
2. Xác minh quyền sở hữu website
3. Submit sitemap: `https://your-domain.com/sitemap.xml`
4. Kiểm tra và sửa các lỗi nếu có

### Google My Business
1. Tạo/claim Google My Business profile
2. Thêm thông tin doanh nghiệp đầy đủ
3. Thêm hình ảnh, giờ làm việc, địa chỉ

### Kiểm Tra SEO
1. Sử dụng [Google Rich Results Test](https://search.google.com/test/rich-results) để kiểm tra structured data
2. Sử dụng [PageSpeed Insights](https://pagespeed.web.dev/) để kiểm tra tốc độ
3. Sử dụng [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) để kiểm tra mobile

### Tối Ưu Thêm
1. **Tốc độ trang**: Nén hình ảnh, sử dụng CDN, lazy loading
2. **Mobile-first**: Đảm bảo website responsive tốt
3. **Nội dung**: Thêm blog/content về dịch vụ để tăng từ khóa
4. **Backlinks**: Xây dựng liên kết từ các website uy tín
5. **Local SEO**: Thêm địa chỉ cụ thể, bản đồ Google Maps

## 🔍 Các Từ Khóa Chính

Website đã được tối ưu cho các từ khóa:
- bốc xếp TPHCM
- dịch vụ bốc xếp
- chuyển nhà trọn gói
- chuyển văn phòng
- cho thuê nhân công
- bốc xếp container
- bốc xếp kho
- vận chuyển hàng hóa

## 📱 Social Media Tags

Website đã có:
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Meta description và title cho mỗi trang

## ⚠️ Lưu Ý Quan Trọng

1. **Domain**: Phải cập nhật domain thực tế trước khi deploy
2. **HTTPS**: Đảm bảo website có SSL certificate (HTTPS)
3. **Cập nhật thường xuyên**: Cập nhật sitemap khi có trang mới
4. **Nội dung chất lượng**: Google ưu tiên nội dung hữu ích, unique

## 🚀 Sau Khi Deploy

1. Submit sitemap lên Google Search Console
2. Kiểm tra indexing: `site:your-domain.com` trên Google
3. Theo dõi performance trong Google Search Console
4. Tối ưu dựa trên dữ liệu analytics

---

**Lưu ý**: SEO là quá trình lâu dài, kết quả có thể mất 2-6 tháng để thấy rõ. Hãy kiên nhẫn và tiếp tục tối ưu!

