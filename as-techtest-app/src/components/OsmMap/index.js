import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function OsmMap({ lat, lng, onMapCoordsChange }) {
	return (
		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}

OsmMap.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number,
	onMapCoordsChange: PropTypes.func,
};

export default OsmMap;
