let BaseCtrl = require("../structure/BaseCtrl");

class AriesCodeBlockCtrl extends BaseCtrl {
    constructor () {
        super();
        this.service = null;
    }

    // 接口返回信息
    resData(res, ctx, next){
        let data = {};
        if(res.data){
            data = {
                resCode: '0000',
                resMsg: 'success'
            };
            switch (res.type) {
                case 'GET_DATA':
                    data = Object.assign({}, data, {codeList: res.data});
                    break;
                case 'DELETE_DATA':
                    data = Object.assign({}, data, {isDelete: Boolean(res.data)});
                    break;
                case 'COPY_DATA':
                    data = Object.assign({}, data, {codeList: res.data.dataValues});
                    break;
                default:
                    break;
            }
        }else{
            data = {
                resCode: '0001',
                resMsg: 'fail'
            };
        }
        ctx.body = data;
        next();
    }

    /**
     * @api {post} /ariesCodeBlock 获取数据列表
     * @apiDescription 获取数据列表
     * @apiName getData
     * @apiGroup ariesCodeBlock
     * @apiParam {string} none  不需要参数
     * @apiSuccess {json} res
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      codeList:[
     *          {
     *              code_block_id: 123456789,
     *              code_block_name: "test",
     *              userId: 987654321,
     *              width: 500
     *              height: 500,
     *              isDeleted: 0,
     *              lay_out_json: json,
     *              update_time: 2018-07-31,
     *              create_time: 2018-07-31,
     *              version: 0.0.1
     *          }
     *      ],
     *      resCode: "0000",
     *      resMsg: "success"
     *  }
     * @apiSampleRequest http://localhost:3000/ariesCodeBlock
     * @apiVersion 1.0.1
     */
    async getData (ctx, next) {
        let res = await this.service.getData();
        this.resData(res, ctx, next);
    }

    /**
     * @api {post} /ariesCodeBlock/delete 删除数据
     * @apiDescription 删除数据
     * @apiName deleteData
     * @apiGroup ariesCodeBlock
     * @apiParam { number } id  code_block_id
     * @apiSuccess {json} res
     * @apiSuccessExample { json } Success-Response:
     *  {
     *      isDelete: true,
     *      resCode: "0000",
     *      resMsg: "success"
     *  }
     * @apiSampleRequest http://localhost:3000/ariesCodeBlock/delete
     * @apiVersion 1.0.1
     */
    async deleteData (ctx, next) {
        // 参数
        let params = JSON.parse(ctx.request.body);
        let deleteResult = await this.service.deleteData(params.id);
        this.resData(deleteResult, ctx, next);
    }

    /**
     * @api {post} /ariesCodeBlock/copy 复制数据
     * @apiDescription 复制数据
     * @apiName copyData
     * @apiGroup ariesCodeBlock
     * @apiParam {number} id  code_block_id
     * @apiSuccess {json} res
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      codeList:[
     *          {
     *              code_block_id: 123456789,
     *              code_block_name: "test",
     *              userId: 987654321,
     *              width: 500
     *              height: 500,
     *              isDeleted: 0,
     *              lay_out_json: json,
     *              update_time: 2018-07-31,
     *              create_time: 2018-07-31,
     *              version: 0.0.1
     *          }
     *      ],
     *      resCode: "0000",
     *      resMsg: "success"
     *  }
     * @apiSampleRequest http://localhost:3000/ariesCodeBlock
     * @apiVersion 1.0.1
     */
    async copyData (ctx, next) {
        // 参数
        let params = JSON.parse(ctx.request.body);
        let resultCreat = await this.service.copyData(params.id);
        this.resData(resultCreat, ctx, next);
    }
}

module.exports = AriesCodeBlockCtrl;