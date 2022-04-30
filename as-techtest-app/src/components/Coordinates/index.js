import * as React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Coordinates({ onCoordsChange, button }) {
	const [lat, setLat] = React.useState("");
	const [lng, setLng] = React.useState("");

	const handleCoords = (e) => {
		const { name, value } = e.target;
		if (
			name === "lat" &&
			value.length <= 11 &&
			Number(value) <= 90 &&
			Number(value) >= -90
		) {
			setLat(value);
		} else if (
			name === "lng" &&
			value.length <= 12 &&
			Number(value) <= 180 &&
			Number(value) >= -180
		) {
			setLng(value);
		}
	};

	return (
		<Box
			component="div"
			sx={{
				"& > :not(style)": { m: 1 },
				padding: 3,
				display: "flex",
				flexDirection: "row",
			}}>
			<TextField
				size="small"
				id="node-name"
				label="Latitude"
				variant="outlined"
				sx={{ flexGrow: "1" }}
				value={lat}
				type="text"
				name="lat"
				onChange={handleCoords}
			/>
			<TextField
				size="small"
				id="node-name"
				label="Langitude"
				variant="outlined"
				sx={{ flexGrow: "1" }}
				value={lng}
				type="text"
				name="lng"
				onChange={handleCoords}
			/>
			<Button
				size={button.size}
				disabled={button.disabled}
				variant="contained"
				sx={{ flexGrow: "1", boxShadow: 0 }}
				onClick={() => onCoordsChange({ lat: Number(lat), lng: Number(lng) })}>
				{button.text}
			</Button>
		</Box>
	);
}

Coordinates.defaultProps = {
	button: { text: "Submit", size: "small", disabled: false },
};

Coordinates.propTypes = {
	onCoordsChange: PropTypes.func,
	button: PropTypes.shape({
		text: PropTypes.string,
		size: PropTypes.oneOf(["small", "medium", "large"]),
		disabled: PropTypes.bool,
	}),
};

export default React.memo(Coordinates);
