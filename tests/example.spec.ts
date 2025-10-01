import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
    test('should load the homepage and check the title', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    });

    test('should click a link and navigate to another page', async ({ page }) => {
        await page.goto('https://example.com');
        await page.click('text=More information...');
        expect(page.url()).toBe('https://www.iana.org/domains/example');
    });
});