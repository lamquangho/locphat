// ============================================
// DỮ LIỆU CỨNG - KHÔNG CẦN KẾT NỐI DATABASE
// ============================================
// Dữ liệu được lấy từ backend/seed.js

// Cấu hình đường dẫn ảnh
export const IMAGE_CONFIG = {
  baseUrl: 'https://images.unsplash.com',
  services: {
    bocxep: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    laodong: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    chuyennha: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    chuyenvanphong: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
  },
  projects: {
    warehouse1: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800',
    warehouse2: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800',
    office1: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
    office2: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    factory1: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    moving1: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'
  }
};

// Dữ liệu dịch vụ
export const servicesData = [
  {
    _id: 'service-1',
    title: 'Dịch Vụ Bốc Xếp',
    description: 'Dịch vụ của chúng tôi luôn uy tín và chuyên nghiệp để đáp ứng khách hàng, tiết kiệm chi phí hợp lý. Chúng tôi sẵn sàng phục vụ quý khách 24/7 một cách tận tâm nhất.',
    icon: 'fa-box',
    imageUrl: IMAGE_CONFIG.services.bocxep,
    features: [
      'Đội ngũ nhân viên chuyên nghiệp',
      'Thiết bị hiện đại',
      'Bảo hiểm hàng hóa',
      'Giá cả cạnh tranh'
    ]
  },
  {
    _id: 'service-2',
    title: 'Cho Thuê Lao Động',
    description: 'Chuyên cung cấp dịch vụ lao động thời vụ theo dự án, hợp đồng ngắn hạn, theo tháng, theo năm. Cho thuê nhân công, công nhân sản xuất, điện tử chuyên nghiệp.',
    icon: 'fa-users',
    imageUrl: IMAGE_CONFIG.services.laodong,
    features: [
      'Nhân công có kinh nghiệm',
      'Linh hoạt thời gian',
      'Hợp đồng rõ ràng',
      'Quản lý chặt chẽ'
    ]
  },
  {
    _id: 'service-3',
    title: 'Dịch Vụ Chuyển Nhà',
    description: 'Dịch vụ chuyển nhà giá rẻ trọn gói chuyên nghiệp. Bạn có thể hoàn toàn yên tâm về chất lượng dịch vụ và cung cách phục vụ của đội ngũ nhân viên.',
    icon: 'fa-home',
    imageUrl: IMAGE_CONFIG.services.chuyennha,
    features: [
      'Đóng gói chuyên nghiệp',
      'Vận chuyển an toàn',
      'Bảo hiểm tài sản',
      'Giá trọn gói'
    ]
  },
  {
    _id: 'service-4',
    title: 'Dịch Vụ Chuyển Trọ',
    description: 'Dịch vụ chuyển trọ giá rẻ sinh viên trọn gói chuyên nghiệp. Bạn có thể hoàn toàn yên tâm về chất lượng dịch vụ và cung cách phục vụ của đội ngũ nhân viên.',
    icon: 'fa-home',
    imageUrl: 'https://nhanhmaimoi.vn/wp-content/uploads/2021/05/dong-goi-do-dac-de-vo.jpg',
    features: [
      'Đóng gói chuyên nghiệp',
      'Vận chuyển an toàn',
      'Bảo hiểm tài sản',
      'Giá trọn gói'
    ]
  },
  {
    _id: 'service-5',
    title: 'Dịch Vụ Chuyển Dọn Kho',
    description: 'Dịch vụ dọn kho chuyên nghiệp, an toàn và nhanh chóng. Hàng hóa trong kho được phân loại, đóng gói và vận chuyển gọn gàng, giúp tiết kiệm thời gian và công sức cho khách hàng.',
    icon: 'fa-warehouse',
    imageUrl: 'https://bocxeptphcm.com/wp-content/uploads/2024/06/chuyen-kho-xuong-tron-goi.jpg',
    features: [
      'Phân loại và sắp xếp hàng hóa',
      'Thu gom và xử lý đồ không còn sử dụng',
      'Vận chuyển nhanh chóng, an toàn',
      'Tiết kiệm chi phí và thời gian'
    ]
  },
  {
    _id: 'service-6',
    title: 'Vận Chuyển Vật Tư Công Trình',
    description: 'Chúng tôi cung cấp dịch vụ vận chuyển vật tư công trình nhanh chóng, an toàn và đúng tiến độ. Với đội xe đa dạng và nhân lực chuyên nghiệp, đảm bảo mọi khối lượng hàng hóa được vận chuyển đến công trình đúng kế hoạch và tiết kiệm chi phí nhất.',
    icon: 'fa-truck-loading',
    imageUrl: 'https://bocxepgiare.net/wp-content/uploads/2020/10/V%E1%BA%ADn-chuy%E1%BB%83n-b%E1%BB%91c-x%E1%BA%BFp-v%E1%BA%ADt-li%E1%BB%87u-x%C3%A2y-d%E1%BB%B1ng.jpg',
    features: [
      'Xe tải đa dạng trọng tải phù hợp mọi nhu cầu',
      'Đội ngũ lái xe và bốc xếp chuyên nghiệp',
      'Đảm bảo tiến độ và an toàn hàng hóa',
      'Giá cả hợp lý, hỗ trợ hợp đồng dài hạn'
    ]
  },
  {
    _id: 'service-7',
    title: 'Bốc Xếp Đồ Nội Thất',
    description: 'Dịch vụ bốc xếp đồ nội thất giúp khách hàng di chuyển, sắp xếp đồ đạc nhanh chóng, an toàn và gọn gàng. Chúng tôi luôn cẩn trọng trong từng khâu để đảm bảo nội thất không bị trầy xước, hư hỏng trong quá trình vận chuyển.',
    icon: 'fa-couch',
    imageUrl: 'https://res.cloudinary.com/dx8ffnhq3/image/upload/v1762408380/noithat_xgtlya.jpg',
    features: [
      'Nhân viên được đào tạo chuyên nghiệp, cẩn thận',
      'Trang thiết bị hỗ trợ nâng hạ hiện đại',
      'Đảm bảo an toàn tuyệt đối cho đồ nội thất',
      'Phục vụ nhanh chóng, 24/7'
    ]
  }
];

