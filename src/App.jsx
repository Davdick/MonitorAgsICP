import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import MapaMonitoreo from './MapaMonitoreo'; 
import './App.css'; // Importa un archivo CSS para estilos

const MonitoreoApp = () => {
  const [puntos, setPuntos] = useState([]);

  useEffect(() => {
    const cargarCSV = async () => {
      try {
        const response = await fetch('/data/puntos_monitoreo.csv'); 
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);

        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const data = result.data
              .filter(punto => punto.lat && punto.lon)
              .map(punto => ({
                lat: parseFloat(punto.lat) || 0,
                lon: parseFloat(punto.lon) || 0,
                descripcion: punto.descripcion || "Punto sin descripción"
              }));

            console.log("Puntos cargados:", data);
            setPuntos(data);
          }
        });
      } catch (error) {
        console.error("Error al cargar o procesar el CSV:", error);
      }
    };

    cargarCSV();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mapa de Monitoreo de C5 Aguascalientes</h1>
        <p>Visualiza los puntos de monitoreo en tiempo real.</p>
      </header>
      <MapaMonitoreo puntos={puntos} />
      <footer className="app-footer">
        <p>© 2024 C5 Aguascalientes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default MonitoreoApp;
