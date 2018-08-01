const path = require('path');
const program  = require('commander');
const config =require('../config/index').config;
const humanComputerInteraction = require('../utils/humanComputerInteraction').humanComputerInteraction;
const files = require('../utils/files');
program
    .command('init')
    .description('构建项目')
    .action(async function(ops){
        // console.log(ops) 获取options选项
        let answerResult,
            libDir,
            devDir = files.devDirectory();
            tempDir = files.templateDirectory();
            answerResult = await humanComputerInteraction(config.messageCommandQuestion);
        // 放弃生成项目
        if(!answerResult.confirm) return;

        libDir = files.libDirectory(answerResult);

        // 拷贝文件到template文件夹
        await files.copyFileTemp(libDir, tempDir);
        // 生成开发环境
        await files.copyFileDev(tempDir, devDir);

        const object =  {
            path: libDir,
            entry: ''
        };
        await files.writeFile(path.join(devDir, config.webpackConfigFileName), JSON.stringify(object, null, 2));


    });