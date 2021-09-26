const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('Corinne', 28, 'corinnelynette@yahoo.com');

    expect(employee.name).toBe('Corinne');
    expect(employee.id).toBe(28);
    expect(employee.email).toBe('corinnelynette@yahoo.com');
});

test(`getName() returns a string`, () => {
    const employee = new Employee('Corinne', 28, 'corinnelynette@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test(`getId() returns id value`, () => {
    const employee = new Employee('Corinne', 28, 'corinnelynette@yahoo.com');

    expect(employee.getId()).toBe(employee.id);
});