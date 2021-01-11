const { describe, expect } = require('@jest/globals');
const Airport = require('./Airport');
const Plane = require('./Plane');
const Passenger = require('./Passenger');
const Bag = require('./Bag');

describe('Airport test', () => {
    test('check constructor', () => {
        expect(() => new Plane()).toThrowError('Plane must have a flight number');
        const oceanic = new Plane('Oceanic 815');
        expect(oceanic.flightNumber).toEqual('Oceanic 815');
    });
    test('check origin and destination', () => {
        const lhw = new Airport('LHW');
        const oceanic = new Plane('Oceanic 815');
        oceanic.setOrigin(oceanic);
        expect(oceanic.origin).toEqual(oceanic);
    })
})