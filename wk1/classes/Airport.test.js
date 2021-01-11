const { describe, expect } = require('@jest/globals');
const Airport = require('./Airport');
const Plane = require('./Plane');
const Passenger = require('./Passenger');
const Bag = require('./Bag');

describe('Airport test', () => {
    test('check constructor', () => {
        expect(() => new Airport()).toThrowError('Airport must have a name');
        const lhw = new Airport('LHW');
        expect(lhw.airportName).toEqual('LHW');
    })
    test('Have an airport, with a plane, with passengers who have bags', () => {
        const lhw = new Airport('LHW');
        const oceanic = new Plane('Oceanic 815');
        const john = new Passenger('John Doe');
        const jack = new Passenger('Jack Doe');
        const johnBag = new Bag(5);
        const jackBag = new Bag(10);
        john.addBag(johnBag);
        jack.addBag(jackBag);
        oceanic.boardPassenger(john);
        oceanic.boardPassenger(jack);
        lhw.addPlane(oceanic);
        expect(lhw.planes[0].passengers[0].bags[0].weight).toEqual(5);
    })
})