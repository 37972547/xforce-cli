const exec = require('child_process').exec;
const iconv = require('iconv-lite'); //解决乱码

const encoding = 'cp936';
const binaryEncoding = 'utf-8';

/**
 * 执行系统命令
 * @param {[Object]} options {
 * @property {[String]} cmdStr 命令字符
 * @property {[String]} beforeMsg 执行前提示
 * @property {[String]} errMsg 错误提示
 * @property {[String]} successMsg 成功提示
 * };
 * */
async function command(options = {}) {
    return new Promise(((resolve, reject) => {
        options.beforeMsg && console.log(options.beforeMsg);
        exec(options.cmdStr ,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                const str = iconv.decode(Buffer.from(srderr, binaryEncoding), encoding);

                console.log(err);
                options.errMsg ? console.log(options.errMsg) : console.log(str);
                resolve(false);
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                options.successMsg ? console.log(options.successMsg) : console.log(str);
                resolve(str);
            }
        });
    }))
}

module.exports = {
    command: command,
};
