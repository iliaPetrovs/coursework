const { ModuleNotFoundError } = require("jest-resolve");
const Plane = require('./classes/Plane');
const Passenger = require('./classes/Person');
const Bag = require('./classes/Bag');
const Airport = require('./classes/Airport');

function childOf() {
    return this.parents.map(parent => parent.firstName).join(' & ') || "parents unknown";
  }

const diana = {
    firstName: "Diana",
    lastName: "Spencer",
    parents: [],
    childOf: childOf
}

const charles = {
    firstName: "Charles",
    lastName: "George",
    parents: [],
    childOf: childOf
}

const william = {
    firstName: "William",
    lastName: "Windsor",
    parents: [diana, charles],
    childOf: childOf
}

const catherine = {
    firstName: "Catherine",
    lastName: "Middleton",
    parents: [],
    childOf: childOf
}

const george = {
    firstName: "George",
    lastName: "Windsor",
    parents: [william, catherine],
    childOf: childOf
}

const charlotte = {
    firstName: "Charlotte",
    lastName: "Windsor",
    parents: [william, catherine],
    childOf: childOf
}

const louis = {
    firstName: "Louis",
    lastName: "Windsor",
    parents: [william, catherine],
    childOf: childOf
}

// console.log(louis.childOf());
// console.log(catherine.childOf());

module.exports = {diana, charles, catherine, william, louis, childOf}