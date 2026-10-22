import { test, expect } from '@applitools/eyes-playwright/fixture';

test.describe('Restful Booker - Rooms', () => {
  test('should display rooms page correctly', async ({ page, eyes }) => {
    await page.goto('/#rooms');

    await eyes.check('Rooms Page', {
      fully: true,
      matchLevel: 'Dynamic',
    });
  });

  test('should navigate through all sections', async ({ page, eyes }) => {
    await page.goto('/#rooms');

    // Rooms — click nav link then scroll to section
    await page.click('a.nav-link[href="/#rooms"]');
    await page.locator('section.hero').scrollIntoViewIfNeeded();
    await eyes.check('Rooms', { fully: true, matchLevel: 'Dynamic' });

    // Booking — click nav link then scroll up to section
    await page.click('a.nav-link[href="/#booking"]');
    await page.locator('#booking').scrollIntoViewIfNeeded();
    await eyes.check('Booking', { fully: true, matchLevel: 'Dynamic' });

    // Location — click nav link then scroll down to section
    await page.click('a.nav-link[href="/#location"]');
    await page.locator('#location').scrollIntoViewIfNeeded();
    await eyes.check('Location', { fully: true, matchLevel: 'Dynamic' });

    // Contact — click nav link then scroll down to section
    await page.click('a.nav-link[href="/#contact"]');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await eyes.check('Contact', { fully: true, matchLevel: 'Dynamic' });

    // Admin — click nav link, assert URL, login, then logout
    await page.click('a.nav-link[href="/admin"]');
    await expect(page).toHaveURL('https://automationintesting.online/admin');
    await eyes.check('Admin Login', { fully: true, matchLevel: 'Dynamic' });

    await page.fill('#username', 'admin');
    await page.fill('#password', 'password');
    await page.click('#doLogin');
    await eyes.check('Admin Dashboard', { fully: true, matchLevel: 'Dynamic' });

    await page.click('button.btn-outline-danger');
    await eyes.check('After Logout', { fully: true, matchLevel: 'Dynamic' });

    // Back to Booking
    await page.goto('/#booking');
    await page.locator('#booking').scrollIntoViewIfNeeded();
    await eyes.check('Back to Booking', { fully: true, matchLevel: 'Dynamic' });
  });
});