# Hướng Dẫn Thay Đổi Dữ Liệu

## 📍 Vị Trí File

File dữ liệu cứng: `frontend/src/data/staticData.js`

## 📝 Cách Thay Đổi Dữ Liệu

### 1. Thay Đổi Dịch Vụ (Services)

Mở file `staticData.js` và tìm `servicesData`:

```javascript
export const servicesData = [
  {
    _id: 'service-1',  // ID duy nhất (không thay đổi)
    title: 'Dịch Vụ Bốc Xếp',  // Tên dịch vụ
    description: 'Mô tả dịch vụ...',  // Mô tả
    icon: 'fa-box',  // Icon Font Awesome
    imageUrl: 'https://...',  // Link ảnh
    features: [  // Danh sách tính năng
      'Tính năng 1',
      'Tính năng 2'
    ]
  },
  // Thêm dịch vụ mới ở đây
];
```

### 2. Thay Đổi Bảng Giá (Pricing)

Tìm `pricingData` trong file:

```javascript
export const pricingData = [
  {
    _id: 'pricing-1',  // ID duy nhất
    name: 'Hàng hóa thông thường',  // Tên gói giá
    price: '50.000 - 140.000',  // Giá
    unit: 'VNĐ/tấn',  // Đơn vị
    features: [...],  // Tính năng
    featured: false  // Có nổi bật không
  },
  // Thêm gói giá mới ở đây
];
```

**Lưu ý:** 
- `unit` phải khớp với filter trong `Home.js`:
  - `'VNĐ/tấn'` - Bảng giá theo tấn
  - `'VNĐ/xe'` - Bảng giá theo xe
  - `'VNĐ/container'`, `'VNĐ/giờ'`, `'VNĐ/người/lần'` - Bảng giá container
  - `'VNĐ/người'` + name chứa `'Công nhật'` - Bảng giá công nhật

### 3. Thay Đổi Dự Án (Projects)

Tìm `projectsData` trong file:

```javascript
export const projectsData = [
  {
    _id: 'project-1',  // ID duy nhất
    title: 'Tên dự án',
    description: 'Mô tả dự án...',
    client: 'Tên khách hàng',
    location: 'Địa điểm',
    imageUrl: 'https://...',  // Link ảnh
    completedDate: '2024-10-15',  // Ngày hoàn thành (YYYY-MM-DD)
    category: 'Bốc xếp kho'  // Danh mục
  },
  // Thêm dự án mới ở đây
];
```

### 4. Thay Đổi Đường Dẫn Ảnh

Tìm `IMAGE_CONFIG` ở đầu file:

```javascript
export const IMAGE_CONFIG = {
  baseUrl: 'https://images.unsplash.com',
  services: {
    bocxep: 'https://...',
    laodong: 'https://...',
    // Thêm ảnh mới ở đây
  },
  projects: {
    warehouse1: 'https://...',
    // Thêm ảnh mới ở đây
  }
};
```

## 🔄 Sau Khi Thay Đổi

1. **Lưu file** `staticData.js`
2. **Refresh trang web** (F5 hoặc Ctrl+R)
3. Dữ liệu sẽ tự động cập nhật

## ⚠️ Lưu Ý

- **ID phải duy nhất:** Mỗi item phải có `_id` khác nhau
- **Format ngày:** Dùng format `'YYYY-MM-DD'` cho `completedDate`
- **Link ảnh:** Đảm bảo link ảnh hợp lệ và có thể truy cập
- **Icon:** Sử dụng Font Awesome icons (ví dụ: `'fa-box'`, `'fa-users'`)

## 📦 Cấu Trúc Dữ Liệu

### Services
- `_id`: ID duy nhất (string)
- `title`: Tên dịch vụ (string)
- `description`: Mô tả (string)
- `icon`: Icon Font Awesome (string)
- `imageUrl`: Link ảnh (string)
- `features`: Mảng các tính năng (array of strings)

### Pricing
- `_id`: ID duy nhất (string)
- `name`: Tên gói giá (string)
- `price`: Giá (string)
- `unit`: Đơn vị (string)
- `features`: Mảng các tính năng (array of strings)
- `featured`: Có nổi bật không (boolean)

### Projects
- `_id`: ID duy nhất (string)
- `title`: Tên dự án (string)
- `description`: Mô tả (string)
- `client`: Tên khách hàng (string)
- `location`: Địa điểm (string)
- `imageUrl`: Link ảnh (string)
- `completedDate`: Ngày hoàn thành (string, format: 'YYYY-MM-DD')
- `category`: Danh mục (string)

## 🎯 Ví Dụ Thêm Dịch Vụ Mới

```javascript
{
  _id: 'service-8',
  title: 'Dịch Vụ Mới',
  description: 'Mô tả dịch vụ mới...',
  icon: 'fa-truck',
  imageUrl: 'https://example.com/image.jpg',
  features: [
    'Tính năng 1',
    'Tính năng 2',
    'Tính năng 3'
  ]
}
```

Thêm vào mảng `servicesData` trong file `staticData.js`.

