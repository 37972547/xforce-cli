const path = require('path');
const program  = require('commander');
const config = require('../config/index').config;
const files = require('../utils/files');
const system = require('../utils/systemCommand');
const util = require('../utils/util');

program
    .command('run <name>')
    .description('执行package scripts 打包命令')
    .action(async function(name, ops){
        // console.log(ops) 获取options选项
        const webpackConfig = require(path.resolve(config.webpackConfigFileName));
        if(/server/i.test(webpackConfig.path)) {
            console.log('node后台服务请使用 npm run 启动！');
            return;
        }

        const libDir = webpackConfig.path;
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