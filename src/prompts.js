const inquirer = require('inquirer');
const validator = require('node-email-validation');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const generatePageFunctions = require('./html-output');


const teamMembers = [];

module.exports = 
init = async () => {
    console.log (
        'Welcome to your TEAM PROFILE GENERATOR!'
    )
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is your Manager's name?`,
                validate: nameInput => {
                    if (!nameInput) {
                        console.log(`Please provide the name of your Manager!`);
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: ({name}) => (`What is ${name}'s' employee ID?`),
                validate: idInput => {
                    if(!idInput) {
                        console.log(`Please enter a valid ID.`);
                        return false;
                    }
                    return true;
                }
            },
            {
                
            }
        ])
}