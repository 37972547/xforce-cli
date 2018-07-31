let BaseService = require ("../structure/BaseService");
let ariesCode = require("../entities/AriesCode");

class AriesCodeService extends BaseService{
    constructor () {
        super();
    }

    async getData () {
        return new Promise(function(resolve,reject){
            ariesCode.findAll({
                where : {
                    id : 1
                }
            }).then(function (res) {
                console.log(res);
                // console.log(res.get("width"));
                resolve(res)
            })
        })
    }
}


module.exports = AriesCodeService;