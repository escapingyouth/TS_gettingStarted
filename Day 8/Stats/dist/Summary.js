import { WinsAnalysis } from './Analysers/WInsAnalysis.js';
import { HtmlReport } from './reportTargets/HtmlReport.js';
export class Summary {
    analyser;
    outputTarget;
    static winsAnalysisWithHtmlReport(team, filename) {
        return new Summary(new WinsAnalysis(team), new HtmlReport(filename));
    }
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyser.run(matches);
        this.outputTarget.print(output);
    }
}
