# Playwright Automation Template

A reusable Playwright template built with TypeScript, Playwright Test, page objects, shared fixtures, test data, and CI-ready defaults.

## Overview

This project is structured for maintainable end-to-end automation and small API checks. It follows common Playwright conventions while keeping the layout simple enough to extend as the test suite grows.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- GitHub Actions

## Project Structure

```text
playwright-automation-template/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── config/
│   └── env.ts
├── fixtures/
│   └── base-fixture.ts
├── pages/
│   └── home-page.ts
├── test-data/
│   └── users.json
├── tests/
│   ├── api/
│   │   └── health.spec.ts
│   └── smoke/
│       └── home.spec.ts
├── utils/
│   └── date-util.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

Structure intent:

- `config/`: environment-specific runtime configuration
- `fixtures/`: shared Playwright fixtures
- `pages/`: page objects and reusable page-level actions
- `test-data/`: static input data and payloads
- `tests/`: test specs grouped by type or feature
- `utils/`: generic helpers used across tests

## What Is Included

- Multi-browser Playwright configuration for Chromium, Firefox, and WebKit
- Shared fixture setup for reusable page objects
- Page object sample for UI tests
- Example smoke UI tests
- Example API health test
- Environment-based base URL configuration
- HTML reporting, traces, screenshots, and videos on failure
- GitHub Actions workflow for CI execution

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

## Run Tests

```bash
npm test
```

Run headed:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Debug tests:

```bash
npm run test:debug
```

Open the HTML report:

```bash
npm run report
```

## Environment Configuration

The base URL is controlled from `config/env.ts`.

Supported environments:

- `local`
- `qa`
- `staging`

Run with a specific environment:

```bash
$env:TEST_ENV="qa"
npm test
```

## Recommended Conventions

- Keep specs inside `tests/` and group them by feature, scope, or layer.
- Keep reusable page interactions inside `pages/`.
- Keep shared fixtures inside `fixtures/`.
- Keep static payloads and input data inside `test-data/`.
- Keep environment and runtime settings inside `config/`.
- Keep small generic helpers inside `utils/`.

## GitHub Push Flow

After you confirm the scaffold looks right, publish it with:

```bash
git init
git add .
git commit -m "Initial Playwright template"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

If the repository already exists locally, skip `git init` and only add the remote if needed.

## Next Improvements

- Multi-environment execution
- API testing support
- Custom reporters
- Jenkins integration
- Parallel execution strategy
- Test data management utilities
