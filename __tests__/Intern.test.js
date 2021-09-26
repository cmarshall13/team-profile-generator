const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test(`create Intern object`, () => {
    const intern = new Intern('Corinne', '28', 'corinnelynette@yahoo.com', 'Western CT State University');

    expect(intern.name).toBe('Corinne');
    expect(intern.id).toBe('28');
    expect(intern.email).toBe('corinnelynette@yahoo.com');
    expect(intern.school).toBe('Western CT State University');
});