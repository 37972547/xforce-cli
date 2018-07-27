const exec = require('child_process').exec;
const iconv = require('iconv-lite'); //解决乱码
const system = require('../config/system').system;

const encoding = 'cp936';
const binaryEncoding = 'binary';


/**
 * 获取当前业务开发环境路径
 * */
async function getProjectPath() {
    const cmdStr = system().windows ? 'cd' : 'pwd';
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                resolve(str);
            }
        });
    }))
}

/**
 * 检测是否安装全局webpack
 * */
async function isWebpack() {
    const cmdStr = 'webpack --help';
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                // console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
                console.log('检测到当前未安装webpack');
                resolve(false);
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                resolve(str);
            }
        });
    }))
}

/**
 * 全局安装webpack
 * */
async function installWebpack() {
    const cmdStr = 'npm install -g webpack';
    console.log('正在安装webpack，请稍后……');
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                // console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
                console.log('安装webpack失败');
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                console.log(str);
                resolve(str);
            }
        });
    }))
}

/**
 * 安装webpack-command
 * */
async function installWebpackCommand() {
    const cmdStr = 'npm install -g webpack-command';
    console.log('正在安装webpack-command，请稍后……');
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                // console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
                console.log('安装webpack-command失败');
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                console.log(str);
                resolve(str);
            }
        });
    }))
}

/**
 * 安装webpack-cli
 * */
async function installWebpackCli() {
    const cmdStr = 'npm install -g webpack-cli';
    console.log('正在安装webpack-command，请稍后……');
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                // console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
                console.log('安装webpack-cli失败');
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                resolve(str);
            }
        });
    }))
}

/**
 * 安装webpack-cli
 * */
async function installWebpackCli() {
    const cmdStr = 'npm install -g webpack-cli';
    console.log('正在安装webpack-command，请稍后……');
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                // console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
                console.log('安装webpack-cli失败');
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                resolve(str);
            }
        });
    }))
}


/**
 * 打包-生产环境
 * */
async function build() {
    const cmdStr = 'webpack --config ./webpack.config.pro.js  --mode production';
    console.log('正在打包，请稍后……');
    return new Promise(((resolve, reject) => {
        exec(cmdStr,{ encoding: binaryEncoding}, function (err, stdout, srderr) {
            if(err) {
                // console.log(iconv.decode(Buffer.from(srderr, binaryEncoding), encoding))
                console.log('安装webpack失败');
            } else {
                const str = iconv.decode(Buffer.from(stdout, binaryEncoding), encoding).trim();
                resolve(str);
            }
        });
    }))
}



module.exports = {
    isWebpack: isWebpack,
    installWebpack: installWebpack,
    installWebpackCommand: installWebpackCommand,
    installWebpackCli: installWebpackCli,
    getProjectPath: getProjectPath
};