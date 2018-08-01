const program  = require('commander');
const config = require('./index').config;
program
    .version(config.vertion)
    .usage('sanctuary [command]');