import { dateStringToDate } from './utils.js';
import { MatchResult } from './MatchResult.js';
import { MatchData } from './MatchData.js';
import { CsvFileReader } from './CsvFileReader.js';

interface DataReader {
	data: string[][];
	read(): void;
}

export class MatchReader {
	static fromCsV(filename: string) {
		return new MatchReader(new CsvFileReader(filename));
	}

	matches: MatchData[] = [];
	constructor(public reader: DataReader) {}

	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map((row: string[]): MatchData => {
			return [
				dateStringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				row[5] as MatchResult, // 'H', 'A', 'D'
				row[6]
			];
		});
	}
}
