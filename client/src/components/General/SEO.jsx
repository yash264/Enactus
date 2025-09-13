import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Enactus MNNIT Allahabad",
  description = "Enactus MNNIT Allahabad - Empowering communities through entrepreneurial action. Student-led social entrepreneurship and innovation at MNNIT Allahabad.",
  keywords = "Enactus MNNIT, Social Entrepreneurship, Student Projects, Innovation, MNNIT Allahabad, Social Impact, Sustainable Development, Community Empowerment",
  image = "https://enactus-mnnit2k25.netlify.app/assets/logo/Enactus.png",
  url = "https://enactus-mnnit2k25.netlify.app",
  type = "website",
  author = "Enactus MNNIT Allahabad",
  locale = "en_US",
  siteName = "Enactus MNNIT Allahabad"
}) => {
  const fullTitle = title === "Enactus MNNIT Allahabad" ? title : `${title} | Enactus MNNIT Allahabad`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:creator" content="@EnactusMNNIT" />
      <meta name="twitter:site" content="@EnactusMNNIT" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Enactus MNNIT" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Enactus MNNIT Allahabad",
          "url": "https://enactus-mnnit2k25.netlify.app",
          "logo": "https://enactus-mnnit2k25.netlify.app/assets/logo/Enactus.png",
          "description": "Student-led social entrepreneurship organization at MNNIT Allahabad empowering communities through entrepreneurial action.",
          "foundingDate": "2015",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@enactusmnnit.org",
            "contactType": "General Inquiry"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Prayagraj",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "India"
          },
          "sameAs": [
            "https://www.instagram.com/enactusmnnit",
            "https://www.linkedin.com/company/enactus-mnnit",
            "https://www.facebook.com/enactusmnnit"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
