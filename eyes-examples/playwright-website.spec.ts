import { test } from '@applitools/eyes-playwright/fixture'

test('Playwright website', async ({ page, eyes }) => {
  await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });

  /* Full page visual check */
  await eyes.check('Home page')

  const searchButton = page.getByRole('button', { name: /Search/ })

  /* Region visual check - search control in the current theme */
  await eyes.check('Search button in system theme', { region: searchButton })

  const themeToggle = page.getByRole('button', { name: /Switch between dark and light/ })
  await themeToggle.click(); // Switch to light theme

  await eyes.check('Search button in light theme', { region: searchButton })

  await themeToggle.click(); // Switch to dark theme

  /* Region visual check - search control in dark theme */
  await eyes.check('Search button in dark theme', { region: searchButton })
});
