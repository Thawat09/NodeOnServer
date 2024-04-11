const {Pool} = require('pg');
const config = require('./app');
const moment = require('moment');

const pool = new Pool({
  user: config.pgsql_user,
  host: config.pgsql_host,
  database: config.pgsql_db,
  password: config.pgsql_pass,
  port: config.pgsql_port,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    const originalTime = res.rows[0].now;
    const formattedTime = moment(originalTime).format('YYYY-MM-DD HH:mm:ss');

    console.log('Successfully connected to PostgreSQL:', formattedTime);
  }
});

module.exports = pool;
