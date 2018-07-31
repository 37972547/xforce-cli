let BaseCtrl = require("../structure/BaseCtrl");

class TestCtrl extends BaseCtrl {
    constructor () {
        super();
        this.service = null;
    }
    async test (ctx) {
        console.log("testCtrl");

        // this.ctx.body="ljz";
        // let res = await this.asyncTest();
        let res = await this.service.getData();
        console.log(res);
        this.ctx.body = res;
    }

    // async test2 () {
    //     console.log("testCtrl222");
    // }
    //
    //
    // async asyncTest () {
    //     let res = await this._testinner();
    //     return res;
    // }
    //
    // _testinner () {
    //     return new Promise (function (resolve, reject) {
    //         setTimeout(function () {
    //             console.log("setTimeout");
    //             resolve("setTimeout");
    //         }, 1000);
    //
    //     })
    // }
}

module.exports = TestCtrl