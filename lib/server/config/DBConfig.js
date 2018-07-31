const Sequelize = require('sequelize');
const sequelize = new Sequelize('aries_app', 'dvlpuser01', 'dcSHjS91ey9hf86xk5Gztsy7DsV5B_', {
  host: 'rds02186vek19oo4053i.mysql.rds.aliyuncs.com',
  dialect: 'mysql',

  port: 3306,

  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

module.exports = sequelize;