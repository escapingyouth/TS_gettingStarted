import { MatchReader } from './MatchReader.js';
import { Summary } from './Summary.js';
const matchReader = MatchReader.fromCsV('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('West Ham', 'report.html');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
