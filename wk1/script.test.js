const { expect } = require('@jest/globals');
const { deserialize } = require('jest-serializer');
const person = require('./script');

describe('person', () => {
    // Check names
    test('check name', () => {
        // William
        expect(person.william.firstName).toEqual('William');
        expect(person.william.lastName).toEqual('Windsor');
        // Charles
        expect(person.charles.firstName).toEqual('Charles');
        expect(person.charles.lastName).toEqual('George');
    })
    // Check the childOf function
    test('check parents', () => {
        expect(person.louis.childOf()).toEqual('William & Catherine');
        expect(person.catherine.childOf()).toEqual('parents unknown');
    })
})