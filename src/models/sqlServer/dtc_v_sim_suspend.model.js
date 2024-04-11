const {DataTypes} = require('sequelize');
const {sqlServerDB} = require('../../configs/sequelize');

const DtcVSimSuspend = sqlServerDB.define(
  'DTC_V_SIM_Suspend',
  {
    'SIM Number': {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    EquipmentType: {
      type: DataTypes.STRING,
    },
    MaterialCode: {
      type: DataTypes.STRING,
    },
    'SIM Status': {
      type: DataTypes.STRING,
    },
    SuspendDate: {
      type: DataTypes.INTEGER,
    },
    CancelDate: {
      type: DataTypes.INTEGER,
    },
    CancelSuspendDate: {
      type: DataTypes.INTEGER,
    },
    Province: {
      type: DataTypes.STRING,
    },
    SizeDimension: {
      type: DataTypes.STRING,
    },
    BlackBox: {
      type: DataTypes.INTEGER,
    },
    ModelNumber: {
      type: DataTypes.STRING,
    },
    ManufacturerNO: {
      type: DataTypes.STRING,
    },
    SaleDocument: {
      type: DataTypes.STRING,
    },
    SoldToParty: {
      type: DataTypes.STRING,
    },
    SoldToDesc: {
      type: DataTypes.STRING,
    },
    ShipToParty: {
      type: DataTypes.STRING,
    },
    ShipToDesc: {
      type: DataTypes.STRING,
    },
    OwnerCode: {
      type: DataTypes.STRING,
    },
    ActiveStatus: {
      type: DataTypes.STRING,
    },
    LineNumber: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'DTC_V_SIM_Suspend',
    timestamps: false,
  }
);

module.exports = DtcVSimSuspend;
