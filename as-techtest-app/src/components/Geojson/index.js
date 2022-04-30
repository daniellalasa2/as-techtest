import * as React from "react";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

function Geojson({osmdataset}) {
	

	return (
		<Box
			component="div"
			sx={{
				"& > :not(style)": { m: 1 },
				flexDirection: "row",
				minHeight: "600px",
				overflow: "auto",
				heigtht: "auto",
				bgcolor: "white",
				borderRadius: 3,
			}}>
			
		</Box>
	);
}

export default React.memo(Geojson);
