import React from "react";
import PropTypes from "prop-types";
import {
	MapContainer,
	TileLayer,
	Marker,
	useMap,
	useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import markerIconImg from "./marker.png";
function OsmMap({ position, onMapCoordsChange }) {
	const [marker, setMarker] = React.useState(position);
	const markerIcon = new L.icon({
		iconUrl: markerIconImg,
		iconSize: [64, 64],
		iconAnchor: [32, 64],
	});
	const MapEventHandler = () => {
		const map = useMap();
        React.useEffect(()=>{
            map.flyTo(marker);
        },[marker]);
		useMapEvents({
            click: (e) => {
                const { lat, lng } = e.latlng;
				setMarker({ lat, lng });
			},
		});
		return null;
	};

	React.useEffect(() => {
		onMapCoordsChange(marker);
	}, [marker]);

    React.useEffect(()=>{
        setMarker(position);
    },[position]);

	return (
		<div>
			<MapContainer
				center={marker}
				zoom={11}
				scrollWheelZoom={true}
				minZoom={3}
                maxBounds={[[-90,-180],[90,180]]}
                >
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapEventHandler />
				<Marker icon={markerIcon} position={marker} />
			</MapContainer>
		</div>
	);
}

OsmMap.defaultProps = {
	position: { lat: 52.52, lng: 13.4 }, // Berlin
};

OsmMap.propTypes = {
	position: PropTypes.shape({
		lat: PropTypes.number,
		lng: PropTypes.number,
	}),
	onMapCoordsChange: PropTypes.func,
};

export default OsmMap;
