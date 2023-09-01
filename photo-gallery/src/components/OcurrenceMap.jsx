import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OccurrenceMap = () => {
    // All birds (Aves) by small hexagons

    const url = "https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=212&style=classic.point"

    return (
        <MapContainer center={[0, 0]} zoom={1} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url={url}
            attribution='&copy; <a href="https://www.gbif.org/">GBIF</a> contributors'
          />
        </MapContainer>
      );

}

export default OccurrenceMap;