const exec = require('child_process').exec;
const iconv = require('iconv-lite');
const env = require('../config/env').env;

const encoding = 'cp936';
const binaryEncoding = 'binary';
const cmdStr = env().windows ? 'cd' : 'pwd';

async function dir() {
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                console.log(iconv.decode(new Buffer(srderr, binaryEncoding), encoding))
            } else {
                // console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding));
                resolve(iconv.decode(new Buffer(stdout, binaryEncoding), encoding));
            }
        });
    }))
}

async function getProjectPath() {
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                console.log(iconv.decode(new Buffer(srderr, binaryEncoding), encoding))
            } else {
                // console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding), '------');
                resolve(iconv.decode(new Buffer(stdout, binaryEncoding), encoding));
            }
        });
    }))
}

exports.getProjectPath = getProjectPath;