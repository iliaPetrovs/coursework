const Person = require('./Person');
/**
 * Represents a crew member flying on an airline
 */
class Crew extends Person {
    employeeNumber;

    constructor(name, employeeNumber, bag) {
        super(name, bag);
        this.employeeNumber = employeeNumber;
    }
}

module.exports = Crew;