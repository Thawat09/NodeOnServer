const {DataTypes, Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');
// const MenuPermission = require('./dev_menu_permission.model');

const MenuSys = postgresDB.define(
  'dev_menu_menusys',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    ref_mainsys: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    url: {
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
    line: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'dev_menu_menusys',
    timestamps: false,
    defaultScope: {
      attributes: {exclude: ['id']},
    },
  }
);

// MenuSys.hasMany(MenuPermission, {
//   foreignKey: 'ref_mainsys',
//   as: 'MenuSys',
// });

module.exports = MenuSys;
