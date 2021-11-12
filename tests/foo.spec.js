const assert = require('assert');
const { test } = require('./fixture');

test('test', async ({ page, context }) => {
    await page.goto('https://playwright.dev/');
    const cookies = await context.cookies(['https://playwright.dev/'])
    // fails
    // assert.equal(cookies.length, 1)
    assert.equal(cookies[0].value, 'cookie from fixture')

    // assert.equal(cookies[1].value, 'zopa')
    const lsItem = await page.evaluate(() => window.localStorage.getItem('foo'));
    // fails
    assert.equal(lsItem, 'localStorage from fixture')
});
