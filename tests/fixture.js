const base = require('@playwright/test');

exports.test = base.test.extend({
    storageState: async ({}, use) => {
        await use({cookies:[{name:"foo", value: "bar", url: "https://playwright.dev"}]});
    },
});
