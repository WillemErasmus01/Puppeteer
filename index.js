//var launch = require('./HelpersToDo/openBrowser.js');
const prompt = require('prompt-sync')();

var navToTest = require('./TestCases/1checkNavToWebsite.js');
var searchTest = require('./TestCases/2verifySearchAtHomeWorks');

var url = 'https://www.wikipedia.org/';


var runTest = false;
var browserUsed = prompt('Which browser would you like to test, type C for Chrome or F for Firefox: ');
    if(browserUsed == 'c' || browserUsed == 'C' || browserUsed == 'chrome' || browserUsed == 'Chrome'){
        runTest = true;
        browserUsed = "Chrome";
        console.log('running test using: ', browserUsed);
    }else if(browserUsed == 'f' || browserUsed == 'F' || browserUsed == 'firefox' || browserUsed == 'Firefox'){
        browserUsed = "Firefox";
        runTest = true;
        console.log('running test using: ', browserUsed);
    }else{
        console.log('wrong browser');
   
    };


var testToRun = prompt('Which test would you like to run? 1 to 5: ')
    if (runTest == true){
        if (testToRun == '1'){
            //launch.navigateBrowser(url, browserUsed);
            navToTest.navigateToWebsite(browserUsed, url);
        } else if (testToRun =='2') {
            searchTest.verifySearch(browserUsed, url);
        } else {
            console.log('invalid test selected, refer to the number used next to the tests in TestCases');
        }
    };





