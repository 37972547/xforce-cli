const inquirer = require('inquirer');
const config = require('../config/config').config;
async function humanComputerInteraction() {
    return new Promise((resolve, reject) => {
        inquirer.prompt(config.messageCommandQuestion).then((answers) => {
            resolve(answers);
        })
    })
}

exports.humanComputerInteraction = humanComputerInteraction;