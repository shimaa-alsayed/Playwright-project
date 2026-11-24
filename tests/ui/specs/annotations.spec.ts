import { test, expect } from '@playwright/test';

    test.beforeAll('this actions run before all tests', async ()=>{
    console.log('this actions run before all tests')
    });

    test.beforeEach('this actions run before each test', async ({page}, testinfo) =>{
     await page.goto('/');

    console.log(`Start test: ${testinfo.title}`);
    });

    test.afterEach('this actions run after each test', async ({}, testinfo) =>{
    console.log(`finish test: ${testinfo.title}`);
    });

    test.afterAll('this actions run after all tests', async ()=>{
    console.log('this actions run after all tests')

    });


test.describe('login test', () => {
    test('Valid login', {
        tag: ['@ui','@smoke'],
  annotation: {
    type: 'smoke test',
    description: 'smoke test for vaild login',
  },
}, 
         async ({ page }) => {
   
       // test.skip(browserName === 'firefox', 'Still working on it');

        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin123");

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByAltText("profile picture")).toBeVisible();
    });

    test('Invalid login',{
        tag: '@ui'
    }, 

       async ({ page }) => {

        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin12");

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.locator('.oxd-alert-content-text')).toHaveText("Invalid credentials");

    });

});


test.describe('login test - group2', () => {

    test('Valid login - group2', async ({ page }) => {


        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin123");

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByAltText("profile picture")).toBeVisible();
    });

    test.fixme('Invalid login - group2', async ({ page }) => {

        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin12");

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.locator('.oxd-alert-content-text')).toHaveText("Invalid credentials");

    });

});
