const program  = require('commander');
const humanComputerInteraction = require('../utils/humanComputerInteraction').humanComputerInteraction;
const coptyProject = require('../utils/copyFile').coptyProject;
program
    .command('init')
    .description('构建项目')
    .action(async function(){
        const message = await humanComputerInteraction();
        await coptyProject(message);

    });
program.parse(process.argv);