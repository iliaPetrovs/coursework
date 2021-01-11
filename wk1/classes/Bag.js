/**
 * Represents a bag a passenger would either bring on as hand luggage or have checked in
 */
class Bag {
    /**
     * Generates a bag with a weight on it
     * @constructor
     * @param {number} weight in kg
     */
    constructor(weight) {
        if(!weight) throw new Error('Bag must have a weight');
        this.weight = weight;
    }
}

module.exports = Bag;