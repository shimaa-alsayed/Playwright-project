
import { test } from '@playwright/test';
import { POManager } from '../pages/poManager';
import tsData from '../../../testDate/testUsers'

//test.use({storageState : {cookies : [], origins :[]}})

//==========================Variables===============================
let poManager : POManager ;


//==========================Hocks===============================

    test.beforeEach('this actions run before each test', async ({page}) =>{
    poManager = new POManager (page);
    await poManager.getLoginPage().open();
    });

//=================================tests=============================================================  
    test.describe('login test', () => {
         test('verify profile icon', async ({ page }) => {
        
            //await poManager.getLoginPage().login(tsData.username, tsData.password)
            await page.pause();
            await poManager.getHomePage().assertProfileIcon();
            });
        // test('Valid profile icon1', async ({ page }) => {
        
        //     await page.pause();
        //     await poManager.getHomePage().assertProfileIcon();
        //     });



             });