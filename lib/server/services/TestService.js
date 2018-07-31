let BaseService = require ("../structure/BaseService");
let ariesCodeBlock = require("../entities/AriesCodeBlock");

class TestService extends BaseService{
  constructor () {
    super();
  }

  async getData () {
   return new Promise(function(resolve,reject){
    ariesCodeBlock.findAll({
      where : {
        code_block_name : "ljz1"
      }
    }).then(function (res) {
      console.log(res);
      // console.log(res.get("width"));
      console.log(res[0].get("width"));
        resolve(res)
    })
    })
  }
}


module.exports = TestService;