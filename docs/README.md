# Test Case Documentation

This folder contains Excel-ready documentation for Parabank automation test cases.

## Files

| File | Purpose |
|------|---------|
| `Parabank_Test_Cases.xlsx` | Main test case workbook (open in Microsoft Excel) |
| `test-case-data.json` | Source data used to generate the Excel file |
| `test-cases.csv` | Same test case summary in CSV (Excel-compatible) |
| `test-steps.csv` | Step-by-step details in CSV (Excel-compatible) |

## Excel workbook sheets

1. **Overview** — Project name, application URL, last updated date
2. **Test Cases** — Test case matrix (ID, title, steps summary, expected results, automation links)
3. **Test Steps** — Detailed steps mapped to BDD keywords and automation code
4. **Traceability** — Links between test cases, feature files, page objects, and utilities

## How to update documentation

When you add or change a test scenario:

1. Edit `test-case-data.json` (add entries under `testCases` and `testSteps`).
2. Regenerate the Excel file:
   ```bash
   npm run docs:excel
   ```
3. Commit both the JSON and the updated `.xlsx` file.

## Open in Excel

- Double-click `Parabank_Test_Cases.xlsx`, or
- Open Excel → **File → Open** → select `docs/Parabank_Test_Cases.xlsx`

CSV files can also be opened directly in Excel if you prefer to edit without regenerating the workbook.
