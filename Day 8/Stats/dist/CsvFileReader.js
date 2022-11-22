import fs from 'fs';
export class CsvFileReader {
    filename;
    data = [];
    constructor(filename) {
        this.filename = filename;
    }
    read() {
        this.data = fs
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => row.split(','));
    }
}
