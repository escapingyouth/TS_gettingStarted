import fs from 'fs';
export class HtmlReport {
    filename;
    constructor(filename) {
        this.filename = filename;
    }
    print(report) {
        const html = `
        <div>
         <h1>Analysis Output</h1>
         <div>${report}</div>
        </div>
        `;
        fs.writeFileSync(this.filename, html);
    }
}
