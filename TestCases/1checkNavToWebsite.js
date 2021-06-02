const puppeteerChrome = require('puppeteer');
const puppeteerFirefox = require ('puppeteer-firefox');

async function navigateToWebsite(browserUsed,webLink) {
  var browser;
  if(browserUsed == 'Chrome'){
    browser = await puppeteerChrome.launch({headless: false});//change headless:true if you wish to run this headlessly
  } else{
    browser = await puppeteerFirefox.launch({headless: false});
  }
  const page = await browser.newPage();
  await page.goto(webLink);
  await page.screenshot({ path: './TestSuccessImages/wikiHome.png' });
  console.log('Check nav to Wikipedia test concluded successfully');  
  //await browser.waitForTarget(() => false); here just for debugging, only use during headless: false, will give an error in terminal
  await browser.close();
  };


module.exports ={navigateToWebsite};