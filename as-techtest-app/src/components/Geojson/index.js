import * as React from "react";
import Box from "@mui/material/Box";
import osmtogeojson from "osmtogeojson";
import { getMapBboxGeoJson } from "../../api";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import useApiErrorHandler from "../../hooks/useApiErrorHandler";

function Geojson({ coordinates, boundsTolerance }) {
	const [geoJsonData, setGeoJsonData] = React.useState({});
	const [tableRows, setTableRows] = React.useState([]);

	const bboxCalculator = (_coordinates) => {
		return {
			min_lon: _coordinates.lng,
			min_lat: _coordinates.lat,
			max_lon: _coordinates.lng + boundsTolerance,
			max_lat: _coordinates.lat + boundsTolerance,
		};
	};

	const columns = [
		{ field: "name", headerName: "Name", width: 200 },
		{
			field: "value",
			headerName: "Value",
			width: 300,
		},
	];

	//Side effects

	React.useEffect(() => {
		const _bbox = bboxCalculator(coordinates);
		getMapBboxGeoJson(_bbox)
			.then((res) => {
				console.log("OSM: ", osmtogeojson(res));
				setGeoJsonData(osmtogeojson(res));
			})
			.catch((e) => {
				// const err = useApiErrorHandler(e.response.status);
			});
	}, [coordinates]);

	React.useEffect(() => {
		const rows = [];
		let _id = 0;
		if (Object.entries(geoJsonData).length > 0) {
			//The main part of solution is in this scope
			//latest object is the closest location to the selected coordinate so I'll grab it!
			//seems this problem has more better ways, but for the sake of time I couldn't give it more time to improve it
			//this solution is a sort of shallow one :D
			const len = geoJsonData.features.length;
			const features = geoJsonData.features[len - 1];
			const _props =
				features && features.hasOwnProperty("properties")
					? features.properties
					: {};
			for (const key in _props) {
				rows.push({
					name: key,
					value: _props[key],
					id: _id,
				});
				_id++;
			}
		}

		setTableRows(rows);
	}, [geoJsonData]);

	React.useEffect(() => {
		console.log(tableRows);
	}, [tableRows]);
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
			<div style={{ height: 700, width: "98%" }}>
				<DataGrid rows={tableRows} columns={columns} density="compact" autoHeight={true}/>
			</div>
		</Box>
	);
}

Geojson.defaultProps = {
	coordinates: {
		lat: 0,
		lng: 0,
	},
	boundsTolerance: 0.002,
};

Geojson.propTypes = {
	coordinates: PropTypes.shape({
		lat: PropTypes.number,
		lng: PropTypes.number,
	}),
	boundsTolerance: PropTypes.number,
};

export default React.memo(Geojson);
