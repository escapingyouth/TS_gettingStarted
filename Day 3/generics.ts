const names: Array<string> = ['John', 'Jane', 'Mary'];
const nums: Array<number | string> = [1, 'John', 2, 'Jonathan'];

// generic types help us to get additional type safety
// The TypeScript documentation explains Generics as
//“being able to create a component that can work over a variety of types rather than a single one.”
const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done!');
	}, 2000);
});

promise.then((data) => {
	console.log(data.split(' '));
});

// creating generic types
const identity = <Type>(arg: Type): Type => {
	// Type is a generic type variable that allows us to capture the type of the argument

	return arg;
};
let output = identity<string>('myString');

function getRandomElement<T>(list: T[]): T {
	let randIndex = Math.floor(Math.random() * list.length);
	return list[randIndex];
}
getRandomElement([2, 3, 4]);

// generic types with constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'John' }, { age: 30 });

interface Lengthy {
	length: number;
}

const countAndPrint = <T extends Lengthy>(element: T): [T, string] => {
	let descriptionText = 'Got no value.';
	if (element.length === 1) {
		descriptionText = 'Got 1 element.';
	} else if (element.length > 1) {
		descriptionText = 'Got ' + element.length + ' elements.';
	}
	return [element, descriptionText];
};

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Alphonse' }, 'name');

// generic classes
class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}
	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}
const textStorage = new DataStorage<string>();
textStorage.addItem('Joshua');
textStorage.addItem('Tina');
textStorage.removeItem('Joshua');
textStorage.getItems(); // ['Tina']

const numberStorage = new DataStorage<number>();

// generic utility types
interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}
const createCourseGoal = (
	title: string,
	description: string,
	date: Date
): CourseGoal => {
	let courseGoal: Partial<CourseGoal> = {};
	// partial makes all properties optional
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
};

const friends: Readonly<string[]> = ['Toshiro', 'Annie'];
// Readonly restricts us from altering the friends array

// generics with interfaces
interface GenericInterface<U> {
	value: U;
	getIdentity: () => U;
}

class IdentityClass<T> implements GenericInterface<T> {
	value: T;

	constructor(value: T) {
		this.value = value;
	}

	getIdentity(): T {
		return this.value;
	}
}
const myNumberClass = new IdentityClass<Number>(1);
console.log(myNumberClass.getIdentity()); // 1

const myStringClass = new IdentityClass<string>('Hello!');
console.log(myStringClass.getIdentity()); // Hello!
