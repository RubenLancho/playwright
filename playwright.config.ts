import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
 reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results/junit-report.xml' }]
  ],  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
trace: 'retain-on-failure',    ...devices['Desktop Chrome'],  screenshot: 'only-on-failure',
  
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});