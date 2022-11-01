"use strict";
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];
const nestedArray = [];
// TS helps with inference when extracting value from an array
const ford = carMakers[0];
const myCar = carMakers.pop();
// TS prevents incompatible values from being added to an array
// carMakers.push(23); // error
// TS helps with built in methods e.g map, forEach etc
carMakers.map((car) => {
    return car;
});
// Flexible types
const importantDates = [new Date(), '10-10-2030'];
importantDates.push('12-10-2022');
importantDates.push(new Date());
