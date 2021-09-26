const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    };

    getOffice() {return this.office};
    getRole() {return 'Manager'};
    getCard() {
        return `<div class = "row">
        <div class = "col s12 m6">
            <div class = "card blue-grey darken-1">
                <div class = "card-content white-text">
                    <h2 class = "card-title">${this.name}</h2>
                    <h3 class = "card-subtitle">
                        <i class = "medium material-icons">supervisor_account</i> ${this.getRole()}
                    </h3>
                </div>
                <div class = "card-action">
                    <span>Employee ID:</span> ${this.id} <br/>
                    <span>Email:</span> <a href = "mailto:${this.email}">${this.email}</a> <br/>
                    <span>Office:</span> ${this.office}
                </div>
            </div>
        </div>`
    };
};

module.exports = Manager;