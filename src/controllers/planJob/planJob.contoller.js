const {postgresDB} = require('../../configs/sequelize');
const sysPlanConfigEmployee = require('../../models/postgreSQL/sys_plan_config_employee.model');
const helperReturn = require('../../helpers/return/returnData');

function getApiPlanJob(req, res) {
  res.send('API Plan Job');
}

async function examplePostgreSQL(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const orderBy = req.query.orderBy || 'emp_code';

    await postgresDB.authenticate();

    console.log('Connection to PostgreSQL has been established successfully.');

    const result = await sysPlanConfigEmployee.findAll({
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

module.exports = {getApiPlanJob, examplePostgreSQL};
