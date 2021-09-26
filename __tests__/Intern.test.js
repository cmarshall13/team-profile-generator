const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test(`create Intern object`, () => {
    const intern = new Intern('Corinne', '28', 'corinnelynette@yahoo.com', 'Western CT State University');

    expect(intern.name).toBe('Corinne');
    expect(intern.id).toBe('28');
    expect(intern.email).toBe('corinnelynette@yahoo.com');
    expect(intern.school).toBe('Western CT State University');
});

test(`functions to get object descriptions return proper values`, () => {
    const intern = new Intern('Corinne', '28', 'corinnelynette@yahoo.com', 'Western CT State University');

    expect(intern.getName()).toBe('Corinne');
    expect(intern.getId()).toBe('28');
    expect(intern.getEmail()).toBe('corinnelynette@yahoo.com');
});

test(`getSchool() returns a string`, () => {
    const intern = new Intern('Corinne', '28', 'corinnelynette@yahoo.com', 'Western CT State University');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test(`getRole() returns Intern`, () => {
    const intern = new Intern('Corinne', '28', 'corinnelynette@yahoo.com', 'Western CT State University');

    expect(intern.getRole()).toBe('Intern');
});

test(`getCard() returns a string`, () => {
    const intern = new Intern('Corinne', '28', 'corinnelynette@yahoo.com', 'Western CT State University');

    expect(intern.getCard()).toEqual(expect.any(String));
});