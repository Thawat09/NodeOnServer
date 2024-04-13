const {Op} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');
const MenuPermission = require('../../models/postgreSQL/dev_menu_permission.model');
const MenuSys = require('../../models/postgreSQL/dev_menu_menusys.model');

module.exports = async function checkPermission(userId) {
  try {
    await postgresDB.authenticate();

    const permissions = await MenuPermission.findAll({
      attributes: [
        'ref_username',
        'ref_mainsys',
        'ref_subsys',
        'permis_view',
        'permis_update',
        'permis_delete',
      ],
      where: {
        ref_username: userId,
        permis_view: '1',
      },
      group: [
        'ref_username',
        'ref_mainsys',
        'ref_subsys',
        'permis_view',
        'permis_update',
        'permis_delete',
      ],
      order: [['ref_mainsys', 'ASC']],
      raw: true,
    });

    const menuData = await MenuSys.findAll({
      attributes: ['title', 'ref_mainsys', 'ref_subsys', 'url', 'status'],
      where: {
        [Op.or]: permissions.map(({ref_mainsys, ref_subsys}) => ({
          ref_mainsys,
          ref_subsys,
        })),
        status: 'IN',
      },
      order: [['ref_mainsys', 'ASC']],
      raw: true,
    });

    const permissionMap = {};
    permissions.forEach(item => {
      const key = `${item.ref_mainsys}-${item.ref_subsys}`;
      permissionMap[key] = item;
    });

    const combinedData = menuData.map(menuItem => {
      const key = `${menuItem.ref_mainsys}-${menuItem.ref_subsys}`;
      const permissionItem = permissionMap[key] || {};

      return Object.assign(
        {},
        menuItem,
        {
          title: menuItem.title,
          ref_mainsys: menuItem.ref_mainsys,
          ref_subsys: menuItem.ref_subsys,
          url: menuItem.url,
        },
        permissionItem
      );
    });

    return combinedData || [];
  } catch (error) {
    console.error(
      'Error connecting to the PostgreSQL database function checkPermission:',
      error
    );
    throw error;
  }
};
