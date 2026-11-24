
import { test } from '@playwright/test';
import { POManager } from '../pages/poManager';
import jsonData from '../../../testDate/testUsers.json'
import tsData from '../../../testDate/testUsers'
import invaildTestUsers from '../../../testDate/invaildTestUsers';

//=================Variable========================
let poManager : POManager ;
// json format --> string -- > tb object
const parsedjsonData = JSON.parse(JSON.stringify(jsonData));

 //=================================tests=============================================================  
    test.describe('login test', () => {
//==========================Hocks===============================

    test.beforeAll('this actions run before all tests', async ()=>{
    console.log("json username: ", parsedjsonData.username);
    console.log("ts password: ", tsData.password);
    console.log('this actions run before all tests')
    });


    test.beforeEach('this actions run before each test', async ({page}, testinfo) =>{
    poManager = new POManager (page);
    await poManager.getLoginPage().open();
    console.log(`Start test: ${testinfo.title}`);

    });



    test.afterEach('this actions run after each test', async ({}, testinfo) =>{
    console.log(`finish test: ${testinfo.title}`);
    });

    test.afterAll('this actions run after all tests', async ()=>{
    console.log('this actions run after all tests')

    });

  //=================================Test cases=============================================================  

    test('Valid login', async ({ page }) => {

    await poManager.getLoginPage().login(tsData.username, tsData.password)
    await poManager.getHomePage().assertProfileIcon();
    //await expect (homePage.profile_icon).toBeVisible();


   
    });

invaildTestUsers.forEach(({username, password, testtype })=> {
    test(`Invalid login for ${testtype}`, async ({ page }) => {

    await poManager.getLoginPage().login(username, password)
    await poManager.getLoginPage().assertinvalidLoginMessage();



});

    
         
    });

});
