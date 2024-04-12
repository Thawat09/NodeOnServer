const {Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');
const MenuPermission = require('../../models/postgreSQL/dev_menu_permission.model');
const MenuSys = require('../../models/postgreSQL/dev_menu_menusys.model');

module.exports = async function checkPermission(userId) {
  try {
    const id = userId;
    await postgresDB.authenticate();

    const resultsPath = await MenuPermission.findAll({
      attributes: [],
      include: [
        {
          model: MenuSys,
          where: {status: 'IN'},
          as: 'MenuSys',
          attributes: ['url', 'ref_mainsys', 'ref_subsys'],
        },
      ],
      where: {
        ref_username: id,
        permis_view: '1',
      },
      order: [[Sequelize.literal('"MenuSys"."url"')]],
      group: ['MenuSys.url', 'MenuSys.ref_mainsys', 'MenuSys.ref_subsys'],
      raw: true,
      logging: console.log,
    });

    const renamedUrls = resultsPath.map(item => ({
      url: item['MenuSys.url'],
      main: item['MenuSys.ref_mainsys'],
      sub: item['MenuSys.ref_subsys'],
    }));

    return renamedUrls || [];
  } catch (error) {
    console.error(
      'Error connecting to the PostgreSQL database function checkPermission:',
      error
    );
    throw error;
  }
};
