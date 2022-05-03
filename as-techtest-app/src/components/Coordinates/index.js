import * as React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Coordinates({ onCoordsChange, button, position }) {
	const [coords, setCoords] = React.useState(position);

	React.useEffect(() => {
		setCoords(position);
	}, [position]);

	const handleCoords = (e) => {
		const { name, value } = e.target;
		if (name === "lat" && Number(value) <= 90 && Number(value) >= -90) {
			setCoords({ ...coords, lat: value });
		} else if (
			name === "lng" &&
			Number(value) <= 180 &&
			Number(value) >= -180
		) {
			setCoords({ ...coords, lng: value });
		}
	};

	return (
		<>
			<Typography variant="body" style={{ fontWeight: "bold", marginTop: 100 }}>
			<br />
			<br />
				Coordinates
			</Typography>
			<Typography variant="subtitle2">
				Enter desired coordinates to display the GeoJson features of the
				location, map marker and coordinates are sync with eachother
			</Typography>
			<Box
				component="div"
				sx={{
					"& > :not(style)": { m: 1 },
					paddingLeft: 3,
					paddingRight: 3,
					paddingBottom: 3,
					display: "flex",
					flexDirection: "row",
				}}>
				<TextField
					size="small"
					id="node-name"
					label="Latitude"
					variant="outlined"
					sx={{ flexGrow: "1" }}
					value={coords.lat}
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
					value={coords.lng}
					type="text"
					name="lng"
					onChange={handleCoords}
				/>
				<Button
					size={button.size}
					disabled={button.disabled}
					variant="contained"
					sx={{ flexGrow: "1", boxShadow: 0 }}
					onClick={() =>
						onCoordsChange({ lat: Number(coords.lat), lng: Number(coords.lng) })
					}>
					{button.text}
				</Button>
			</Box>
		</>
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
	position: PropTypes.shape({
		lat: PropTypes.number,
		lng: PropTypes.number,
	}),
};

export default React.memo(Coordinates);
