#!/usr/bin/env node
const program  = require('commander');
const fse = require('fs-extra');
const path = require('path');
require('../config/options');

// 加载所有命令行
fse.readdir(path.resolve(__dirname, '../', './command')).then((files) => {
    files.filter(item => /.+\.js$/.test(item))
    .forEach((file) => {
        require(`../command/${file.trim()}`);
    });
    program.parse(process.argv);
}).catch((err) => {
    console.log(err)
});

