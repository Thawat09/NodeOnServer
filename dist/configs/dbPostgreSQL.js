"use strict";

var _require = require('pg'),
  Pool = _require.Pool;
var config = require('./app');
var moment = require('moment');
var pool = new Pool({
  user: config.pgsql_user,
  host: config.pgsql_host,
  database: config.pgsql_db,
  password: config.pgsql_pass,
  port: config.pgsql_port
});
pool.query('SELECT NOW()', function (err, res) {
  if (err) {
    console.error('Error executing query', err);
  } else {
    var originalTime = res.rows[0].now;
    var formattedTime = moment(originalTime).format('YYYY-MM-DD HH:mm:ss');
    console.log('Successfully connected to PostgreSQL:', formattedTime);
  }
});
module.exports = pool;