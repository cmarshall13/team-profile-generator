const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub() {return this.github};
    getRole() {return 'Engineer'};
    getCard() {
        return `<div class = "row">
            <div class = "col s12 m6">
                <div class = "card blue-grey darken-1">
                    <div class = "card-content white-text">
                        <h2 class = "card-title">${this.name}</h2>
                        <h3 class = "card-subtitle">
                            <i class = "medium material-icons">account_box</i> ${this.getRole()}
                        </h3>
                    </div>
                    <div class = "card-action">
                        <span>Employee ID:</span> ${this.id} <br/>
                        <span>Email:</span> <a href = "mailto:${this.email}">${this.email}</a> <br/>
                        <span>GitHub:</span> <a href="https://github.com/${this.github}" target="_blank">${this.github}</a>
                    </div>
                </div>
            </div>`};
};

module.exports = Engineer;