import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { useState, useEffect } from "react";

import RadioGroup from "../components/RadioGroup";

export default function PageWithJSbasedForm() {
  // State to keep track of the selected value in the app
  const [selectedValue, setSelectedValue] = useState("google");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSafetyOverlay, setShowSafetyOverlay] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  // Auto-hide overlay after 5 seconds when it's shown
  useEffect(() => {
    if (showSafetyOverlay) {
      const hideTimer = setTimeout(() => {
        setShowSafetyOverlay(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }
  }, [showSafetyOverlay]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handler function to update the selected value in the app
  const handleSelectedValueChange = (value) => {
    // Update the selected value in the app state
    setSelectedValue(value);
  };  const searchLote = async (event) => {
    event.preventDefault();
    // Do something with the selected value in the app
    console.log("Selected value in the app:", selectedValue);

    const response = await fetch(
      `/api/map?lote=${event.target.lote.value}&map-type=${selectedValue}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      },
    );

    if (!response.ok) {
      const text = await response.text();
      window.alert(text);
    } else {
      const result = await response.json();
      
      // Always show safety overlay before redirecting to map
      setShowSafetyOverlay(true);
      setTimeout(() => {
        window.location.href = result.MapURL;
      }, 5000); // 5 seconds delay to match auto-hide
    }
  };  const searchPOI = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `/api/map?poi=${event.target.poi.className}&map-type=${selectedValue}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      },
    );

    if (!response.ok) {
      const text = await response.text();
      window.alert(text);
    } else {
      const result = await response.json();
      
      // Always show safety overlay before redirecting to map
      setShowSafetyOverlay(true);
      setTimeout(() => {
        window.location.href = result.MapURL;
      }, 5000); // 5 seconds delay to match auto-hide
    }
  };
  return (
    <div className={styles.container}>      <Head>        <title>San Matías Escobar - Mapa del Barrio Cerrado | Lotes y Ubicaciones</title>
        <meta name="description" content="Mapa interactivo del Barrio Cerrado San Matías en Escobar, Buenos Aires. Herramienta desarrollada por vecinos para encontrar lotes y ubicaciones fácilmente." />
        <meta name="keywords" content="San Matías, Escobar, Buenos Aires, barrio cerrado, mapa, lotes, ubicaciones, argentina, san matias escobar, mapa barrio san matias, lotes san matias, barrio cerrado escobar, como llegar san matias" />
        <meta name="author" content="Jorge Fatta - jorgefatta.dev" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanmatias.app/" />        <meta property="og:title" content="San Matías Escobar - Mapa del Barrio Cerrado" />
        <meta property="og:description" content="Mapa interactivo del Barrio Cerrado San Matías en Escobar, Buenos Aires. Herramienta desarrollada por vecinos." />
        <meta property="og:image" content="https://sanmatias.app/logosm.png" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="San Matías App" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sanmatias.app/" />        <meta property="twitter:title" content="San Matías Escobar - Mapa del Barrio Cerrado" />
        <meta property="twitter:description" content="Mapa interactivo del Barrio Cerrado San Matías en Escobar, Buenos Aires. Herramienta desarrollada por vecinos." />
        <meta property="twitter:image" content="https://sanmatias.app/logosm.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sanmatias.app/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logosm.png" />
          {/* Geographic targeting - más específico */}
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Escobar, Buenos Aires, Argentina" />
        <meta name="geo.position" content="-34.3533;-58.7958" />
        <meta name="ICBM" content="-34.3533, -58.7958" />
        
        {/* Información adicional para búsquedas locales */}
        <meta name="locality" content="Escobar" />
        <meta name="region" content="Buenos Aires" />
        <meta name="country" content="Argentina" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",              "name": "San Matías App",
              "alternateName": "Barrio Cerrado San Matías",
              "url": "https://sanmatias.app",
              "description": "Mapa interactivo del Barrio Cerrado San Matías en Escobar, Buenos Aires. Herramienta desarrollada por vecinos para encontrar lotes y ubicaciones.",
              "publisher": {
                "@type": "Person",
                "name": "Jorge Fatta",
                "url": "https://jorgefatta.dev"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sanmatias.app/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "about": {
                "@type": "Place",
                "name": "Barrio Cerrado San Matías",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Escobar",
                  "addressRegion": "Buenos Aires",
                  "addressCountry": "Argentina"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "-34.3533",
                  "longitude": "-58.7958"
                }
              }
            })
          }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=geist-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>        <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            San Matías<span className={styles.appSuffix}>.app</span>
          </h1>
          <h2 className={styles.subtitle}>Barrio Cerrado en Escobar, Buenos Aires</h2>
          
          <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀' : '☾'}
          </button>
        </div>        <div className={styles.description}>          <p>Encuentra ubicaciones y lotes en el Barrio Cerrado San Matías de forma rápida y sencilla. 
          Herramienta desarrollada por vecinos para vecinos en Escobar, Provincia de Buenos Aires, Argentina.</p>
        </div>
          
        <div className={styles.subtitle}>
          Desarrollado por <a href="https://jorgefatta.dev">Jorge Fatta</a> - v1.4.0 
        </div>
      
        <div className={styles.mapsAndLoteSearchContainer}>
          <div className="mapTypes">
            <RadioGroup
              selectedOption={selectedValue}
              onOptionChange={handleSelectedValueChange}
            />
          </div>

          <div className={styles.loteSearchTitle}>
            Ir a un lote:
          </div>

          <form onSubmit={searchLote} className={styles.searchLoteInputAndButton}>
            <input
              type="number"
              id="lote"
              name="lote"
              required
              placeholder="número"
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
        
        <div className={styles.poiAndFooterContainer}>          <div className="poiContainer">
            <p className={styles.descriptionPOI}>Puntos de interés en San Matías:</p>
            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="udp">
                ❤️‍🩹 UDP Maschwitz
              </button>
            </form>            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="sum">
                🎂 SUM
              </button>
            </form>
            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="buffet">
                ⚽ Cancha de Fútbol
              </button>
            </form>            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="buffet">
                🍽️ Restaurante y Proveeduría
              </button>
            </form>            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="mailroom">
                📦 Mail Room
              </button>
            </form>            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="plaza2">
                🛝 Plaza Área 2
              </button>
            </form>
            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="plaza3">
                🛝 Plaza Área 3
              </button>
            </form>            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="plaza4">
                🛝 Plaza Área 4
              </button>
            </form>            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="servicios">
                ♻️ Área de Servicios
              </button>
            </form>            <form onSubmit={searchPOI}>
              <button type="submit" id="poi" className="adm">
                👔 Gerencia
              </button>
            </form>
          </div>
        </div>      </main>
      
      {/* Safety Overlay */}
      {showSafetyOverlay && (
        <div className={styles.safetyOverlay}>
          <div className={styles.safetyMessage}>
            <div className={styles.safetyIcon}>🚗</div>
            <h2>Por favor conduzca con cuidado</h2>
            <div className={styles.loadingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
