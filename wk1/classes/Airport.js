/**
 * Represents an airport with a name, planes, gates and terminals
 */
class Airport {
    airportName;
    planes;
    gates;
    terminals;
    /**
     * Generates an airport with a name
     * @constructor
     * @param {string} name as an airport code
     */
    constructor(name) {
        if (!name) throw new Error('Airport must have a name');
        this.airportName = name;
        this.planes = [];
    }

    /**
     * Add a plane to the airport
     * @param {plane} plane 
     */
    addPlane(plane) {
        this.planes.push(plane);
    }
}

module.exports = Airport;