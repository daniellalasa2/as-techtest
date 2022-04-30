import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Coordinates({ onCoordsChange }) {
	const [coords, setCoords] = React.useState({ lat: 0, lng: 0 });

	const handleCoords = (coordType, value) => {
		if (typeof value === "Number") {
			if (coordType === "lat") setCoords({ ...coords, lat: value });
			else if (coordType === "lng") setCoords({ ...coords, lng: value });
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
				label="Lat"
				variant="outlined"
				sx={{ flexGrow: "1" }}
				value={coords.lat}
				onChange={(e) => handleCoords("lat", e.target.value)}
			/>
			<TextField
				size="small"
				id="node-name"
				label="Lng"
				variant="outlined"
				sx={{ flexGrow: "1" }}
				value={coords.lng}
				onChange={(e) => handleCoords("lng", e.target.value)}
			/>
			<Button
				size="small"
				variant="contained"
				sx={{ flexGrow: "1", boxShadow: 0 }}
				onClick={onCoordsChange.call(coords)}>
				Submit
			</Button>
		</Box>
	);
}

export default React.memo(Coordinates);
