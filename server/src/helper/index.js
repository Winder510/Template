const sendSuccess = (res, {
    message,
    code,
    metadata = null,
    statusCode = 200
}) => {
    return res.status(statusCode).json({
        message,
        code,
        metadata
    });
}

const sendError = (res, {
    message = "Error from server",
    code = 0,
    error = null,
    statusCode = 500
}) => {
    const response = {
        message,
        code,
        metadata: null
    };

    return res.status(statusCode).json(response);
}

export {
    sendSuccess,
    sendError
};