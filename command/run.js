const path = require('path');
const program  = require('commander');
const files = require('../utils/files');
const system = require('../utils/systemCommand');
const util = require('../utils/util');

program
    .command('run <name>')
    .description('执行package scripts 打包命令')
    .action(async function(name, ops){
        // console.log(ops) 获取options选项
        const webpackJsonConfig = require(path.resolve('webpack.json'));

        const libDir = webpackJsonConfig.path;
        const tempDir = files.templateDirectory();

        // 拷贝文件到template文件夹
        await files.copyFileTemp(libDir, tempDir);
        const cmdStr = files.getCmdStr(name);

        system.command({
            cmdStr: cmdStr,
            beforeMsg: cmdStr,
            errMsg: '',
            successMsg: ''
        });

    });