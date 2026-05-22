# Parabank Automation (Playwright + Cucumber + TypeScript)

## Overview
This project automates the **Parabank** website's account flow using **Playwright** with **TypeScript** and **Cucumber**.  
It covers the following functionalities:

- Signup / account creation
- Login with newly created credentials
- Verification of account balance

## Tech Stack
- **Node.js 18+**
- **TypeScript**
- **Playwright**
- **Cucumber (BDD)**

## Features
- Page Object Model (POM) for maintainable code
- Behavior-Driven Development (BDD) using Cucumber
- Randomized username and password generation for each test run
- Automatic screenshot capture for verification
- Video recording of test execution for proof/evidence

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Manish254252/Parabank_Automation.git
   cd Parabank_Automation
   ```

2. Install dependencies and Playwright browsers:
   ```bash
   npm install
   npx playwright install chromium
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Test Case Documentation (Excel)

Test cases are documented in Excel format under `docs/`:

- **`docs/Parabank_Test_Cases.xlsx`** — workbook with Test Cases, Test Steps, and Traceability sheets
- **`docs/test-case-data.json`** — source data; edit this when adding scenarios, then regenerate Excel

Regenerate the workbook after updating test case data:

```bash
npm run docs:excel
```

See [docs/README.md](docs/README.md) for column definitions and maintenance steps.

## Project Structure

```
features/              # Cucumber feature files
docs/                  # Test case documentation (Excel + JSON + CSV)
src/
  pages/               # Page Object Model classes
  steps/               # Cucumber step definitions
  support/             # Browser lifecycle and hooks
  test-data/           # JSON test data (e.g. signup form fields)
  utils/               # Test data helpers and loaders
proofs/                # Screenshots (generated)
videos/                # Test recordings (generated)
```

## Outputs
- **Screenshots**: `proofs/balance.png`
- **Videos**: `videos/`
- **Cucumber report**: `cucumber-report.html`
