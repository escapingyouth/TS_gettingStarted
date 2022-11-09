interface Vehicle {
	name: string;
	year: number | Date;
	broken: boolean;
}

interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	}
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printVehicle(oldCivic);
printSummary(oldCivic);

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`;
	}
};

printSummary(drink);

interface Named {
	readonly name: string;

	// optional properties
	outputName?: string;
}

//  inheritance with interfaces
interface Greetable extends Named {
	greet(phrase: string): void;
}

// using interfaces with classes
class Person implements Greetable {
	constructor(public name: string) {}
	greet(phrase: string): void {
		console.log(phrase + '' + this.name);
	}
}
