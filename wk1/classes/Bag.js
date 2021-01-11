class Bag {
    /**
     * Generates a bag with a weight on it
     * @constructor
     * @param {number} weight 
     */
    constructor(weight) {
        if(!weight) throw new Error('Bag must have a weight');
        this.weight = weight;
    }
}

module.exports = Bag;