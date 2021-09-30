const inquirer = require('inquirer');
const emailValidator = require('email-validator');
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
                    if (!emailValidator.validate(emailInput)) {
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

engineerPrompts = async () => {
    console.log(`ADD AN ENGINEER`)

    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the engineer's name?`,
                validate: nameInput => {
                    if (!nameInput) {
                        console.log(`Please enter a name for the engineer!`);
                        return false;
                    }
                    return true;
                }
            }, 
            {
                type: 'input',
                name: 'id',
                message: ({name}) => (`What is ${name}'s employee ID?`),
                validate: idInput => {
                    if (!idInput) {
                        console.log(`Please enter a valid ID.`);
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: ({ name }) => (`What is ${name}'s email address?`),
                validate: emailInput => {
                    if (!emailValidator.validate(emailInput)) {
                        console.log(`Please use a valid email address.`);
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'github',
                message: ({name}) => (`What is ${name}'s GitHub username?`),
                validate: githubInput => {
                    if (!githubInput) {
                        console.log(`Please enter a GitHub username.`);
                        return false;
                    }
                    return true;
                }
            },
        ]);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    addMemberOrBuildTeam();
};

internPrompts = async () => {
    console.log(`ADD AN INTERN`)

    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the intern's name?`,
                validate: nameInput => {
                    if (!nameInput) {
                        console.log(`Please enter a name for the intern.`);
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: ({name}) => (`What is ${name}'s employee ID?`),
                validate: idInput => {
                    if (!idInput) {
                        console.log(`Please enter a valid ID.`);
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: ({name}) => (`What is ${name}'s email address?`),
                validate: emailInput => {
                    if (!emailValidator.validate(emailInput)) {
                        console.log(`Please enter a valid email address.`);
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'school',
                message: ({name}) => (`Where does ${name} attend school?`),
                validate: schoolInput => {
                    if(!schoolInput) {
                        console.log(`Please enter a school name.`);
                        return false;
                    }
                    return true;
                }
            },
        ]);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    addMemberOrBuildTeam();
};