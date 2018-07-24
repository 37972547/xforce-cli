const inquirer = require('inquirer');
const downloadGit = require('download-git-repo');
const humanComputerInteraction = require('./humanComputerInteraction').humanComputerInteraction;
const coptyProject = require('./handleFile').coptyProject;
const options = function (program) {
        program
        .version('0.0.1')
        .usage('<command> [config]')
        .option('-c, copy [name]', '复制')
};


const commands = function (program) {
    program
        .command('init')
        .description('构建项目')
        // .option( '-x, --xxx', 'Whether to display hidden files' )
        .action(function(){
            async function message() {
                return await humanComputerInteraction();
            }

            message().then((result) => {
                coptyProject(result);

                /*downloadGit('github:37972547/vg-test', 'test/tmp', function (err) {
                    if(err) {
                        throw new Error('错误');
                    }else{
                        console.log('项目加载完毕');
                    }
                })*/
            })

        });
};

module.exports = {
    options: options,
    commands: commands
};