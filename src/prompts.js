const fs = require('fs');
const buildTeamInfo = require('.prompts');

buildTeam = (teamMembers) => {
    const employeeCards = [];

    for (member of teamMembers) {employeeCards.push(member.getCard()); };
    console.log ('Your Team Members:');
    console.table(teamMembers);
    buildPage(employeeCards);
};