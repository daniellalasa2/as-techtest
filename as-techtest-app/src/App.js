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
  const [coords,setCoords] = React.useState({lat:52.52,lng:13.4});
  const handleCoordsChange = (data)=>{
      setCoords(data);
  }
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
						heigtht: "auto",
						bgcolor: grey[200],
						boxShadow: 3,
						border: "1px " + grey[400] + " solid",
						borderRadius: 3,
						marginTop: 3,
					}}>
					<Typography variant="subtitle2" >Click on your desired location to display coordinates and GeoJson features if availableMap</Typography>
					<OsmMap onMapCoordsChange={handleCoordsChange} position={coords}/>
					<Typography variant="subtitle2" >Enter desired coordinates to display the GeoJson features of the location, map marker and coordinates are sync with eachother</Typography>
					<Coordinates
						onCoordsChange={handleCoordsChange}
            position={coords}
            button={{text:"Display On Map"}}
					/>
					<Typography variant="body" style={{fontWeight:"bold"}}>GeoJson Features Table</Typography>
					<Geojson coordinates={coords} boundsTolerance={0.0003}/>
				</Box>
			</Container>
		</div>
	);
}

export default App;
