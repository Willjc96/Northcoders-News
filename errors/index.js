exports.withErrorHandling = controller => {
  return async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (err) {
      next(err);
    }
  };
};

exports.routeNotFound = (req, res) => {
  res.status(404).send({ msg: 'Route Not Found' });
};

exports.methodNotAllowed = (req, res) => {
  res.status(405).send({ msg: 'Method Not Allowed' });
};

exports.handleSQLErrors = (err, req, res, next) => {
  const badRequestCodes = ['42703'];
  if (badRequestCodes.includes(err.code)) {
    res.status(400).send({ msg: 'Bad Request' });
  } else next(err);
};

exports.handle500 = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Internal Server Error' });
};
