const program  = require('commander');
const humanComputerInteraction = require('../utils/humanComputerInteraction').humanComputerInteraction;
const coptyProject = require('../utils/copyFile').copyProject;
program
    .command('init')
    .description('构建项目')
    .action(async function(options){
        // console.log(options) 获取options选项
        const message = await humanComputerInteraction();
        await coptyProject(message);

    });
program.parse(process.argv);