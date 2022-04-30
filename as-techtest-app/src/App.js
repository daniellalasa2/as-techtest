import * as React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Coordinates from "./components/Coordinates";
import Geojson from "./components/Geojson";
import Box from "@mui/material/Box";
import OsmMap from "./components/Geojson";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function App() {
	return (
		<div className="App">
			<Container maxWidth="lg">
				<Box
					component="div"
					maxWidth="lg"
					sx={{
						"& > :not(style)": { m: 1 },
						flexDirection: "row",
						minHeight: "600px",
						heigtht: "auto",
						bgcolor: grey[200],
						boxShadow: 3,
						border: "1px " + grey[400] + " solid",
						borderRadius: 3,
						marginTop: 3,
					}}>
					<OsmMap />
					<Coordinates
						onCoordsChange={(coords) => console.log("coordinates: ", coords)}
					/>
					{/* <Typography variant="body" ></Typography> */}
					<Geojson
					
					/>
				</Box>
			</Container>
		</div>
	);
}

export default App;
