import { defineConfig } from '@playwright/test';
import { playwrightUse, testTimeout } from './src/config/playwright-settings';

export default defineConfig({
  timeout: testTimeout,
  use: playwrightUse,
});
