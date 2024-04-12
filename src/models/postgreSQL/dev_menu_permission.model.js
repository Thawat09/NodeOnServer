const {DataTypes, Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');
const MenuSys = require('./dev_menu_menusys.model');

const MenuPermission = postgresDB.define(
  'dev_menu_permission',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    ref_username: {
      type: DataTypes.INTEGER,
    },
    ref_mainsys: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ref_subsys: {
      type: DataTypes.INTEGER,
    },
    ref_menu: {
      type: DataTypes.INTEGER,
    },
    permis_view: {
      type: DataTypes.STRING,
    },
    permis_update: {
      type: DataTypes.STRING,
    },
    permis_delete: {
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
    permis_process1: {
      type: DataTypes.STRING,
    },
    permis_process2: {
      type: DataTypes.STRING,
    },
    permis_process3: {
      type: DataTypes.STRING,
    },
    permis_process4: {
      type: DataTypes.STRING,
    },
    permis_process5: {
      type: DataTypes.STRING,
    },
    permis_process6: {
      type: DataTypes.STRING,
    },
    permis_process7: {
      type: DataTypes.STRING,
    },
    permis_process8: {
      type: DataTypes.STRING,
    },
    permis_process9: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'dev_menu_permission',
    timestamps: false,
    defaultScope: {
      attributes: {exclude: ['id']},
    },
  }
);

MenuPermission.belongsTo(MenuSys, {
  foreignKey: 'ref_mainsys',
  as: 'MenuSys',
});

module.exports = MenuPermission;
