const puppeteerChrome = require('puppeteer');
const puppeteerFirefox = require ('puppeteer-firefox');



async function launchBrowser(browserUsed) {
  if(browserUsed == 'Chrome'){
    const browser = await puppeteerChrome.launch({headless: false});//change headless:true if you wish to run this headlessly
    return browser;
    
  } else{
    const browser = await puppeteerFirefox.launch({headless: false});
    return browser;
  }
};

async function navigateBrowser(webLink, browserUsed) {
  const browser = launchBrowser(browserUsed);
  const page = await browser.newPage();
  await page.goto(webLink);
  return page;
};

async function closeBrowser(){
  await browser.close();
};

module.exports ={launchBrowser, navigateBrowser, closeBrowser };