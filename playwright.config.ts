import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2, // Retry on failures
  reporter: [['html', { outputFolder: 'reports/html-reports' }]],
  use: {
    headless: true, // Run tests in headless mode
    screenshot: 'on', // Capture screenshots on failure
    video: 'retain-on-failure', // Record videos for debugging
    baseURL: 'https://the-internet.herokuapp.com', // Using a real test site for demonstration
  },
});
