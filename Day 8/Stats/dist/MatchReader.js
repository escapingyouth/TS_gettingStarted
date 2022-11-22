import { dateStringToDate } from './utils.js';
import { CsvFileReader } from './CsvFileReader.js';
export class MatchReader {
    reader;
    static fromCsV(filename) {
        return new MatchReader(new CsvFileReader(filename));
    }
    matches = [];
    constructor(reader) {
        this.reader = reader;
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
