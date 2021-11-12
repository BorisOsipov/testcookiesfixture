// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        channel: 'chrome',
        storageState: {
            origins: [
                {
                    origin: "https://playwright.dev",
                    localStorage: [
                        {
                            name: "foo",
                            value: "localStorage from config"
                        }
                    ]
                }
            ],
            cookies: [
                {name: "foo", value: "bar_from_config", url: "https://playwright.dev"},
                {name: "opa", value: "zopa", url: "https://playwright.dev"}
            ]
        }
    },

};

module.exports = config;
