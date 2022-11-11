type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// intersection types
type ElevatedEmployee = Admin & Employee; // type ElevatedEmployees gets access to all properties of Admin and Employee

const employee1: ElevatedEmployee = {
	name: 'Michael',
	privileges: ['create-server'],
	startDate: new Date()
};

// union types
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// type guards
type UnknownEmployee = Employee | Admin;
const printEmployeeInformation = (employee: UnknownEmployee): void => {
	if ('privileges' in employee) {
		console.log(`Privileges: ${employee.privileges}`);
	}
	if ('startDate' in employee) {
		console.log(`Start date: ${employee.startDate}`);
	}
};

// type guards with classes

class Car {
	drive() {
		console.log('Driving a car....');
	}
}
class Truck {
	drive() {
		console.log('Driving a truck....');
	}
	load(amount: number) {
		console.log('Loading...' + amount);
	}
}
const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck;

const useVehicle = (vehicle: Vehicle) => {
	vehicle.drive();

	if (vehicle instanceof Truck) {
		vehicle.load(100);
	}
};

// discriminated Unions
interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
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

// type casting
const userInputElement = <HTMLInputElement>(
	document.getElementById('user-input')
);

const paragraph = document.getElementById('user-info')! as HTMLParagraphElement;
// The exclamation (!) implies the element will never return null
paragraph.innerText = 'Hey';

userInputElement.value = 'Hi there';

// index properties - helps to declare an interface which can contain different properties or multiple properties
interface ErrorContainer {
	[prop: string]: string;
	username: 'Must start with a letter';
	id: string;
}

const errorBag: ErrorContainer = {
	username: 'Must start with a letter',
	id: '2020',
	email: 'Not a valid email address'
};

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

// optional chaining
const fetchedUserData = {
	id: 'u1',
	name: 'Michael',
	job: { title: 'CEO', description: 'My own company' }
};
fetchedUserData.job?.title;

// nullish coalescing
const userInput = null;
const storedData = userInput ?? 'DEFAULT';
