const {DataTypes} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');

const EmpInfo = postgresDB.define(
  'main_emp_info',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    emp_code: {
      type: DataTypes.STRING,
    },
    name_title: {
      type: DataTypes.STRING,
    },
    name_first: {
      type: DataTypes.STRING,
    },
    name_middle: {
      type: DataTypes.STRING,
    },
    name_last: {
      type: DataTypes.STRING,
    },
    emp_gender: {
      type: DataTypes.STRING,
    },
    emp_birthday: {
      type: DataTypes.DATE,
    },
    emp_department: {
      type: DataTypes.STRING,
    },
    emp_division: {
      type: DataTypes.STRING,
    },
    emp_position: {
      type: DataTypes.STRING,
    },
    emp_email: {
      type: DataTypes.STRING,
    },
    emp_inphone: {
      type: DataTypes.STRING,
    },
    emp_picture: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'main_emp_info',
    timestamps: false,
  }
);

module.exports = EmpInfo;
