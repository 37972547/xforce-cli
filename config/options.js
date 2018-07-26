const program  = require('commander');
const config = require('./config').config;
program.version(config.vertion)
    .usage('xforce-cli')
    // .option('-d, --demo', '选项说明写这里');
program.parse(process.argv);