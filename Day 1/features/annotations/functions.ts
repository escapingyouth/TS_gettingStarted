const add = (a: number, b: number): number => {
	return a + b;
};
const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

// void and never annotations

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (errorMsg: string): never => {
	throw new Error(errorMsg);
};

// destructuring with annotations

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
};

const logWeather = ({
	date,
	weather
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};
