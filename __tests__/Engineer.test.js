const Engineer = require('../lib/Engineer');

test(`creates a new Engineer object`, () => {
    const engineer = new Engineer('Corinne', 28, 'corinnelynette@yahoo.com', 'cmarshall13');

    expect(engineer.name).toBe('Corinne');
    expect(engineer.id).toBe(28);
    expect(engineer.email).toBe('corinnelynette@yahoo.com');
    expect(engineer.github).toBe('cmarshall13');
});