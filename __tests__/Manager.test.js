const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test(`creates Manager object`, () => {
    const manager = new Manager('Corinne', '28', 'corinnelynette@yahoo.com', 1313);

    expect(manager.name).toBe('Corinne');
    expect(manager.id).toBe('28');
    expect(manager.email).toBe('corinnelynette@yahoo.com');
    expect(manager.office).toBe(1313);
});

test(`get functions return proper values`, () => {
    const manager = new Manager('Corinne', '28', 'corinnelynette@yahoo.com', 1313);

    expect(manager.getName()).toBe('Corinne');
    expect(manager.getId()).toBe('28');
    expect(manager.getEmail()).toBe('corinnelynette@yahoo.com');
});

test(`getOffice() returns a number`, () => {
    const manager = new Manager('Corinne', '28', 'corinnelynette@yahoo.com', 1313);

    expect(manager.getOffice()).toEqual(expect.any(Number));
});

test(`getRole() returns Manager`, () => {
    const manager = new Manager('Corinne', '28', 'corinnelynette@yahoo.com', 1313);

    expect(manager.getRole()).toBe('Manager');
});

test(`getCard() returns a string`, () => {
    const manager = new Manager('Corinne', '28', 'corinnelynette@yahoo.com', 1313);

    expect(manager.getCard()).toEqual(expect.any(String));
});