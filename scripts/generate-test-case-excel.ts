import * as fs from 'fs';
import * as path from 'path';
import ExcelJS from 'exceljs';

interface TestCaseRecord {
  id: string;
  module: string;
  title: string;
  description: string;
  preconditions: string;
  testData: string;
  expectedResult: string;
  priority: string;
  testType: string;
  automationStatus: string;
  bddFeature: string;
  bddScenario: string;
  featureFile: string;
  stepDefinitionFile: string;
  pageObjects: string;
  utilities: string;
  evidence: string;
  status: string;
}

interface TestStepRecord {
  testCaseId: string;
  stepNumber: number;
  bddKeyword: string;
  action: string;
  testData: string;
  expectedResult: string;
  bddStep: string;
  automationReference: string;
}

interface TestCaseData {
  project: string;
  applicationUrl: string;
  lastUpdated: string;
  testCases: TestCaseRecord[];
  testSteps: TestStepRecord[];
}

const dataPath = path.join(__dirname, '..', 'docs', 'test-case-data.json');
const outputPath = path.join(__dirname, '..', 'docs', 'Parabank_Test_Cases.xlsx');

function styleHeaderRow(sheet: ExcelJS.Worksheet, columnCount: number): void {
  const headerRow = sheet.getRow(1);
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F4E79' },
  };
  headerRow.alignment = { vertical: 'middle', wrapText: true };

  for (let col = 1; col <= columnCount; col += 1) {
    sheet.getColumn(col).width = 22;
  }
}

async function generateWorkbook(): Promise<void> {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const data = JSON.parse(raw) as TestCaseData;

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Parabank Automation';
  workbook.created = new Date();

  const overview = workbook.addWorksheet('Overview');
  overview.addRow(['Field', 'Value']);
  overview.addRow(['Project', data.project]);
  overview.addRow(['Application URL', data.applicationUrl]);
  overview.addRow(['Last Updated', data.lastUpdated]);
  overview.addRow(['Total Test Cases', data.testCases.length]);
  overview.addRow([
    'Notes',
    'Update docs/test-case-data.json and run npm run docs:excel to refresh this workbook.',
  ]);
  styleHeaderRow(overview, 2);
  overview.getColumn(1).width = 28;
  overview.getColumn(2).width = 70;

  const testCasesSheet = workbook.addWorksheet('Test Cases');
  testCasesSheet.addRow([
    'Test Case ID',
    'Module',
    'Test Case Title',
    'Description',
    'Preconditions',
    'Test Data',
    'Expected Result',
    'Priority',
    'Test Type',
    'Automation Status',
    'BDD Feature',
    'BDD Scenario',
    'Feature File',
    'Step Definition File',
    'Page Objects',
    'Utilities',
    'Evidence',
    'Status',
  ]);

  for (const tc of data.testCases) {
    testCasesSheet.addRow([
      tc.id,
      tc.module,
      tc.title,
      tc.description,
      tc.preconditions,
      tc.testData,
      tc.expectedResult,
      tc.priority,
      tc.testType,
      tc.automationStatus,
      tc.bddFeature,
      tc.bddScenario,
      tc.featureFile,
      tc.stepDefinitionFile,
      tc.pageObjects,
      tc.utilities,
      tc.evidence,
      tc.status,
    ]);
  }
  styleHeaderRow(testCasesSheet, 18);
  testCasesSheet.views = [{ state: 'frozen', ySplit: 1 }];

  const stepsSheet = workbook.addWorksheet('Test Steps');
  stepsSheet.addRow([
    'Test Case ID',
    'Step #',
    'BDD Keyword',
    'Action',
    'Test Data / Input',
    'Expected Result',
    'BDD Step Text',
    'Automation Reference',
  ]);

  for (const step of data.testSteps) {
    stepsSheet.addRow([
      step.testCaseId,
      step.stepNumber,
      step.bddKeyword,
      step.action,
      step.testData,
      step.expectedResult,
      step.bddStep,
      step.automationReference,
    ]);
  }
  styleHeaderRow(stepsSheet, 8);
  stepsSheet.views = [{ state: 'frozen', ySplit: 1 }];

  const traceability = workbook.addWorksheet('Traceability');
  traceability.addRow([
    'Test Case ID',
    'BDD Scenario',
    'Feature File',
    'Step Definitions',
    'Page Objects',
    'Support / Utils',
  ]);

  for (const tc of data.testCases) {
    traceability.addRow([
      tc.id,
      tc.bddScenario,
      tc.featureFile,
      tc.stepDefinitionFile,
      tc.pageObjects,
      tc.utilities,
    ]);
  }
  styleHeaderRow(traceability, 6);
  traceability.views = [{ state: 'frozen', ySplit: 1 }];

  await workbook.xlsx.writeFile(outputPath);
  console.log(`Test case workbook generated: ${outputPath}`);
}

generateWorkbook().catch((error) => {
  console.error('Failed to generate Excel test documentation:', error);
  process.exit(1);
});
