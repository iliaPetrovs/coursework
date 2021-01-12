const { describe, expect } = require('@jest/globals');
const Airport = require('./Airport');
const Plane = require('./Plane');
const Passenger = require('./Passenger');
const Bag = require('./Bag');

describe('Airport test', () => {
    const oceanic = new Plane('Oceanic 815');
    const lhw = new Airport('LHW');
    const john = new Passenger('John');
    const jack = new Passenger('Jack');
    test('check constructor', () => {
        expect(() => new Plane()).toThrowError('Plane must have a flight number');
        expect(oceanic.flightNumber).toEqual('Oceanic 815');
    });
    test('check origin and destination', () => {
        oceanic.setOrigin(lhw);
        oceanic.setDestination(lhw);
        expect(oceanic.origin).toEqual(lhw);
        expect(oceanic.destination).toEqual(lhw);
    })
    test('check boarding passengers works', () => {
        oceanic.boardPassenger(john);
        oceanic.boardPassenger(jack);
        expect(oceanic.passengers.length).toEqual(2);
    })
})