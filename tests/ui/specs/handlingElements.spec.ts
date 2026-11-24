import{test, expect} from '@playwright/test';

test.describe('Handling webelement by index and filter ', ()=>{
   
test.only('get element by index ', async ({page})=> {
    await page.goto('https://practice.expandtesting.com/')
   // normal way
   // await page.locator("//div [@class='card-body']").click();
  // playwright way
    const baselocator = page.locator("//div[@class='card-body']")
  //await page.locator("//div[@class='card-body']").locator('nth=1').click()
   // await baselocator.locator('nth=1').click();
    // await baselocator.locator('nth=0').click();
     // first element 0 and last element -1
    //await baselocator.locator('nth=-1').click();

    // filter

    //await baselocator.filter({hasText : 'Test Login Page'} ).click()
await baselocator.filter({has: page.locator("//p[contains(text(), 'Test Login Page for Automation Testing Practice, a')]")}).click();


});

});