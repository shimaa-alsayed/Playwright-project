import {test, expect} from '@playwright/test';

test.describe('login test', ()=>{
   test.only('Vaild login', async ({page}, testinfo)=> {

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("//input[@id='username']").fill("practice");
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!");
    await page.screenshot({path: 'screenshots/Login.png'});
    testinfo.attach('${testinfo:title }', {path: 'screenshots/Login.png'});
    await page.locator("//button[@id='submit-login']").click();
    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!");
});



test('Invaild login', async ({page})=> {

    await page.goto('/login');
    await page.locator("//input[@id='username']").fill("practice");
    await page.locator("//input[@id='password']").fill("SuperSecretPword!");
    await page.locator("//button[@id='submit-login']").click();
    await expect(page.locator("div[id='flash'] b")).toContainText("Your used password is invalid!");
});
 

test.skip('Skipped Invaild login', async ({page})=> {

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("//input[@id='username']").fill("practice");
    await page.locator("//input[@id='password']").fill("SuperSecretPword!");
    await page.locator("//button[@id='submit-login']").click();
    await expect(page.locator("div[id='flash'] b")).toContainText("Your password is invalid!")
});
 



});

