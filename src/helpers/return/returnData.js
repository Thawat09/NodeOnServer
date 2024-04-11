const methods = {
  async jsonResponse(res, data, status = 200, message = 'OK') {
    const responseData = {
      code: status,
      message: message,
      data,
    };

    if (res.locals.tokenData) {
      res.header('Access-Control-Expose-Headers', 'X-Custom-Token-Data');
      res.header('X-Custom-Token-Data', JSON.stringify(res.locals.tokenData));
    }

    res.status(status).json(responseData);
  },
};

module.exports = methods;
