const {DataTypes, Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');

const SysPlanJobContactCustomer = postgresDB.define(
  'sys_plan_job_contact_customer',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    job_id: {
      type: DataTypes.INTEGER,
    },
    contact_customer_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'contact_customer_date',
    },
    contact_customer_detail: {
      type: DataTypes.TEXT,
    },
    contact_customer_by: {
      type: DataTypes.STRING,
    },
    contact_customer_type: {
      type: DataTypes.STRING,
    },
    contact_customer_name: {
      type: DataTypes.STRING,
    },
    contact_customer_tel: {
      type: DataTypes.STRING,
    },
    contact_customer_date_time_back: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'sys_plan_job_contact_customer',
    timestamps: false,
  }
);

module.exports = SysPlanJobContactCustomer;
