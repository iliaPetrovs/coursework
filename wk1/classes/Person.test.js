const { describe, expect } = require('@jest/globals');
const Person = require('./Person');

describe('Airport test', () => {
    test('check all functions', () => {
        expect(() => new Person()).toThrowError('Must have a name');
        const john = new Person('John');
        expect(john.name).toEqual('John');
    })
})