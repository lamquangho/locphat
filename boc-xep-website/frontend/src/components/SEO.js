import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  siteName = 'Bốc Xếp Nhanh 24h',
  locale = 'vi_VN'
}) => {
  const defaultTitle = 'Bốc Xếp Nhanh 24h - Dịch Vụ Bốc Xếp Chuyên Nghiệp TPHCM';
  const defaultDescription = 'Dịch vụ bốc xếp chuyên nghiệp, chuyển nhà văn phòng trọn gói, cho thuê nhân công uy tín tại TPHCM. Phục vụ 24/7, giá cả hợp lý, đội ngũ chuyên nghiệp.';
  const defaultKeywords = 'bốc xếp, bốc xếp hàng hóa, dịch vụ bốc xếp, chuyển nhà, chuyển văn phòng, cho thuê nhân công, bốc xếp TPHCM, vận chuyển hàng hóa, bốc xếp container, bốc xếp kho';
  const defaultImage = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200';
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://locphat-1.onrender.com';

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaImage = image || defaultImage;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Structured Data (JSON-LD) for LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bốc Xếp Nhanh 24h',
    description: metaDescription,
    url: siteUrl,
    telephone: '0773800431',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'TP. Hồ Chí Minh',
      addressCountry: 'VN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.8231',
      longitude: '106.6297'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    areaServed: {
      '@type': 'City',
      name: 'TP. Hồ Chí Minh'
    },
    serviceType: [
      'Dịch vụ bốc xếp',
      'Chuyển nhà',
      'Chuyển văn phòng',
      'Cho thuê nhân công',
      'Vận chuyển hàng hóa'
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Bốc Xếp Nhanh 24h" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Vietnamese" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;

