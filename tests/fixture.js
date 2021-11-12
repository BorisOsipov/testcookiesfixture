const base = require('@playwright/test');

exports.test = base.test.extend({
    storageState: async ({}, use) => {
        await use(
            {
                cookies: [
                    {
                        name: "foo",
                        value: "foo cookie from fixture",
                        url: "https://playwright.dev"
                    },
                    {
                        name: "bar",
                        value: "bar cookie from fixture",
                        url: "https://playwright.dev"
                    }
                ],
                origins: [
                    {
                        origin: "https://playwright.dev",
                        localStorage: [
                            {
                                name: "foo",
                                value: "localStorage from fixture"
                            }
                        ]
                    }
                ],
            });
    },
});
