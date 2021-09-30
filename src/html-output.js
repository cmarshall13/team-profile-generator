const fs = require('fs');
const buildTeamInfo = require('./prompts');

buildTeam = (teamMembers) => {
    const employeeCards = [];

    for (member of teamMembers) {employeeCards.push(member.getCard()); };
    console.log ('Your Team Members:');
    console.table(teamMembers);
    buildPage(employeeCards);
};

buildPage = employeeCards => {
    const htmlTemplate = `<!DOCTYPE html>
    <html lang ="en">
        <head>
            <meta charset = "UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title> Build Your Team</title>
            <style> 
            @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed&display=swap');
            </style>
            <link rel="stylesheet" href="./css/style.css" />
            </head>
            
            <body>
                <header>
                    <h1>My Team Builder</h1>
                </header>
                
                <main>
                    <div class="container">
                    ${employeeCards.join('')}
                </main>
            </body>
        </html>`

        renderHtmlTemplate(htmlTemplate);
};

renderHtmlTemplate = async (htmlTemplate) => {
    try {
        await fs.writeFileSync('./dist/index.html', htmlTemplate)
    } catch (err) {
        console.log(`${err} -- Something went wrong when writing your file, please try again!`);
    }
};