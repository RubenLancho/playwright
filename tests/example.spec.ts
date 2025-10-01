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
        // The destination URL has changed, so update the expectation:
        expect(page.url()).toBe('https://www.iana.org/help/example-domains');
    });

    test('should check that the More information link is visible', async ({ page }) => {
        await page.goto('https://example.com');
        const link = page.locator('text=More information...');
        await expect(link).toBeVisible();
    });

    test('should check that the page contains the expected heading', async ({ page }) => {
        await page.goto('https://example.com');
        const heading = await page.textContent('h1');
        expect(heading).toBe('Example Domain');
    });

    test('should check that the page contains the expected paragraph', async ({ page }) => {
        await page.goto('https://example.com');
        const paragraph = await page.textContent('p');
        expect(paragraph).toContain('This domain is for use in illustrative examples in documents.');
    });
});