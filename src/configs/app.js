const dotenv = require('dotenv');
dotenv.config();

const mode = process.env.NODE_ENV || 'development';
let config;

if (mode === 'production') {
  config = {
    pgsql_host: process.env.DB_HOST_PGSQL_PROD,
    pgsql_port: process.env.DB_PORT_PGSQL_PROD,
    pgsql_user: process.env.DB_USER_PGSQL_PROD,
    pgsql_pass: process.env.DB_PASSWORD_PGSQL_PROD,
    pgsql_db: process.env.DB_NAME_PGSQL_PROD,

    sqlserver_host: process.env.DB_HOST_SQLSERVER_PROD,
    sqlserver_user: process.env.DB_USER_SQLSERVER_PROD,
    sqlserver_pass: process.env.DB_PASSWORD_SQLSERVER_PROD,
    sqlserver_db: process.env.DB_NAME_SQLSERVER_PROD,
    sqlserver_port: process.env.DB_PORT_SQLSERVER_PROD,
  };
} else {
  config = {
    pgsql_host: process.env.DB_HOST_PGSQL_DEV,
    pgsql_port: process.env.DB_PORT_PGSQL_DEV,
    pgsql_user: process.env.DB_USER_PGSQL_DEV,
    pgsql_pass: process.env.DB_PASSWORD_PGSQL_DEV,
    pgsql_db: process.env.DB_NAME_PGSQL_DEV,

    sqlserver_host: process.env.DB_HOST_SQLSERVER_DEV,
    sqlserver_user: process.env.DB_USER_SQLSERVER_DEV,
    sqlserver_pass: process.env.DB_PASSWORD_SQLSERVER_DEV,
    sqlserver_db: process.env.DB_NAME_SQLSERVER_DEV,
    sqlserver_port: process.env.DB_PORT_SQLSERVER_DEV,
  };
}

module.exports = config;
