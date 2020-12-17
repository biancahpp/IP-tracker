import { React } from 'react';
import './styles.css';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import ChangeView from '../ChangeView/ChangeView';
import MarkerIcon from '../../images/icon-location.svg';

export default function Maps(details) {
  const mapMarker = new Icon({
    iconUrl: MarkerIcon,
    iconSize: [40, 50],
  });
  return (
    <div className="wrapperMap">
      <MapContainer center={[details.details.location.lat, details.details.location.lng]} zoom={15} className="mapStyles">
        <ChangeView center={[details.details.location.lat, details.details.location.lng]} />
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[details.details.location.lat, details.details.location.lng]}
          icon={mapMarker}
        />
      </MapContainer>
    </div>
  );
}
