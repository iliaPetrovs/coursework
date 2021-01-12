const { describe, expect } = require('@jest/globals');
const Crew = require('./Crew');

describe('Airport test', () => {
    test('has a name', () => {
        expect(() => new Crew()).toThrowError('Must have a name');
        const john = new Crew('John');
        expect(john.name).toEqual('John');
    })
})