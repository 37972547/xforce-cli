const program  = require('commander');
program
    .command('build')
    .description('打包生产环境')
    .option('-i, --ie', '兼容ie7')
    .action(async function(ops){
        // console.log(ops) 获取options选项

    });