const db =  require("../config/DBConfig");

class BaseService {
    constructor () {
        this.db = db;
        this.ctx = null;
    }
}

module.exports = BaseService;