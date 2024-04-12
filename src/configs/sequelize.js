const {Sequelize} = require('sequelize');
const config = require('./app');

const postgresDB = new Sequelize(
  config.pgsql_db,
  config.pgsql_user,
  config.pgsql_pass,
  {
    host: config.pgsql_host,
    dialect: 'postgres',
    port: config.pgsql_port,
    ssl: false,
    pool: {
      max: 50,
      idleTimeoutMillis: 30000,
      acquire: 2000,
    },
  }
);

const sqlServerDB = new Sequelize(
  config.sqlserver_db,
  config.sqlserver_user,
  config.sqlserver_pass,
  {
    host: config.sqlserver_host,
    dialect: 'mssql',
    port: config.sqlserver_port,
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true,
      },
    },
    pool: {
      max: 50,
      idleTimeoutMillis: 30000,
      acquire: 2000,
    },
  }
);

module.exports = {postgresDB, sqlServerDB};
