"use strict";
class Department {
    constructor(name, id) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new Department('Accounting', '212');
accounting.describe();
const accountingCopy = {
    describe: accounting.describe
};
const accountingDepartment = new AccountingDepartment('20727630', [
    'Add new budget',
    'Revise quarter revenue'
]);
accountingDepartment.mostRecentReport;
accountingDepartment.mostRecentReport = 'Review share distributions';
const employee1 = Department.createEmployee('Michael');
console.log(employee1);
class Automobile {
    constructor(color) {
        this.color = color;
    }
    ignite() {
        console.log('chugga chugga');
    }
    honk() {
        console.log('beep');
    }
}
const vehicle = new Automobile('red');
console.log(vehicle.color);
class Car extends Automobile {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('vroom');
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const car = new Car(4, 'black');
car.startDrivingProcess();
