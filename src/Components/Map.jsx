import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const calculateCenter = (locations) => {
  let latSum = 0;
  let lngSum = 0;
  locations.forEach((location) => {
    latSum += location.latitude;
    lngSum += location.longitude;
  });
  return [latSum / locations.length, lngSum / locations.length];
};

function Map({ markers }) {
  const center = calculateCenter(markers);
  const positronUrl =
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

  return (
    <MapContainer
      center={center}
      zoom={6}
      style={{ height: '60vh', width: '90vw' }}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      boxZoom={false}
      keyboard={false}
    >
      <TileLayer
        url={positronUrl}
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        interactive={false}
      />
      {markers.map((marker) => (
        <Marker
          position={[marker.latitude, marker.longitude]}
          key={marker.name}
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
