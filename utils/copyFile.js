const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const config = require('../config/config').config;
const util = require('./util');
const getProjectPath = require('../utils/ProjectPath').getProjectPath;
/**
 * 拷贝环境
 * @param {[Object]} selectResult 生成环境配置信息
 * */
async function coptyProject (selectResult) {
    // console.log(selectResult, '--====');
    // 取消配置
    if(selectResult.confirm === 'n') return;

    const key = util.objValueToString(selectResult);
    const package = config.packages[key];

    // xforce-cli 更目录
    const dir = path.resolve(__dirname, '../');

    // 拷贝目标目录
    const dirTemplate = './template';
    const projectPath = await getProjectPath();
    console.log(projectPath, '-----');

    // const targetDir = package.path.substr(package.path.lastIndexOf('/') + 1);

    //
   /* const isDirectory = fs.existsSync(path.join(dir, './template', targetDir));
    if(isDirectory) {
        throw new Error('该项目已存在，不能重复创建！');
    }*/

   // console.log(dir);
    // 删除旧文件
    await fse.remove(dirTemplate).then(()=> {
        console.log('删除template目录');
    }).catch((err) => {
        console.log(err);
    });

    // 拷贝到template
    await fse.copy(path.join(dir, package.path), path.join(dir, dirTemplate)).then(() => {
        console.log('template文件生成成功');
    }).catch((err) => {
        console.log(err);
    });

    await fse.copy(path.join(dir, dirTemplate), path.join('E:/test/sss')).then(() => {
        console.log(package.name + ' 环境配置成功');
    }).catch((err) => {
        console.log(err);
    });



};

exports.coptyProject = coptyProject;