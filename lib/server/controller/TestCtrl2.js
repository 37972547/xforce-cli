let BaseCtrl = require("../structure/BaseCtrl");

class TestCtrl2 extends BaseCtrl {
    constructor () {
        super();
    }

    test () {
        console.log(this.ctx);
        console.log("testCtrl");
        this.ctx.body="TestCtrl2 a";
    }

    async test2 () {
        console.log(this.ctx);
        console.log("testCtrl");
        let res = await this._testinner();
        console.log(res);
        // this.ctx.body="TestCtrl2 b";
        this.ctx.body="TestCtrl2 b";
        this.next();

    }

    async asyncTest () {
        let res = await this._testinner();
        return res;
    }
    _testinner () {
        return new Promise (function (resolve, reject) {
            setTimeout(function () {
                console.log("setTimeout");
                resolve("test");
            }, 10000);

        })
    }

}



module.exports = TestCtrl2