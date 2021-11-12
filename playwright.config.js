// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        channel: 'chrome',
    },
    storageState: {cookies: [
        {name: "foo", value: "bar_from_config", url: "https://playwright.dev"},
        {name: "opa", value: "zopa", url: "https://playwright.dev"}
        ]
    }
};

module.exports = config;
