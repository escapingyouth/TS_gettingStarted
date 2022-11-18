"use strict";
const names = ['John', 'Jane', 'Mary'];
const nums = [1, 'John', 2, 'Jonathan'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then((data) => {
    console.log(data.split(' '));
});
const identity = (arg) => {
    return arg;
};
let output = identity('myString');
function getRandomElement(list) {
    let randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
getRandomElement([2, 3, 4]);
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'John' }, { age: 30 });
const countAndPrint = (element) => {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
};
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Alphonse' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Joshua');
textStorage.addItem('Tina');
textStorage.removeItem('Joshua');
textStorage.getItems();
const numberStorage = new DataStorage();
const createCourseGoal = (title, description, date) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
const friends = ['Toshiro', 'Annie'];
class IdentityClass {
    constructor(value) {
        this.value = value;
    }
    getIdentity() {
        return this.value;
    }
}
const myNumberClass = new IdentityClass(1);
console.log(myNumberClass.getIdentity());
const myStringClass = new IdentityClass('Hello!');
console.log(myStringClass.getIdentity());
