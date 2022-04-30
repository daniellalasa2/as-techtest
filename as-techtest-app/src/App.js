import * as React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Toolbar from "./components/Toolbar";
import Geojson from "./components/Geojson";
import Box from "@mui/material/Box";
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
						boxShadow:3,
						border:"1px "+grey[400]+" solid",
						borderRadius:3,
            marginTop:3
					}}>
					<Toolbar onNodeCreate={(node)=>handleNodeChanges(node,"new")}/>
          {/* <Typography variant="body" ></Typography> */}
					<Geojson nodesScheme = {nodesScheme} onNodesSchemeChanged = {(node)=>handleNodeChanges(node,"update")}/>
				</Box>
			</Container>
		</div>
	);
}

export default App;
