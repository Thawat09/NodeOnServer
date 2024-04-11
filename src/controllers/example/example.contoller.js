const {postgresDB, sqlServerDB} = require('../../configs/sequelize');
const EmpInfo = require('../../models/postgreSQL/empInfo.model');
const helperReturn = require('../../helpers/return/returnData');

function getApiExampleb(req, res) {
  res.send('API Example');
}

async function examplePostgreSQL(req, res) {
  try {
    await postgresDB.authenticate();

    console.log('Connection to PostgreSQL has been established successfully.');

    const result = await EmpInfo.findAll({
      attributes: {exclude: ['id']},
      raw: true,
    });

    const response = {data: result};

    helperReturn.jsonResponse(res, response, 200, 'Ok');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
  }
}

async function exampleServerSQL() {
  try {
    await sqlServerDB.authenticate();

    console.log('Connection to SQL Server has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the SQL Server database:', error);
  }
}

module.exports = {getApiExampleb, examplePostgreSQL, exampleServerSQL};
