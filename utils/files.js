const fse = require('fs-extra');
const path = require('path');
const config = require('../config/config').config;
const util = require('./util');
const system = require('./systemCommand');

// 环境根目录
const rootDirectory = function () {
    return path.resolve(__dirname, '../')
};

// 当前项目目录
const devDirectory = function() {
    return path.resolve();
};

// 资源包目录
const libDirectory = function(obj) {
    const key = util.objValueToString(obj);
    const package = config.packages[key];
    return path.join(rootDirectory(), package.path);
};

// 临时文件目录
const templateDirectory = function() {
    return path.join(rootDirectory(), 'template');
};


/**
 * 获取package.json scripts 打包命令
 * @param {[String]} name 名称
 * @return {[String]} 返回打包命令
 * */
const getCmdStr = function(name) {
    const packageJson = require('../template/package.json');

    // 替换路径
    const reg = /\.\/webpack/gi;
    const newPath = path.join(rootDirectory(), 'template/');
    const packageScripts = packageJson.scripts
    for(key in packageScripts) {
        packageScripts[key] = packageScripts[key].replace(reg, newPath + 'webpack');
    }

    return packageScripts[name]
};


/**
 * 读取文件
 * @param {[String]} pathFile 文件路径包括名称
 * */
const readFile = async function(pathFile) {
    return new Promise((resolve => {
        fse.readFile(pathFile,'utf-8',function(err,files) {
            if (err) {
                throw new Error('读取文件失败');
            }else{
                resolve(files);
            }
        })
    }))
};

/**
 * 写入文件
 * @param {[String]} pathFile 文件路径包括名称
 * @param {[String]} text 文件内容
 * */
const writeFile = async function(pathFile, text) {
    return new Promise(resolve => {
        fse.outputFile(pathFile, text, function(err) {
            if (err) {
                throw new Error('文件写入成功失败');
            }
            console.log(pathFile + ' 文件写入成功！');
            resolve(text);
        })
    })
};

/**
 * 复制文件到template
 * @param {[String]} pathFile 文件路径包括名称
 * @param {[String]} targetPathFile 文件内容
 * */
const copyFileTemp = async function(pathFile, targetPathFile) {
    return new Promise(async resolve => {
        await fse.remove(targetPathFile);
        await fse.copy(path.join(pathFile), path.join(targetPathFile));
        resolve(true)
    })
};

/**
 * 复制文件到当前开发环境
 * @param {[String]} pathFile 文件路径包括名称
 * @param {[String]} targetPathFile 文件内容
 * */
const copyFileDev = async function(pathFile, targetPathFile) {
    return new Promise(async resolve => {
        let list  = await fse.readdir(pathFile);
        list = list.filter(item => !/^webpack.+\.js$/.test(item));

        console.log('开发环境生成开始！');
        console.log('------------------------------------------>');
        for(let i = 0, len = list.length; i < len;i++) {
            const item = list[i];
            await fse.copy(path.join(pathFile, item), path.join(targetPathFile, item))
            console.log(item)
        }
        console.log('开发环境生成完毕！');
        console.log('------------------------------------------>');
        resolve(true);
    })
};



module.exports = {
    rootDirectory: rootDirectory,
    devDirectory: devDirectory,
    libDirectory: libDirectory,
    templateDirectory: templateDirectory,
    readFile: readFile,
    writeFile: writeFile,
    copyFileTemp: copyFileTemp,
    copyFileDev: copyFileDev,
    getCmdStr: getCmdStr
};