// Dữ liệu bảng giá
export const pricingData = [
  // BẢNG GIÁ BỐC XẾP THEO TẤN
  {
    _id: 'pricing-1',
    name: 'Hàng hóa thông thường',
    price: '50.000 - 140.000',
    unit: 'VNĐ/tấn',
    features: [
      'Hàng hóa văn phòng phẩm',
      'Hàng tiêu dùng',
      'Đồ gia dụng',
      'Phù hợp khối lượng nhỏ'
    ],
    featured: false
  },
  {
    _id: 'pricing-2',
    name: 'Hàng hóa nặng',
    price: '110.000 - 200.000',
    unit: 'VNĐ/tấn',
    features: [
      'Sắt thép',
      'Vật liệu xây dựng',
      'Thiết bị công nghiệp',
      'Yêu cầu thiết bị chuyên dụng'
    ],
    featured: false
  },
  {
    _id: 'pricing-3',
    name: 'Hàng hóa nông sản',
    price: '90.000 - 150.000',
    unit: 'VNĐ/tấn',
    features: [
      'Lúa, gạo, ngô',
      'Nông sản khô',
      'Bao bì lớn',
      'Xử lý cẩn thận'
    ],
    featured: false
  },
  {
    _id: 'pricing-4',
    name: 'Hàng hóa trong kho',
    price: '70.000 - 130.000',
    unit: 'VNĐ/tấn',
    features: [
      'Sắp xếp trong kho',
      'Di chuyển nội bộ',
      'Kiểm kê hàng hóa',
      'Quản lý kho bãi'
    ],
    featured: false
  },
  // BẢNG GIÁ BỐC XẾP THEO XE
  {
    _id: 'pricing-5',
    name: 'Xe 2 tấn',
    price: '~250.000 ~ 350.000',
    unit: 'VNĐ/xe',
    features: [
      'Phù hợp hàng nhỏ',
      'Di chuyển nội thành',
      'Thời gian nhanh',
      'Tiết kiệm chi phí'
    ],
    featured: false
  },
  {
    _id: 'pricing-6',
    name: 'Xe 3.5 tấn',
    price: '~500.000 ~ 700.000',
    unit: 'VNĐ/xe',
    features: [
      'Hàng vừa và nhỏ',
      'Phổ biến nhất',
      'Linh hoạt',
      'Giá hợp lý'
    ],
    featured: false
  },
  {
    _id: 'pricing-7',
    name: 'Xe 5 tấn',
    price: '~700.000 ~ 900.000',
    unit: 'VNĐ/xe',
    features: [
      'Khối lượng trung bình',
      'Vận chuyển xa',
      'An toàn',
      'Chuyên nghiệp'
    ],
    featured: true
  },
  {
    _id: 'pricing-8',
    name: 'Xe 8 tấn',
    price: '~1.200.000 ~ 1.500.000',
    unit: 'VNĐ/xe',
    features: [
      'Hàng hóa lớn',
      'Chuyển kho xưởng',
      'Thiết bị đầy đủ',
      'Đội ngũ có kinh nghiệm'
    ],
    featured: false
  },
  {
    _id: 'pricing-9',
    name: 'Xe 10 tấn',
    price: '~1.600.000 ~ 1.800.000',
    unit: 'VNĐ/xe',
    features: [
      'Dự án lớn',
      'Vận chuyển liên tỉnh',
      'Bảo hiểm cao',
      'Theo dõi hành trình'
    ],
    featured: false
  },
  {
    _id: 'pricing-10',
    name: 'Xe 15 tấn',
    price: '~2.200.000 ~ 2.500.000',
    unit: 'VNĐ/xe',
    features: [
      'Siêu trọng tải',
      'Máy móc công nghiệp',
      'Giấy phép đầy đủ',
      'Bảo hành dịch vụ'
    ],
    featured: false
  },
  {
    _id: 'pricing-11',
    name: 'Xe 20 tấn',
    price: '~2.500.000 ~ 3.000.000',
    unit: 'VNĐ/xe',
    features: [
      'Khối lượng cực lớn',
      'Dự án đặc biệt',
      'Tư vấn chuyên sâu',
      'Ưu đãi dài hạn'
    ],
    featured: false
  },
  // BẢNG GIÁ BỐC XẾP CONTAINER
  {
    _id: 'pricing-12',
    name: 'Container 20 feet',
    price: '700.000 - 2.200.000',
    unit: 'VNĐ/container',
    features: [
      'Xuất nhập khẩu',
      'Vận chuyển cảng biển',
      'Thủ tục hải quan',
      'Giá linh hoạt theo hàng'
    ],
    featured: false
  },
  {
    _id: 'pricing-13',
    name: 'Container 40 feet',
    price: '1.200.000 - 3.200.000',
    unit: 'VNĐ/container',
    features: [
      'Hàng hóa số lượng lớn',
      'Logistics quốc tế',
      'Đội ngũ chuyên nghiệp',
      'Theo dõi 24/7'
    ],
    featured: false
  },
  {
    _id: 'pricing-14',
    name: 'Bốc xếp container theo giờ',
    price: '100.000-150.000',
    unit: 'VNĐ/giờ',
    features: [
      'Linh hoạt thời gian',
      'Phù hợp khối lượng nhỏ',
      'Tính phí theo giờ thực tế',
      'Tiết kiệm'
    ],
    featured: false
  },
  {
    _id: 'pricing-15',
    name: 'Thuê nhân công bốc xếp',
    price: '300.000-500.000',
    unit: 'VNĐ/người/lần',
    features: [
      'Nhân công chuyên nghiệp',
      'Có kinh nghiệm',
      'Công cụ hỗ trợ',
      'Làm việc hiệu quả'
    ],
    featured: false
  },
  // BỐC XẾP THEO CÔNG NHẬT
  {
    _id: 'pricing-16',
    name: 'Công nhật 6 giờ',
    price: '350.000 - 500.000',
    unit: 'VNĐ/người',
    features: [
      'Phù hợp công việc ngắn hạn, linh hoạt',
      'Thường áp dụng cho ca sáng hoặc ca chiều',
      'Phù hợp nhân công phổ thông',
      'Tiết kiệm chi phí cho công việc ngắn giờ'
    ],
    featured: false
  },
  {
    _id: 'pricing-17',
    name: 'Công nhật 8 giờ',
    price: '600.000 - 800.000',
    unit: 'VNĐ/người',
    features: [
      'Thời gian làm việc tiêu chuẩn trong ngày',
      'Thường áp dụng cho công việc trọn ngày',
      'Bao gồm nghỉ trưa 1 giờ',
      'Phù hợp hầu hết loại công việc phổ thông'
    ],
    featured: true
  },
  {
    _id: 'pricing-18',
    name: 'Công nhật 12 giờ',
    price: '700.000 - 1.000.000',
    unit: 'VNĐ/người',
    features: [
      'Làm việc tăng ca kéo dài',
      'Thường áp dụng cho dự án cần gấp tiến độ',
      'Có phụ cấp tăng ca và ăn uống',
      'Phù hợp công việc bốc xếp, dọn kho, vận chuyển'
    ],
    featured: false
  }
];

