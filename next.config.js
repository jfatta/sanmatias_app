/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // SEO optimizations
  compress: true,
  
  // Headers for better SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ]
  },
    // Rewrites for better URL structure
  async rewrites() {
    return [
      {
        source: '/mapa-san-matias-escobar',
        destination: '/',
      },
      {
        source: '/barrio-cerrado-san-matias',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
