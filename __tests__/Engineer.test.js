const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test(`creates a new Engineer object`, () => {
    const engineer = new Engineer('Corinne', 28, 'corinnelynette@yahoo.com', 'cmarshall13');

    expect(engineer.name).toBe('Corinne');
    expect(engineer.id).toBe(28);
    expect(engineer.email).toBe('corinnelynette@yahoo.com');
    expect(engineer.github).toBe('cmarshall13');
});

test(`functions for object descriptions return said value`, () => {
    const engineer = new Engineer('Corinne', 28, 'corinnelynette@yahoo.com', 'cmarshall13');

    expect(engineer.getName()).toBe('Corinne');
    expect(engineer.getId()).toBe(28);
    expect(engineer.getEmail()).toBe('corinnelynette@yahoo.com');
});

test(`getGithub() returns a string`, () => {
    const engineer = new Engineer('Corinne', 28, 'corinnelynette@yahoo.com', 'cmarshall13');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test(`getRole() returns Engineer`, () => {
    const engineer = new Engineer('Corinne', 28, 'corinnelynette@yahoo.com', 'cmarshall13');

    expect(engineer.getRole()).toBe('Engineer');
});

test(`getCard() returns a string`, () => {
    const engineer = new Engineer('Corinne', 28, 'corinnelynette@yahoo.com', 'cmarshall13');

    expect(engineer.getCard()).toEqual(expect.any(String));
});