export const stagingConfig = {
  baseURL: 'file://' + require('path').resolve('./test-pages'), // Local test pages for staging
  timeout: 30000,
  retries: 2,
  workers: 4,
  use: {
    headless: true,
    screenshot: 'on' as const,
    video: 'retain-on-failure' as const,
  }
};
