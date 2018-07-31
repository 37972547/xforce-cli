let BaseService = require ("../structure/BaseService");
let ariesCodeBlock = require("../entities/AriesCodeBlock");

class AriesCodeBlockService extends BaseService{
    constructor () {
        super();
    }

    // 获取数据
    async getData () {
        return new Promise(function(resolve,reject){
            ariesCodeBlock.findAll().then(function (res) {
                let resData = {
                    type: 'GET_DATA',
                    data: res
                };
                resolve(resData);
            })
        })
    }

    // 删除数据
    async deleteData (id) {
        return new Promise(function(resolve,reject){
            ariesCodeBlock.destroy({
                where: {
                    code_block_id: id
                }
            }).then(function (res) {
                let resData = {
                    type: 'DELETE_DATA',
                    data: res
                };
                resolve(resData);
            })
        })
    }

    // 复制数据
    async copyData (id) {
        return new Promise(function(resolve,reject){
            let resultCreat = (resultFindAll) => ariesCodeBlock.create({
                code_block_name : resultFindAll[0].dataValues.code_block_name,
                width : resultFindAll[0].dataValues.width,
                height : resultFindAll[0].dataValues.height,
                lay_out_json : resultFindAll[0].dataValues.lay_out_json,
                userId : resultFindAll[0].dataValues.userId,
                isDeleted : resultFindAll[0].dataValues.isDeleted,
                create_time : resultFindAll[0].dataValues.create_time,
                update_time : resultFindAll[0].dataValues.update_time,
                version : resultFindAll[0].dataValues.version
            }).then(function (res) {
                resolve({
                    type: 'COPY_DATA',
                    data: res
                });
            });
            ariesCodeBlock.findAll({          // 返回一个result 是个数组，若查询无数据则length=0
                where: {
                    code_block_id: id
                }
            }).then(result => {
                // 根据id查询是否存在该id数据  如果不存在直接resolve  如果存在就新建数据
                if(result[0] && typeof result[0].dataValues != 'undefined'){
                    resultCreat(result);
                }else{
                    resolve({
                        type: 'COPY_DATA',
                        data: false
                    })
                }
            });
        })
    }
}


module.exports = AriesCodeBlockService;