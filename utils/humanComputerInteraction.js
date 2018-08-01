const inquirer = require('inquirer');
async function humanComputerInteraction(question) {
    return new Promise((resolve) => {
        inquirer.prompt(question).then((answers) => {
            resolve(answers);
        })
    })
}

exports.humanComputerInteraction = humanComputerInteraction;