import * as React from "react";
import Box from "@mui/material/Box";
import osmtogeojson from "osmtogeojson";
import { getMapBboxGeoJson } from "../../api";
import PropTypes from "prop-types";
import { DataGridPro } from "@mui/x-data-grid-pro";
import useApiErrorHandler from "../../hooks/useApiErrorHandler";

function Geojson({ coordinates, boundsTolerance }) {
	const [osmData, setOsmData] = React.useState({});

	const bboxCalculator = (_coordinates) => {
		return {
			min_lon: _coordinates.lng - boundsTolerance,
			min_lat: _coordinates.lat - boundsTolerance,
			max_lon: _coordinates.lng + boundsTolerance,
			max_lat: _coordinates.lat + boundsTolerance,
		};
	};

	React.useEffect(() => {
		const _bbox = bboxCalculator(coordinates);
		console.log(_bbox);
		getMapBboxGeoJson(_bbox)
			.then((res) => {
				console.log("OSM: ", osmtogeojson(res));
				setOsmData(JSON.stringify(osmtogeojson(res)));
			})
			.catch((e) => {
				// const err = useApiErrorHandler(e.response.status);
			});
	}, [coordinates]);

	const rows = [
		{
		  hierarchy: ['Sarah'],
		  jobTitle: 'Head of Human Resources',
		  recruitmentDate: new Date(2020, 8, 12),
		  id: 0,
		}];

	
	const columns = [
		{ field: 'jobTitle', headerName: 'Job Title', width: 200 },
		{
		  field: 'recruitmentDate',
		  headerName: 'Recruitment Date',
		  type: 'date',
		  width: 150,
		},
	  ];

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
			<DataGridPro
				treeData
				rows={rows}
				columns={columns}
				getTreeDataPath={getTreeDataPath}
			/>
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
