const {DataTypes, Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');

const sysPlanConfigEmployee = postgresDB.define(
  'sys_plan_config_employee',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    emp_id: {
      type: DataTypes.STRING,
    },
    emp_fname: {
      type: DataTypes.STRING,
    },
    emp_lname: {
      type: DataTypes.STRING,
    },
    emp_nname: {
      type: DataTypes.STRING,
    },
    emp_zone: {
      type: DataTypes.INTEGER,
    },
    emp_department: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    create_by: {
      type: DataTypes.STRING,
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'create_time',
    },
    modify_by: {
      type: DataTypes.STRING,
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'modify_time',
    },
    emp_tel: {
      type: DataTypes.STRING,
    },
    emp_mail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    new_password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'sys_plan_config_employee',
    timestamps: false,
  }
);

module.exports = sysPlanConfigEmployee;
