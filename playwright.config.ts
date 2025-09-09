import { defineConfig } from '@playwright/test';
import path from 'path';
import { stagingConfig } from './configs/staging.config';

// Define the configuration type
type TestConfig = {
  baseURL: string;
  timeout: number;
  retries: number;
  workers: number;
  use: {
    headless: boolean;
    screenshot: 'off' | 'on' | 'only-on-failure';
    video: 'off' | 'on' | 'retain-on-failure' | 'on-first-retry';
  };
};

// Default production configuration
const productionConfig: TestConfig = {
  baseURL: 'https://the-internet.herokuapp.com',
  timeout: 30000,
  retries: 1,
  workers: 2,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  }
};

const env = process.env.TEST_ENV || 'staging';
const config: TestConfig = env === 'staging' ? stagingConfig : productionConfig;

export default defineConfig({
  testDir: './tests',
  timeout: config.timeout || 30000,
  workers: config.workers || 4, // Number of parallel test workers (adjust based on system resources)
  retries: config.retries || 2, // Retry on failures
  reporter: [
    ['html', { outputFolder: 'reports/html-reports' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    headless: config.use?.headless ?? true, // Run tests in headless mode
    screenshot: config.use?.screenshot || 'on', // Capture screenshots on failure
    video: config.use?.video || 'retain-on-failure', // Record videos for debugging
    baseURL: config.baseURL || 'https://example.com', // Default fallback URL
  },
});
