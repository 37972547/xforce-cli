let BaseCtrl = require("../structure/BaseCtrl");

class AriesCodeCtrl extends BaseCtrl {
    constructor () {
        super();
        this.service = null;
    }
    async test (ctx) {
        let res = await this.service.getData();
        console.log(res);
        this.ctx.body = res;
    }
}

module.exports = AriesCodeCtrl;