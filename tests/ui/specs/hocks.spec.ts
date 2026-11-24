
import { test, expect } from '@playwright/test';

test.describe('login test', () => {

    test.beforeAll('this actions run before all tests', async ()=>{
    console.log('this actions run before all tests')
    });

    test.beforeEach('this actions run before each test', async ({page}, testinfo) =>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log(`Start test: ${testinfo.title}`);
    });

    test.afterEach('this actions run after each test', async ({}, testinfo) =>{
    console.log(`finish test: ${testinfo.title}`);
    });

    test.afterAll('this actions run after all tests', async ()=>{
    console.log('this actions run after all tests')

    });

    test('Valid login', async ({ page }) => {


        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin123");

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByAltText("profile picture")).toBeVisible();
    });

    test('Invalid login', async ({ page }) => {


        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin12");

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.locator('.oxd-alert-content-text')).toHaveText("Invalid credentials");

    });

});
