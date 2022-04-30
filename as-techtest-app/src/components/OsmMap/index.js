import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function OsmMap({ lat, lng, onMapCoordsChange }) {
	return (
		<MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={true}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={[0, 0]}>
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
