import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  workers: 4,
  retries: 2, // Retry on failures
  reporter: [
    ['html', { outputFolder: 'reports/html-reports' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    headless: true, // Run tests in headless mode
    screenshot: 'on', // Capture screenshots on failure
    video: 'retain-on-failure', // Record videos for debugging
    baseURL: 'file://' + path.resolve('./test-pages'), // Using local test pages for reliable offline testing
  },
});
