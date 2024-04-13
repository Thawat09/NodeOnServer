const checkPermission = require('../services/permissionPath/permissionPath.service');
// const redisClient = require('../configs/redis');

const permissionPath = async (req, res, next) => {
  try {
    const userId = req.user.unid;
    // const redisData = await redisClient.get('152-excise_04_e-seal');
    const hasPermission = await checkPermission(userId);

    // console.log(redisData);

    if (hasPermission) {
      next();
    } else {
      return res.status(403).send('You do not have permission to access.');
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = permissionPath;
