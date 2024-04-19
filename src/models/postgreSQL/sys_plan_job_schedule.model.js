const {DataTypes, Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');

const SysPlanJobSchedule = postgresDB.define(
  'sys_plan_job_schedule',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    ref_job_main_unid: {
      type: DataTypes.INTEGER,
    },
    ref_job_sale_order_unid: {
      type: DataTypes.INTEGER,
    },
    plan_type: {
      type: DataTypes.STRING,
    },
    job_address: {
      type: DataTypes.TEXT,
    },
    job_province: {
      type: DataTypes.STRING,
    },
    job_amphur: {
      type: DataTypes.STRING,
    },
    job_district: {
      type: DataTypes.STRING,
    },
    job_zipcode: {
      type: DataTypes.STRING,
    },
    job_zone: {
      type: DataTypes.STRING,
    },
    emp_id: {
      type: DataTypes.STRING,
    },
    plan_start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'plan_start',
    },
    plan_end: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'plan_end',
    },
    actual_start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'actual_start',
    },
    actual_end: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'actual_end',
    },
    job_detail: {
      type: DataTypes.TEXT,
    },
    sim_by_ts: {
      type: DataTypes.STRING,
    },
    truck_no_by_ts: {
      type: DataTypes.STRING,
    },
    truck_province_by_ts: {
      type: DataTypes.STRING,
    },
    cussea_by_ts: {
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
    customer_contact_name: {
      type: DataTypes.STRING,
    },
    customer_contact_tel: {
      type: DataTypes.STRING,
    },
    customer_contact_email: {
      type: DataTypes.STRING,
    },
    bams_status: {
      type: DataTypes.STRING,
    },
    ref_sv_document: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    ref_job_group: {
      type: DataTypes.INTEGER,
    },
    job_detail_by_emp: {
      type: DataTypes.TEXT,
    },
    bams_plan_id: {
      type: DataTypes.STRING,
    },
    create_emp_id: {
      type: DataTypes.STRING,
    },
    create_by_department: {
      type: DataTypes.STRING,
    },
    ref_lock_truck_no: {
      type: DataTypes.STRING,
    },
    truck_no_by_pc: {
      type: DataTypes.STRING,
    },
    remark_tf_job: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'sys_plan_job_schedule',
    timestamps: false,
  }
);

module.exports = SysPlanJobSchedule;
