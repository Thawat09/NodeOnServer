"use strict";

var _require = require('sequelize'),
  Sequelize = _require.Sequelize;
var config = require('./app');
var postgresDB = new Sequelize(config.pgsql_db, config.pgsql_user, config.pgsql_pass, {
  host: config.pgsql_host,
  dialect: 'postgres',
  port: config.pgsql_port,
  ssl: false
});
var sqlServerDB = new Sequelize(config.sqlserver_db, config.sqlserver_user, config.sqlserver_pass, {
  host: config.sqlserver_host,
  dialect: 'mssql',
  port: config.sqlserver_port,
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
      enableArithAbort: true
    }
  }
});
module.exports = {
  postgresDB: postgresDB,
  sqlServerDB: sqlServerDB
};