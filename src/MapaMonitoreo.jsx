import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapaMonitoreo.css'; // Asegúrate de crear un archivo CSS para los estilos del mapa

const MapaMonitoreo = ({ puntos = [] }) => {
  const position = [21.899999, -102.296667]; // Coordenadas predeterminadas para el centro del mapa

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {puntos.length > 0 ? (
        puntos.map((punto, index) => (
          punto.lat && punto.lon && !isNaN(punto.lat) && !isNaN(punto.lon) ? (
            <Marker key={index} position={[punto.lat, punto.lon]}>
              <Popup>{punto.descripcion || 'Sin descripción'}</Popup>
            </Marker>
          ) : null
        ))
      ) : (
        <Marker position={position}>
          <Popup>No se encontraron puntos para mostrar.</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapaMonitoreo;
