const Sequelize = require('sequelize');
let db = require ("../config/DBConfig");

let ariesCodeBlock = db.define('aries_code_block',{
  code_block_id : {
    type : Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  code_block_name : {
    type: Sequelize.STRING
  },
  width : {
    type: Sequelize.INTEGER
  },
  height : {
    type: Sequelize.INTEGER
  },
  lay_out_json : {
    type: Sequelize.TEXT
  },
  userId : {
    type: Sequelize.INTEGER
  },
  isDeleted : {
    type : Sequelize.STRING
  },
  create_time : { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  update_time : { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  version : {type : Sequelize.STRING}
},
  {
    // 不添加时间戳属性 (updatedAt, createdAt)
    timestamps: true,


    // 将自动设置所有属性的字段选项为下划线命名方式。
    // 不会覆盖已经定义的字段选项
    underscored: true,

    // 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容
    freezeTableName: true,

    // 定义表的名称
    tableName: 'aries_code_block',

    updatedAt: 'update_time',
    createdAt : "create_time",


    // 启用乐观锁定。 启用时，sequelize将向模型添加版本计数属性，
    // 并在保存过时的实例时引发OptimisticLockingError错误。
    // 设置为true或具有要用于启用的属性名称的字符串。
    version: true
  });


module.exports = ariesCodeBlock;