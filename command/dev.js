const path = require('path');
const program  = require('commander');
const system = require('../utils/systemCommand');
program
    .command('dev')
    .description('dev环境')
    .option('-ie, --ie', '兼容ie7')
    .option('-m, --mock', 'mock数据')
    .action(async function(ops){
        // console.log(ops) 获取options选项

        // 检测是否安装webpack
        const resultWebpack = await system.command({
            cmdStr: 'webpack --help',
            beforeMsg: '',
            errMsg: '',
            successMsg: ''
        });
        if(!resultWebpack) {
            // 需要安装的组件
            const packages = ['webpack', 'webpack-command', 'webpack-cli', 'webpack-dev-server', 'webpack-node-externals', 'webpack-bundle-analyzer'];
            for (let i = 0, len = packages.length; i <= len; i++) {
                const item = packages[i];
                await system.command({
                    cmdStr: `npm install -g ${item}`,
                    beforeMsg: `正在安装 ${item}, 请稍后……`,
                    errMsg: `安装${item} 失败`,
                    successMsg: `${item}安装 已完成`
                })
            }
        }

        await system.command({
            cmdStr: `webpack-dev-server --config ${path.resolve(__dirname, '../template', 'webpack.config.dev.js')}/webpack.config.dev.js --open`,
            beforeMsg: ``,
            errMsg: `启动失败`,
            successMsg: ``
        })
    });