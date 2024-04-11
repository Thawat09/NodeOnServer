const express = require('express');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const compression = require('compression');
const indexAPI = require('./src/routes/index.js');

// const test = require('./src/configs/dbPostgreSQL.js');
// const {postgresDB, sqlServerDB} = require('./src/configs/sequelize.js');

// async function testConnection() {
//   try {
//     await postgresDB.authenticate();
//     console.log('Connection to PostgreSQL has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the PostgreSQL database:', error);
//   }

//   try {
//     await sqlServerDB.authenticate();
//     console.log('Connection to SQL Server has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the SQL Server database:', error);
//   }
// }
// test;
// testConnection();

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 30,
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
    'max-age=31536000; includeSubDomains'
  );
  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(limiter);
app.use(setHeaders);
app.use(compression());
app.use(indexAPI);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
