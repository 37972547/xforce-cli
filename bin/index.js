#!/usr/bin/env node
const commander  = require('commander');
const xforce = {};
xforce.options = require('./common').options; //  初始化自定义参数对象
xforce.commands = require('./common').commands; //  初始化自定义参数对象

xforce.options(commander);
xforce.commands(commander);
commander.parse(process.argv);

