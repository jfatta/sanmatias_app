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
    <div className={styles.container}>      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=geist-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />        <title>Mapa de San Matías - Maschwitz, Escobar, Argentina</title>
        <meta name="description" content="Mapa interactivo de San Matías en Maschwitz, Escobar. Encuentra lotes, ubicaciones y puntos de interés de forma rápida y sencilla." />
        <meta name="keywords" content="mapa san matias, san matias maschwitz, escobar, mapa interactivo, lotes, argentina, zona norte, buenos aires" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="San Matías, Maschwitz, Escobar, Buenos Aires, Argentina" />
        <meta name="geo.position" content="-34.3607673943;-58.750968761" />
        <meta name="ICBM" content="-34.3607673943, -58.750968761" />
        <meta property="og:title" content="Mapa de San Matías - Maschwitz, Escobar" />
        <meta property="og:description" content="Mapa interactivo de San Matías en Maschwitz, Escobar. Encuentra lotes y ubicaciones de forma sencilla." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mapa de San Matías - Argentina" />
        <meta name="twitter:description" content="Mapa interactivo de San Matías en Maschwitz, Escobar, Argentina." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Mapa de San Matías",
              "description": "Mapa interactivo de San Matías en Maschwitz, Escobar. Encuentra lotes, ubicaciones y puntos de interés de forma rápida y sencilla.",
              "url": "https://sanmatias.app",
              "applicationCategory": "MapApplication",
              "operatingSystem": "Web",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.3607673943,
                "longitude": -58.750968761
              },
              "areaServed": {
                "@type": "Place",
                "name": "San Matías, Maschwitz, Escobar, Buenos Aires, Argentina",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Maschwitz",
                  "addressRegion": "Buenos Aires",
                  "addressCountry": "AR"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "ARS"
              }
            })
          }}
        />
      </Head>        <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            sanmatias<span className={styles.appSuffix}>.app</span>
          </h1>          <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀' : '☾'}
          </button>
        </div>          <div className={styles.subtitle}>
          Mapa interactivo de San Matías, Maschwitz, Escobar - Buenos Aires, Argentina
        </div>
        <div className={styles.authorCredit}>
          Hecho por <a href="https://jorgefatta.dev">jorgefatta.dev</a> - v1.4.0 
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
            <p className={styles.descriptionPOI}>Otros puntos de interés:</p>
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
