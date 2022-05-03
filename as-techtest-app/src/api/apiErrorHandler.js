export default function apiErrorHandler (errorCode){
	let errorObj = { code: 0, message: "" };
	switch (errorCode) {
		case 400:
			errorObj.code = 400;
			errorObj.message = "Bad Request";
			break;
		case 401:
			errorObj.code = 401;
			errorObj.message = "Unathorized";
			break;
		case 404:
			errorObj.code = 404;
			errorObj.message = "Not found";
			break;
		case 500:
			errorObj.code = 500;
			errorObj.message = "Internal server error";
			break;
		case 509:
			errorObj.code = 509;
			errorObj.message = "Bandwidth Limit Exceeded";
			break;
		default:
	}
	return errorObj;
};


