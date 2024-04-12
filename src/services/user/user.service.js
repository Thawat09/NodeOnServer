const {Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');
const EmpInfo = require('../../models/postgreSQL/main_emp_info.model');
const DtcVEmp = require('../../models/sqlServer/dtc_v_emp.model');

module.exports = async function getUserByUsernameAndPassword(
  username,
  password
) {
  try {
    await postgresDB.authenticate();

    const resultUserDSS = await EmpInfo.findOne({
      attributes: ['unid', 'username', 'emp_code', 'name_first', 'name_last'],
      where: {
        username: username,
        password: password,
      },
      raw: true,
    });

    const empCode = resultUserDSS.emp_code;

    const resultUserERP = await DtcVEmp.findAll({
      attributes: [
        [Sequelize.literal('Status'), 'Status'],
        [Sequelize.literal('USERNAME'), 'user_erp'],
        [Sequelize.literal('USERSTATUS'), 'status_erp'],
      ],
      where: {
        EmployeeCode: empCode,
      },
      group: ['Status', 'USERNAME', 'USERSTATUS'],
      raw: true,
    });

    const mergedResult = Object.assign({}, resultUserDSS, resultUserERP[0]);

    return mergedResult ? [mergedResult] : [];
  } catch (error) {
    console.error(
      'Error connecting to the PostgreSQL database function getUserByUsernameAndPassword:',
      error
    );
  }
};
