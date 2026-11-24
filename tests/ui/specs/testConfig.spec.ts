
import { test, expect } from '@playwright/test';
test.use({viewport: { width: 1280, height: 720 }});

   //test.describe.configure({mode :'parallel' })
   //test.use({actionTimeout : 1000})
   //test.use({navigationTimeout : 1000})


    test.beforeAll('this actions run before all tests', async ()=>{
    console.log('this actions run before all tests')
    });

    test.beforeEach('this actions run before each test', async ({page}, testinfo) =>{
       // test.setTimeout(500)
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log(`Start test: ${testinfo.title}`);
    });

    test.afterEach('this actions run after each test', async ({}, testinfo) =>{
    console.log(`finish test: ${testinfo.title}`);
    });

    test.afterAll('this actions run after all tests', async ()=>{
    console.log('this actions run after all tests')

    });

    test.describe('login test', () => {
   //
    test.describe.configure({retries:2})


   // test.describe.configure({timeout:5000});

    test('Valid login', async ({ page }) => {

     const userName = `user-${test.info().workerIndex}`;
     console.log(`userName: ${userName}`)



        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin123");

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByAltText("profile picture")).toBeVisible();
    });

    test('Invalid login', async ({ page }) => {

         //test.setTimeout(2000);
         //test.slow();
        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin12");

        await page.getByRole('button', { name: 'Login' }).click();

       //await expect(page.locator('.oxd-alert-content-text')).toHaveText("Invalid credential", {timeout:7000});
        await expect(page.locator('.oxd-alert-content-text')).toHaveText("Invalid credentials");


    });


    });


