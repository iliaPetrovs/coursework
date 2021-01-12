/**
 * Represents a person
 */
class Person {
    name;
    bags;

    /**
     * Generates a person with a name
     * @constructor
     * @param {string} name first and last name
     */
    constructor(name) {
        if(!name) throw new Error ('Must have a name');
        this.name = name;
        this.bags = [];
    }

    /**
     * Add a bag to the person's possessions
     * @param {bag} bag 
     */
    addBag(bag) {
        this.bags.push(bag);
    }
}

module.exports = Person;