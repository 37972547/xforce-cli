const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const config = require('./config').config;
const util = require('./util');
/**
 * 拷贝环境
 * @param {[Object]} selectResult 生成环境配置信息
 * */
const coptyProject = function (selectResult) {
    // console.log(selectResult, '--====');
    // 取消配置
    if(selectResult.confirm === 'n') return;

    const key = util.objValueToString(selectResult);
    const package = config.packagePath[key];

    const dir = path.resolve(__dirname, '../');
    const targetDir = package.path.substr(package.path.lastIndexOf('/') + 1);

    //
    const isDirectory = fs.existsSync(path.join(dir, './test', targetDir));
    if(isDirectory) {
        throw new Error('该项目已存在，不能重复创建！');
    }

    fse.copy(path.join(dir, package.path), path.join(dir, './test', targetDir)).then(() => {
        console.log(package.name + ' 环境配置成功');
    }).catch((err) => {
        console.log(err);
    });
};

exports.coptyProject = coptyProject;