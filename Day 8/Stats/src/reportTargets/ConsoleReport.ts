import { OutputTarget } from '../Summary.js';

export class ConsoleReport implements OutputTarget {
	print(report: string): void {
		console.log(report);
	}
}
