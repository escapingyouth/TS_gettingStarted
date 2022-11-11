"use strict";
var _a;
const employee1 = {
    name: 'Michael',
    privileges: ['create-server'],
    startDate: new Date()
};
const printEmployeeInformation = (employee) => {
    if ('privileges' in employee) {
        console.log(`Privileges: ${employee.privileges}`);
    }
    if ('startDate' in employee) {
        console.log(`Start date: ${employee.startDate}`);
    }
};
class Car {
    drive() {
        console.log('Driving a car....');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck....');
    }
    load(amount) {
        console.log('Loading...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.load(100);
    }
};
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed ' + speed);
};
moveAnimal({ type: 'bird', flyingSpeed: 100 });
const userInputElement = (document.getElementById('user-input'));
const paragraph = document.getElementById('user-info');
paragraph.innerText = 'Hey';
userInputElement.value = 'Hi there';
const errorBag = {
    username: 'Must start with a letter',
    id: '2020',
    email: 'Not a valid email address'
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const fetchedUserData = {
    id: 'u1',
    name: 'Michael',
    job: { title: 'CEO', description: 'My own company' }
};
(_a = fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title;
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
