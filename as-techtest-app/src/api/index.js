import axios from "axios";
import config from "./config.js";
const getMapBboxGeoJson = async (position_bounds) => {
    const {min_lon,min_lat,max_lon,max_lat} = position_bounds;
	return axios({
		method: "get",
		url: config.BASE_URL + "map",
		params: {
			bbox: `${min_lon},${min_lat},${max_lon},${max_lat}`,
		},
	}).then(res=>res.data);
};

export { getMapBboxGeoJson };
