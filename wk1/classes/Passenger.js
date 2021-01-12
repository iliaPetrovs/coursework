const Person = require('./Person');
/**
 * Represents a passenger flying on a plane
 */
class Passenger extends Person {
    ticketNumber;

    constructor(name, ticketNumber, bag) {
        super(name, bag);
        this.ticketNumber = ticketNumber;
    }
}

module.exports = Passenger;