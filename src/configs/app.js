const dotenv = require('dotenv');
dotenv.config();

const config = {
  pgsql_host: process.env.DB_HOST_PGSQL,
  pgsql_port: process.env.DB_PORT_PGSQL,
  pgsql_user: process.env.DB_USER_PGSQL,
  pgsql_pass: process.env.DB_PASSWORD_PGSQL,
  pgsql_db: process.env.DB_NAME_PGSQL,

  sqlserver_host: process.env.DB_HOST_SQLSERVER,
  sqlserver_user: process.env.DB_USER_SQLSERVER,
  sqlserver_pass: process.env.DB_PASSWORD_SQLSERVER,
  sqlserver_db: process.env.DB_NAME_SQLSERVER,
  sqlserver_port: process.env.DB_PORT_SQLSERVER,
};

module.exports = config;
