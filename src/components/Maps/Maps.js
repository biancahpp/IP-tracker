import { React } from 'react';
import './styles.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Maps(latitude, longitude) {
  return (
    <div className="wrapperMap">
      <MapContainer center={[latitude, longitude]} zoom={15} className="mapStyles">
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}
