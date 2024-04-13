const checkPermission = require('../services/permissionPath/permissionPath.service');

const permissionPath = async (req, res, next) => {
  const userId = req.user.unid;
  const hasPermission = await checkPermission(userId);

  if (hasPermission) {
    next();
  } else {
    return res.status(403).send('You do not have permission to access.');
  }
};

module.exports = permissionPath;
