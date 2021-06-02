const puppeteerChrome = require('puppeteer');
const puppeteerFirefox = require ('puppeteer-firefox');

var timer = require('../HelpersToDo/timers.js')

async function verifySearch(browserUsed,webLink) {
  var browser;
  if(browserUsed == 'Chrome'){
    browser = await puppeteerChrome.launch({headless: false});//change headless:true if you wish to run this headlessly
  } else{
    browser = await puppeteerFirefox.launch({headless: false});
  }
  const page = await browser.newPage();
  await page.goto(webLink);
  const [searchBar] = await page.$x("//input[@id='searchInput']");
  await searchBar.type("Test Automation")
  await timer.delay(2);
  await page.click('[href="https://en.wikipedia.org/wiki/Test_automation"]');
  await timer.delay(0.5);
  await page.screenshot({ path: './TestSuccessImages/wikiHomeSearch.png' });
  console.log('Check nav to Wikipedia test concluded successfully');  
  //await browser.waitForTarget(() => false); // here just for debugging, only use during headless: false, will give an error in terminal
  await browser.close();
  };


module.exports ={verifySearch};