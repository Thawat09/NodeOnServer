const {postgresDB, sqlServerDB} = require('../../configs/sequelize');
const EmpInfo = require('../../models/postgreSQL/main_emp_info.model');
const DtcVSimSuspend = require('../../models/sqlServer/dtc_v_sim_suspend.model');
const helperReturn = require('../../helpers/return/returnData');

function getApiExampleb(req, res) {
  res.send('API Example');
}

async function examplePostgreSQL(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000;
    const orderBy = req.query.orderBy || 'emp_code';

    await postgresDB.authenticate();

    console.log('Connection to PostgreSQL has been established successfully.');

    const result = await EmpInfo.findAll({
      attributes: {exclude: ['id']},
      raw: true,
      order: [[orderBy, 'DESC']],
      limit: pageSize,
    });

    const countResult = result.length;
    const response = {
      data: result,
      metadata: {
        totalItems: countResult,
        itemsPerPage: pageSize,
        currentPage: page,
        totalPages: Math.ceil(countResult / pageSize),
      },
    };

    helperReturn.jsonResponse(res, response, 200, 'Ok');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
  }
}

async function exampleServerSQL(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000;
    const orderBy = req.query.orderBy || 'SIM Number';

    await sqlServerDB.authenticate();

    console.log('Connection to SQL Server has been established successfully.');

    const result = await DtcVSimSuspend.findAll({
      attributes: {exclude: ['id']},
      raw: true,
      limit: pageSize,
      order: [[orderBy, 'ASC']],
    });

    const countResult = result.length;
    const response = {
      data: result,
      metadata: {
        totalItems: countResult,
        itemsPerPage: pageSize,
        currentPage: page,
        totalPages: Math.ceil(countResult / pageSize),
      },
    };

    helperReturn.jsonResponse(res, response, 200, 'Ok');
  } catch (error) {
    console.error('Unable to connect to the SQL Server database:', error);
  }
}

module.exports = {getApiExampleb, examplePostgreSQL, exampleServerSQL};
