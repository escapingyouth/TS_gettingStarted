"use strict";
let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;
let now = new Date();
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3];
let truths = [true, false];
class Car {
}
let car = new Car();
let point = {
    x: 10,
    y: 20
};
const user = {
    name: 'Michael',
    age: 20,
    hobbies: ['coding', 'reading', 'exercising'],
    description: {
        height: 1.69,
        weight: 57
    }
};
const logNumber = (i) => {
    console.log(i);
};
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
