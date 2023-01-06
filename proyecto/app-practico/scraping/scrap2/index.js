const puppetter = require('puppeteer');
const webVisitado = require('./webVisitado.json');

(async () => {

  const browser = await puppetter.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/?hl=es');
  await page.waitForSelector('input[name="q"]');
  await page.type('input[name="q"]', 'facebook');
  await page.waitForSelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
  await page.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
  await page.waitForNavigation();

  for (const webVisitado of webVisitados){
    console.log(webVisitado);
  }
})();
