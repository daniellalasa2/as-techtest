import * as React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Coordinates from "./components/Coordinates";
import Geojson from "./components/Geojson";
import Box from "@mui/material/Box";
import OsmMap from "./components/OsmMap";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function App() {
	const [coords, setCoords] = React.useState({ lat: 52.52, lng: 13.4 });
	const handleCoordsChange = (data) => {
		setCoords(data);
	};
	return (
		<div className="App">
			<Container maxWidth="lg">
				<Box
					component="div"
					maxWidth="lg"
					sx={{
						"& > :not(style)": { m: 2 },
						flexDirection: "row",
						minHeight: "600px",
						height: "auto",
						bgcolor: grey[200],
						boxShadow: 3,
						paddingTop:2,
						border: "1px " + grey[400] + " solid",
						borderRadius: 3,
						marginTop: 3,
					}}>
					<OsmMap onMapCoordsChange={handleCoordsChange} position={coords} />
					<Coordinates
						onCoordsChange={handleCoordsChange}
						position={coords}
						button={{ text: "Display On Map" }}
					/>
					<Geojson coordinates={coords} boundsTolerance={0.0003} />
				</Box>
			</Container>
		</div>
	);
}

export default App;
