import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Coordinates({ onCoordsChange }) {
	const [coords, setCoords] = React.useState({ lat: 0, lng: 0 });

	const handleCoords = (coordType, value) => {
		console.log("coords: ",coordType,value);
		
		if (typeof value === "number" && value.toString().length <= 12) {
			if (coordType === "lat") setCoords({ ...coords, lat: value });
			else if (coordType === "lng") setCoords({ ...coords, lng: value });
			
		}
	};

	React.useEffect(()=>{
		console.log("coords state:",coords);
	},[coords]);
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
				type="number"
				value={coords.lat}
				onChange={(e) => handleCoords("lat", Number(e.target.value))}
			/>
			<TextField
				size="small"
				id="node-name"
				label="Lng"
				variant="outlined"
				sx={{ flexGrow: "1" }}
				value={coords.lng}
				type="number"
				onChange={(e) => handleCoords("lng", Number(e.target.value))}
			/>
			<Button
				size="small"
				variant="contained"
				sx={{ flexGrow: "1", boxShadow: 0 }}

				onClick={()=>onCoordsChange(coords)}>
				Submit
			</Button>
		</Box>
	);
}

export default React.memo(Coordinates);
