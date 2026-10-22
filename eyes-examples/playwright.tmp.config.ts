import { defineConfig } from '@playwright/test';
import { EyesFixture } from '@applitools/eyes-playwright/fixture';
import '../load-env';

export default defineConfig<EyesFixture>({
  testDir: '.',
  outputDir: './test-results',
  reporter: [['@applitools/eyes-playwright/reporter', {open: 'always', outputFolder: './eyes-playwright-report'}]],
  use: {
    eyesConfig: {
      apiKey: process.env.APPLITOOLS_API_KEY,
      serverUrl: 'https://eyes.applitools.com'
    }
  }
})