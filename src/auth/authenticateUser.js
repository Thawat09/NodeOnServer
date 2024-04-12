const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const getUserByUsernameAndPassword = require('../services/user/user.service');

const checkUserExistence = (req, res, next) => {
  passport.authenticate('basic', {session: false}, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({error: 'Unauthorized'});
    }

    req.user = user;
    return next();
  })(req, res, next);
};

passport.use(
  new BasicStrategy(async (username, password, done) => {
    const resultUsers = await getUserByUsernameAndPassword(username, password);

    if (resultUsers.length === 0) {
      return done(null, false, {message: 'Incorrect email or password'});
    }

    return done(null, resultUsers[0]);
  })
);

module.exports = checkUserExistence;
