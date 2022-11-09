"use strict";
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};
const printVehicle = (vehicle) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};
const printSummary = (item) => {
    console.log(item.summary());
};
printVehicle(oldCivic);
printSummary(oldCivic);
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};
printSummary(drink);
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + '' + this.name);
    }
}
