const { expect } = require('@jest/globals');
const Bag = require('./Bag');

describe('bag', () => {
    test('check constructor', () => {
        // No weight argument passed
        expect(() => new Bag()).toThrowError('Bag must have a weight');
        const bag = new Bag(6);
        expect(bag.weight).toEqual(6);

    })
})