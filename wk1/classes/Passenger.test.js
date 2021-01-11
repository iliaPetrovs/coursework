const { describe, expect } = require('@jest/globals');
const Passenger = require('./Passenger');
const Bag = require('./Bag');

describe('Airport test', () => {
    test('check all functions', () => {
        expect(() => new Passenger()).toThrowError('Passenger must have a name');
        const john = new Passenger('John');
        expect(john.name).toEqual('John');
    })
})