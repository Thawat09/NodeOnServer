const {DataTypes} = require('sequelize');
const {sqlServerDB} = require('../../configs/sequelize');

const DtcVEmp = sqlServerDB.define(
  'DTC_V_EMP',
  {
    EquipmentCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    NamePreFix: {
      type: DataTypes.INTEGER,
    },
    TitleName: {
      type: DataTypes.STRING,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    FirstName_TH: {
      type: DataTypes.STRING,
    },
    LastName_TH: {
      type: DataTypes.STRING,
    },
    Department: {
      type: DataTypes.STRING,
    },
    PositionCode: {
      type: DataTypes.INTEGER,
    },
    PositionName: {
      type: DataTypes.STRING,
    },
    PositionSubCode: {
      type: DataTypes.STRING,
    },
    CostCenter: {
      type: DataTypes.STRING,
    },
    COSTCENTERNAME: {
      type: DataTypes.STRING,
    },
    CostCenterGroup: {
      type: DataTypes.STRING,
    },
    EmployeeGroup: {
      type: DataTypes.STRING,
    },
    Status: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    USERNAME: {
      type: DataTypes.STRING,
    },
    USERSTATUS: {
      type: DataTypes.STRING,
    },
    objectid: {
      type: DataTypes.STRING,
    },
    objectvalue: {
      type: DataTypes.STRING,
    },
    IsSaleRepresent: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'DTC_V_EMP',
    timestamps: false,
  }
);

module.exports = DtcVEmp;
