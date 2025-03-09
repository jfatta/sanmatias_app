import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { useState } from "react";

import RadioGroup from "../components/RadioGroup";

export default function PageWithJSbasedForm() {
  // State to keep track of the selected value in the app
  const [selectedValue, setSelectedValue] = useState("google");

  // Handler function to update the selected value in the app
  const handleSelectedValueChange = (value) => {
    // Update the selected value in the app state
    setSelectedValue(value);
  };

  const searchLote = async (event) => {
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
      window.location.replace(result.MapURL);
    }
  };

  const searchPOI = async (event) => {
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
      window.location.replace(result.MapURL);
    }
  };

  return (
    <div className="container">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7149704259512691"
     crossorigin="anonymous"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />

      </Head>
      <h1 className={styles.title}>www.sanmatias.app</h1>
      
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
      
      
      
      <div className={styles.poiAndFooterContainer}>
      <div className="poiContainer">
        <p className={styles.descriptionPOI}>Otros puntos de interés:</p>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="buffet">
            Restaurante y Proveeduría 🍽️ 🛒
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="sum">
            SUM 🪩
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="adm">
            Administración 🏢
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="plaza2">
            Plaza Área 2 🛝 
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="plaza3">
            Plaza Área 3 🛝 
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="plaza4">
            Plaza Área 4 🛝 
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="servicios">
            Área de Servicios ♻️
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="mailroom">
            Mail Room 📦
          </button>
        </form>
        <form onSubmit={searchPOI}>
          <button type="submit" id="poi" className="udp">
            UDP Maschwitz 🏥
          </button>
        </form>
      </div>
      
   
      <div className="footer">
        Hecho por <a href="https://jorgefatta.dev">jorgefatta.dev</a> y <a href="https://github.com/barrio-san-matias"> vecinos de san matías</a> - v1.3.2 
      </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
