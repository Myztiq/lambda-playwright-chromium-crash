const chromium = require('@sparticuz/chromium');
const playwright = require('playwright');

module.exports.run = async () => {
    const executablePath = await chromium.executablePath();
    console.log('Running chromium with path: ', executablePath);

    // Crashes here
    const browser = await playwright.chromium.launch({
        headless: true,
        args: chromium.args,
        executablePath,
    });

    // Fails before this output
    console.log('Browser launched', browser);

    return { ok: true }
}