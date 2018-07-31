const path = require('path');
const program  = require('commander');
const humanComputerInteraction = require('../utils/humanComputerInteraction').humanComputerInteraction;
const files = require('../utils/files');
program
    .command('init')
    .description('构建项目')
    .action(async function(ops){
        // console.log(ops) 获取options选项
        let selected,
            libDir,
            devDir = files.devDirectory();
            tempDir = files.templateDirectory();
            selected = await humanComputerInteraction();

        // 放弃生成项目
        if(selected.confirm === 'n') return;

        libDir = files.libDirectory(selected);

        // 拷贝文件到template文件夹
        await files.copyFileTemp(libDir, tempDir);

        // 生成开发环境
        await files.copyFileDev(tempDir, devDir);


        const object =  {
            path: libDir,
            entry: "",
            output: ""
        };
        await files.writeFile(path.join(devDir, 'webpack.json'), JSON.stringify(object, null, 2));

    });