// Dữ liệu dự án
export const projectsData = [
  {
    _id: 'project-1',
    title: 'Dự Án Bốc Xếp Kho Hàng TPHCM',
    description: 'Bốc xếp và sắp xếp 500 tấn hàng hóa trong kho hàng 5000m² tại Quận 9, TPHCM',
    client: 'Công ty TNHH Logistics Việt Nam',
    location: 'Quận 9, TP. Hồ Chí Minh',
    imageUrl: IMAGE_CONFIG.projects.warehouse1,
    completedDate: '2024-10-15',
    category: 'Bốc xếp kho'
  },
  {
    _id: 'project-2',
    title: 'Chuyển Kho Xưởng Bình Dương',
    description: 'Di chuyển toàn bộ thiết bị và hàng hóa từ kho cũ sang kho mới rộng 10,000m²',
    client: 'Công ty CP Sản Xuất ABC',
    location: 'Bình Dương',
    imageUrl: IMAGE_CONFIG.projects.warehouse2,
    completedDate: '2024-09-20',
    category: 'Chuyển kho'
  },
  {
    _id: 'project-3',
    title: 'Bốc Xếp Hàng Container Cảng Cát Lái',
    description: 'Bốc xếp 50 container hàng hóa xuất khẩu tại cảng Cát Lái',
    client: 'Công ty Xuất Nhập Khẩu DEF',
    location: 'Quận 2, TP. Hồ Chí Minh',
    imageUrl: IMAGE_CONFIG.projects.factory1,
    completedDate: '2024-07-25',
    category: 'Bốc xếp container'
  },
  {
    _id: 'project-4',
    title: 'Chuyển Nhà Trọn Gói Khu Vực Thủ Đức',
    description: 'Dịch vụ chuyển nhà trọn gói cho 15 gia đình trong cùng một ngày',
    client: 'Khách hàng cá nhân',
    location: 'Thủ Đức, TP. Hồ Chí Minh',
    imageUrl: IMAGE_CONFIG.projects.moving1,
    completedDate: '2024-11-01',
    category: 'Chuyển nhà'
  },
  {
    _id: 'project-5',
    title: 'Bốc cont bãi, chành xe',
    description: 'Thực hiện bốc xếp và vận chuyển hàng hóa container tại bãi và chành xe, đảm bảo tiến độ giao hàng nhanh chóng, an toàn, đúng lịch trình.',
    client: 'Công ty Logistics ABC',
    location: 'Cảng Cát Lái, TP. Hồ Chí Minh',
    imageUrl: 'https://vantaidongnai.com.vn/wp-content/uploads/xep-container.jpg',
    completedDate: '2024-08-10',
    category: 'Bốc xếp hàng hóa'
  }
];

