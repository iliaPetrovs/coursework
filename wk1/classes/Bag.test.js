const { expect } = require('@jest/globals');
const Bag = require('./Bag');

describe('bag', () => {
    test('check constructor', () => {
        // No weight argument passed
        expect(() => new Bag()).toThrowError('Bag must have a weight');
    })
})