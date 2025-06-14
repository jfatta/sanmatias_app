import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Info.module.css";

export default function BarrioInfo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Información del Barrio San Matías Escobar | Ubicación, Servicios y Mapa</title>
        <meta name="description" content="Toda la información sobre el Barrio Privado San Matías en Escobar, Buenos Aires. Ubicación, servicios, amenities, lotes disponibles y mapa interactivo." />
        <meta name="keywords" content="barrio san matias escobar, san matias escobar buenos aires, country club escobar, barrio privado escobar, lotes san matias, mapa san matias" />
        <link rel="canonical" href="https://sanmatias.app/info" />
      </Head>

      <main className={styles.main}>
        <h1>Barrio Privado San Matías - Escobar, Buenos Aires</h1>
        
        <section className={styles.section}>
          <h2>Ubicación</h2>
          <p>
            El Barrio Privado San Matías se encuentra ubicado en Escobar, Provincia de Buenos Aires, Argentina.
            Es un exclusivo country club que ofrece un estilo de vida único en la zona norte del Gran Buenos Aires.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Servicios y Amenities</h2>
          <ul>
            <li>UDP Maschwitz - Centro médico</li>
            <li>SUM - Salón de Usos Múltiples</li>
            <li>Cancha de Fútbol</li>
            <li>Restaurante y Proveeduría</li>
            <li>Mail Room - Servicio de correspondencia</li>
            <li>Plazas en diferentes áreas del barrio</li>
            <li>Área de Servicios</li>
            <li>Gerencia administrativa</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Mapa Interactivo</h2>
          <p>
            Utiliza nuestro <Link href="/">mapa interactivo</Link> para encontrar cualquier lote o servicio 
            dentro del Barrio San Matías. La herramienta te permite navegar fácilmente por todas las 
            áreas del country club.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contacto</h2>
          <p>
            Para más información sobre lotes disponibles, servicios o consultas generales sobre el 
            Barrio Privado San Matías en Escobar, contacta directamente con la gerencia del country.
          </p>
        </section>

        <Link href="/" className={styles.backLink}>
          ← Volver al Mapa
        </Link>
      </main>
    </div>
  );
}
