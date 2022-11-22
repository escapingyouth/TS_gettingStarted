import { MatchData } from './MatchData.js';
import { WinsAnalysis } from './Analysers/WInsAnalysis.js';
import { HtmlReport } from './reportTargets/HtmlReport.js';

// Analyser refers to what type of data is being analysed ( e.g. wins, losses, etc. )
export interface Analyser {
	run(matches: MatchData[]): string;
}

// Output target refers to where the data is being output to ( e.g. console, html, etc. )
export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	static winsAnalysisWithHtmlReport(team: string, filename: string) {
		return new Summary(new WinsAnalysis(team), new HtmlReport(filename));
	}
	constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

	// generate a report with data from the match data
	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyser.run(matches);
		this.outputTarget.print(output);
	}
}
