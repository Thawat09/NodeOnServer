const {DataTypes} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');

const SysPlanConfigThailand = postgresDB.define(
  'sys_plan_config_thailand',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    admin_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    geo_id: {
      type: DataTypes.STRING,
    },
    geo_name: {
      type: DataTypes.STRING,
    },
    geo_name_en: {
      type: DataTypes.STRING,
    },
    province_id: {
      type: DataTypes.STRING,
    },
    province_name: {
      type: DataTypes.STRING,
    },
    province_name_en: {
      type: DataTypes.STRING,
    },
    amphur_id: {
      type: DataTypes.STRING,
    },
    amphur_name: {
      type: DataTypes.STRING,
    },
    amphur_name_en: {
      type: DataTypes.STRING,
    },
    district_id: {
      type: DataTypes.STRING,
    },
    district_name: {
      type: DataTypes.STRING,
    },
    district_name_en: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'sys_plan_config_thailand',
    timestamps: false,
  }
);

module.exports = SysPlanConfigThailand;
