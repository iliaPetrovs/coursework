class Passenger {
    name;
    bags;

    /**
     * Generates a passenger with a name who will end up boarding a plane
     * @constructor
     * Passenger boarding plane
     * @param {string} name 
     */
    constructor(name) {
        if(!name) throw new Error ('Passenger must have a name');
        this.name = name;
        this.bags = [];
    }

    /**
     * Add a bag to the passengers possessions
     * @param {bag} bag 
     */
    addBag(bag) {
        this.bags.push(bag);
    }
}

module.exports = Passenger;