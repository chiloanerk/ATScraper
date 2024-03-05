const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Navigate to site
    await page.goto('https://www.autotrader.co.za/car-for-sale/bmw/x5/m50i/27368096?vf=2&db=1&s360=0&so=1&pl=1&pq=0&pr=5&po=1');
    // wait for site to finish loading
    await page.waitForSelector('.e-price');

    //Extract
    const data = await page.$eval('.e-price', element => element.textContent.trim());
    console.log(data);

    await browser.close();
})();