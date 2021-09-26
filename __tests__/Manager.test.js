const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test(`creates Manager object`, () => {
    const manager = new Manager('Corinne', '28', 'corinnelynette@yahoo.com', 1313);

    expect(manager.name).toBe('Corinne');
    expect(manager.id).toBe('28');
    expect(manager.email).toBe('corinnelynette@yahoo.com');
    expect(manager.office).toBe(1313);
});