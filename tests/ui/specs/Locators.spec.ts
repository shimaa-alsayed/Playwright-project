import {test, expect} from '@playwright/test';

test.describe('login test', ()=>{
   
test('vaild login', async ({page})=> {

    await page.goto('https://practice.expandtesting.com/login');
    // 1- id
    await page.locator("[id='username']").fill("practice")
    // get by lable 
    await page.getByLabel("Password").fill("SuperSecretPassword!")

   // 2- xpath

   // await page.locator("//button[@id='submit-login']").click()
     // get by role
    await page.getByRole('button', {name : 'Login'}).click();
   // 3- css selector

    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!")
});


   test('Invaild login', async ({page})=> {

      await page.goto('https://practice.expandtesting.com/login');

       // css selector 
      await page.locator("#username").fill("practice")
       // 4- name
      await page.locator("[name ='password']").fill("SuperSecretPword!")
      await page.locator("//button[@id='submit-login']").click()
      await expect(page.locator("div[id='flash'] b")).toContainText("Your password is invalid!")
  });

    
   test('login page', async ({page})=> {

      await page.goto('https://practice.expandtesting.com/login');

       //5- alt text
      //await expect(page.locator("[alt='Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.']")).toBeVisible();

      await expect(page.getByAltText('Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.')).toBeVisible();

       //6- text 
       // nth (0) this is specifiy that the first element with this name 
      await expect(page.getByText('SuperSecretPassword!').nth(0)).toBeVisible();

    });

     test.only('search ', async ({page})=> {

      await page.goto('https://practice.expandtesting.com');

       //5- get by placeholder
      await page.getByPlaceholder('Search an example...').fill('login')
      await page.locator("//a[normalize-space()='Test Login Page']").click()
      await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice')
    });

});

