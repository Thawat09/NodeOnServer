const {Sequelize, Op} = require('sequelize');
const SysPlanConfigEmployee = require('../../models/postgreSQL/sys_plan_config_employee.model');
const {postgresDB} = require('../../configs/sequelize');
const helperReturn = require('../../helpers/return/returnData');

function getApiPlanJob(req, res) {
  res.send('API Plan Job');
}

async function getEmp(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000;
    const orderBy = req.query.orderBy || 'emp_id';
    const type_job = req.query.type_job;
    let where = {};

    if (type_job === 'Hardware') {
      where = {
        [Sequelize.Op.or]: [{emp_department: 'TS'}, {emp_department: 'ADMIN'}],
      };
    } else if (type_job === 'Software') {
      where = {
        [Sequelize.Op.or]: [{emp_department: 'IT'}, {emp_department: 'ADMIN'}],
      };
    } else {
      where = {
        [Sequelize.Op.or]: [
          {emp_department: 'TS'},
          {emp_department: 'IT'},
          {emp_department: 'ADMIN'},
        ],
      };
    }

    await postgresDB.authenticate();

    const result = await SysPlanConfigEmployee.findAll({
      attributes: [
        'emp_id',
        [Sequelize.literal("emp_fname || ' ' || emp_lname"), 'emp_name'],
        [
          Sequelize.literal(`
            emp_department || ' ' || emp_id || ' ' || emp_fname || ' ' || emp_lname || ' (' || emp_nname || ')'
          `),
          'emp_display',
        ],
      ],
      where: {[Op.and]: [{status: '1'}, where]},
      raw: true,
      order: [[orderBy, 'ASC']],
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
    console.error(
      'Error connecting to the PostgreSQL database function getEmp:',
      error
    );
  }
}

module.exports = {getApiPlanJob, getEmp};
