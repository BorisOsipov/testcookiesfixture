const assert = require('assert');
const { test } = require('./fixture');

test('test', async ({ page, context }) => {
    await page.goto('https://playwright.dev/');
    const cookies = await context.cookies(['https://playwright.dev/'])
    assert.equal(cookies.length, 1)
    assert.equal(cookies[0].value, 'bar')
});
