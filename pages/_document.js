import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es-AR">
      <Head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0070f3" />
        <meta name="msapplication-TileColor" content="#0070f3" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="San Matías" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
