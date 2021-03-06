const { describe, expect } = require('@jest/globals');
const Passenger = require('./Passenger');

describe('Airport test', () => {
    test('has a name', () => {
        expect(() => new Passenger()).toThrowError('Must have a name');
        const john = new Passenger('John');
        expect(john.name).toEqual('John');
    })
})