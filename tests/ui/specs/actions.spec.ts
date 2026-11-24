import {test, expect} from '@playwright/test';

test.describe('login test', ()=>{
   
test('vaild login', async ({page})=> {

    //1- goto
    await page.goto('https://practice.expandtesting.com');
    await page.pause()
    await page.goto('https://practice.expandtesting.com/login');
    await expect.soft(page).toHaveURL('https://practice.expandtesting.com')
    //2- reload
    await page.reload()
    //3-goback
    await page.goBack()
    //4-forward
    await page.goForward()
    //5- fill
    await page.locator("[id='username']").fill("practice")
    await page.getByLabel("Password").fill("SuperSecretPassword!")
    //6- click 
    await page.getByRole('button', {name : 'Login'}).click();
    const textContentreal = await page.locator(("div[id='flash'] b")).textContent()
    console.log(textContentreal)
    //7- to be visiable
    await expect(page.locator("div[id='flash'] b")).toBeVisible();

});

 test('search ', async ({page})=> {
      await page.goto('https://practice.expandtesting.com');
      await page.getByPlaceholder('Search an example...').fill('login')
      await page.locator("//a[normalize-space()='Test Login Page']").click()
      await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice')
    });

 test('Keys and shourtcuts', async ({page})=> {

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("//div[@class='col-9']").press('Control+A');
    await page.locator("//input[@id='username']").fill("practice")
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!")
    await page.locator("//button[@id='submit-login']").press('Enter');
    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!")
});

test('keyboard', async ({page})=> {

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("//input[@id='username']").click()
    await page.keyboard.type("practiceY");
    await page.keyboard.press("Backspace");
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!")
    await page.locator("//button[@id='submit-login']").press('Enter');
    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!")
});

test('Upload files', async ({page})=> {

    await page.goto('https://demo.automationtesting.in/FileUpload.html');

    //1- upload single file
    await page.locator("#input-4").setInputFiles('testDate/test.txt');

    //2- upload multiple file
    await page.locator("#input-4").setInputFiles(['testDate/test.txt','testDate/debug.docs']);
  
    await page.locator("//button[@title='Upload selected files']").click();

    //asertion
    await expect(page.locator("(//div[@title='test.txt'])[1]")).toBeVisible();

    //remove files
    await page.locator("#input-4").setInputFiles([]);

});
test('drag and drop', async ({page})=> {

    await page.goto('https://practice.expandtesting.com/drag-and-drop-circles');

    const redLocator = page.locator('.red');
    const greenLocator = page.locator('.green');
    const targetLocator = page.locator('#target')
    //1-using mouse actions 
    await redLocator.hover();
    await page.mouse.down();
    await targetLocator.hover();
    await page.mouse.up();
    //2- using playright actions 
    await greenLocator.dragTo(targetLocator);

});

test.only('slider', async ({page})=> {

    await page.goto('https://practice.expandtesting.com/horizontal-slider');
    const sliderLocator =  await page.locator("//input[@max='5.0']")
    await sliderLocator.evaluate(e => {
        e.setAttribute('value', '3.5')

  
    })
    await page.pause()

});













});
