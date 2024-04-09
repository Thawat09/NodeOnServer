const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const indexAPI = require('./src/routes/index.js');

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 5,
});

const setHeaders = (req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  );
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(self); microphone=(self); interest-cohort=()'
  );
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=300; includeSubDomains; preload'
  );
  next();
};

app.use(limiter);
app.use(setHeaders);
app.use(indexAPI);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
