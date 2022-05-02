import React from "react";

const useApiErrorHandler = (errorCode) => {
	const [errorObj, setErrorObj] = React.useState({ code: 0, message: "" });
	switch (errorCode) {
		case 400:
            setErrorObj({
                code:400,
                message:"Bad Request"
            });
			break;
		case 401:
            setErrorObj({
                code:401,
                message:"Unathorized"
            });
			break;
		case 404:
            setErrorObj({
                code:404,
                message:"Not found"
            });
			break;
		case 500:
            setErrorObj({
                code:500,
                message:"Internal server error"
            });
			break;
		case 509:
            setErrorObj({
                code:509,
                message:"Bandwidth Limit Exceeded"
            });
			break;
		default:
	}
	return errorObj;
};

export default useApiErrorHandler;
