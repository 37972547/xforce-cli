const program  = require('commander');
const { isWebpack, installWebpack, installWebpackCommand, installWebpackCli } = require('../utils/systemCommand');
program
    .command('dev')
    .description('dev环境')
    .option('-ie, --ie', '兼容ie7')
    .option('-m, --mock', 'mock数据')
    .action(async function(ops){
        // console.log(ops) 获取options选项
        // 检测是否安装webpack
        const resultWebpack = await isWebpack();
        if(!resultWebpack) {
            await installWebpack();
            await installWebpackCommand();
            await installWebpackCli();
        }
    });