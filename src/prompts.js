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
                type: 'input',
                name: 'email',
                message: ({name}) => (`What is ${name}'s email address?'`),
                validate: emailInput => {
                    if (!validator.is_email_valid(emailInput)) {
                        console.log(`Please enter a valid email address! `);
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `What is the manager's office number?`,
                validate: officeNumberInput => {
                    if (!officeNumberInput) {
                        console.log(`Please enter a valid number.`);
                        return false;
                    }
                    return true;
                }
            },
        ]);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    addMemberOrBuildTeam();
};

module.exports =
    addMemberOrBuildTeam = async () => {
        const userChoice = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'addOrBuild',
                    message: 'Would you like to add a new Team Member or finish building your team?',
                    choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
                },
            ]);
        switch (userChoice.addOrBuild) {
            case 'Add an engineer':
                engineerPrompts();
                break;
            case 'Add an intern':
                internPrompts();
                break;
            case 'Finish building my team':
                buildTeam(teamMembers);
                console.log(`Great job! You've finished building your team. Check your /dist directory's index.html file to see your team page in action.`);
                break;
        };
    };