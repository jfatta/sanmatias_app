import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Location.module.css";

export default function LocationPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ubicación San Matías Escobar | Cómo llegar al Barrio Privado</title>
        <meta name="description" content="Ubicación exacta del Barrio Privado San Matías en Escobar, Buenos Aires. Direcciones, rutas de acceso y cómo llegar desde Capital Federal y zona norte." />
        <meta name="keywords" content="ubicacion san matias escobar, como llegar san matias, direccion san matias, ruta san matias, barrio privado escobar ubicacion" />
        <link rel="canonical" href="https://sanmatias.app/ubicacion" />
        
        {/* Structured data for location */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "Barrio Privado San Matías",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ruta 25 km 45.5",
                "addressLocality": "Escobar",
                "addressRegion": "Buenos Aires",
                "postalCode": "1625",
                "addressCountry": "Argentina"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-34.3533",
                "longitude": "-58.7958"
              },
              "url": "https://sanmatias.app",
              "telephone": "+54-11-xxxx-xxxx",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Seguridad 24hs"
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Cancha de Fútbol"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "SUM"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "UDP Maschwitz"
                }
              ]
            })
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1>Ubicación del Barrio Privado San Matías</h1>
        
        <section className={styles.section}>
          <h2>Dirección</h2>
          <address className={styles.address}>
            <strong>Barrio Privado San Matías</strong><br />
            Ruta 25 km 45.5<br />
            Escobar (1625)<br />
            Buenos Aires, Argentina
          </address>
        </section>

        <section className={styles.section}>
          <h2>Cómo llegar desde Capital Federal</h2>
          <div className={styles.directions}>
            <h3>En auto:</h3>
            <ol>
              <li>Tomar Panamericana (Ruta 9) hacia zona norte</li>
              <li>Continuar por Panamericana hasta Km 50</li>
              <li>Tomar salida hacia Escobar/Matheu</li>
              <li>Seguir por Ruta 25 hasta km 45.5</li>
              <li>Ingreso a San Matías sobre la derecha</li>
            </ol>
            
            <h3>En transporte público:</h3>
            <ul>
              <li>Tren Mitre ramal Tigre hasta estación Maschwitz</li>
              <li>Desde Maschwitz: taxi o remis hasta San Matías (10 minutos aprox.)</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Referencias cercanas</h2>
          <ul>
            <li>A 5 minutos de Maschwitz centro</li>
            <li>A 10 minutos de Escobar centro</li>
            <li>A 15 minutos de Pilar</li>
            <li>A 45 minutos de Capital Federal</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Servicios en la zona</h2>
          <ul>
            <li>Centros comerciales en Escobar y Pilar</li>
            <li>Hospitales y clínicas en zona norte</li>
            <li>Colegios bilingües</li>
            <li>Universidades (UADE, UCA)</li>
          </ul>
        </section>

        <div className={styles.navigation}>
          <Link href="/" className={styles.backLink}>
            ← Volver al Mapa
          </Link>
          <Link href="/info" className={styles.infoLink}>
            Información del Barrio →
          </Link>
        </div>
      </main>
    </div>
  );
}
