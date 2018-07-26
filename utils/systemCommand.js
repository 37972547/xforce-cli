const exec = require('child_process').exec;
const iconv = require('iconv-lite'); //解决乱码
const system = require('../config/system').system;

async function getProjectPath() {
    const encoding = 'cp936';
    const binaryEncoding = 'binary';
    const cmdStr = system().windows ? 'cd' : 'pwd';
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
            } else {
                // console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding), '------');
                resolve(iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim());
            }
        });
    }))
}

exports.getProjectPath = getProjectPath;