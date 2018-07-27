const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const config = require('../config/config').config;
const util = require('./util');
const system = require('./systemCommand');
/**
 * 拷贝环境
 * @param {[Object]} selectResult 生成环境配置信息
 * */
async function copyProject (selectResult) {
    // 放弃生成项目
    if(selectResult.confirm === 'n') return;

    const key = util.objValueToString(selectResult);
    const package = config.packages[key];

    // xforce-cli 更目录
    const dir = path.resolve(__dirname, '../');

    // 拷贝目标目录
    const dirTemplate = './template';
    const projectPath = await system.command({
        cmdStr: system.env().windows ? 'cd' : 'pwd',
        beforeMsg: '',
        errMsg: '',
        success: ''
    });
    // 删除旧文件
    await fse.remove(dirTemplate).then(()=> {
        console.log('清空template目录');
    }).catch((err) => {
        console.log(err);
    });

    // 拷贝到template
    await fse.copy(path.join(dir, package.path), path.join(dir, dirTemplate)).then(() => {
        console.log('template文件生成成功');
    }).catch((err) => {
        console.log(err);
    });


    // 开发环境不生成项目
    if(dir === projectPath) {
        console.log(package.name + ' 环境已生成');
        console.log('路径:' + projectPath);
        return;
    }

    // 生成项目
    await fse.copy(path.join(dir, dirTemplate), path.join(projectPath)).then(() => {
        console.log(package.name + ' 环境已生成');
        console.log('路径:' + projectPath);
    }).catch((err) => {
        console.log(err);
    });



};

exports.copyProject = copyProject;