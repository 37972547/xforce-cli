#!/usr/bin/env node
const program  = require('commander');
program.parse(process.argv);
require(`../command/${program.args}.js`);

