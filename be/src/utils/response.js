const successResponse = (res, message, data, code) => {
    const response = {
        meta: {
            code: code || 200,
            status: 'Success',
            message: message || 'Success',
        },
        data: data || {},
    };
    return res.status(code || 200).json(response);
};

const errorResponse = (res, message, code, error = null) => {
    const errorMsg = error ? { 
        error : error
    } : {}
    
    const response = {
        meta: {
            code: code || 500,
            status: 'Error',
            message: message || 'Internal Server Error',
        },
        ...errorMsg
    };
    return res.status(code || 500).json(response);
};

module.exports = {
    successResponse,
    errorResponse,
};
