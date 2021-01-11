class Plane {

    flightNumber;
    passengers;
    origin;
    destination;
    /**
     * Generates a plane with flight number
     * @constructor
     * @param {string} flightNumber 
     */

    constructor(flightNumber) {
        if(!flightNumber) {
            throw new Error("Plane must have a flight number");
        }
        this.flightNumber = flightNumber;
        this.passengers = [];
    }
    /**
     * Set the departure airport for the flight
     * @param {airport} origin 
     */
    setOrigin(origin) {
        this.origin = origin;
    }

    /**
     * Set the destination airport for the flight
     * @param {airport} destination 
     */
    setDestination(destination) {
        this.destination = destination;
    }

    /**
     * Add a passenger to the boarding list
     * @param {passenger} passenger 
     */
    boardPassenger(passenger) {
        this.passengers.push(passenger);
    }
}

module.exports = Plane;