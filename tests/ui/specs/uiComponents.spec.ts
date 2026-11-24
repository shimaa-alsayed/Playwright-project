import {test, expect} from '@playwright/test';

test.describe('Dealing with ui components', ()=>{
   



test('drop down list', async ({page})=> {
 await page.goto('https://practice.expandtesting.com/dropdown')
 // 1- label
//  await page.locator('#country').selectOption({label: 'Egypt'});
//  // 2- displayed text
 // await page.locator('#country').selectOption('Egypt');
//  // 3- value 
//  await page.locator('#country').selectOption('EG');
//  // 4- index
  // await page.locator('#country').selectOption({index: 3});
  // await page.selectOption('#country', {label: 'Egypt'});
  // await page.selectOption('#country', {index:3});
  // await page.selectOption('#country', 'EG');
    //  Asseration 
    // 1- list count approch 1
    const options = await page.locator('#country').locator('option');
    await expect(options).toHaveCount(252);

    // 2- list count approch 2
    const optionscount = await page.$$('#country option')
    await expect(optionscount).toHaveLength(252);
    await expect(optionscount.length).toBe(252);
 
    // 3- text content approch 1
    const textcontent1  = await page.locator('#country').textContent();
    await expect(textcontent1).toContain('Egypt');


    // 4- text content approch 2
    const textcontent2  = await page.locator('#country').innerText();
    await expect(textcontent2.includes('Egypt')).toBeTruthy();

    // 5- 

    let status = false ;
    for(const option of optionscount){
      const text= await option.innerText();
      console.log(test)
      if (text == 'Egypt'){
          status = true;
          break;

      }}
        await expect(status).toBeTruthy();

});
test('Date Picker - calender', async ({page})=> {
await page.goto('https://demo.automationtesting.in/Datepicker.html')
await page.locator ('#datepicker1').click()
await page.locator('.ui-icon.ui-icon-circle-triangle-e').click()
await page.getByText('17').click()


const year = '2028'
const month = 7
const day = '27'

await page.locator ('#datepicker2').click();
await page.locator("select[title='Change the month']").selectOption({index: month -1});
await page.locator("select[title='Change the year']").selectOption(year);
await page.getByText(day).click();



});

test('iphrames ', async ({page})=> {
await page.goto('https://demo.automationtesting.in/Frames.html')
// number of iframe in the page 
// const frames = await page.frames();
// console.log("numbers of frame", frames.length);

//1- switch to iframe by name
// const frame = await page.frame('SingleFrame')
// await frame?.locator("//input[@type='text']").fill('S and S and M')

//2- switch to iframe by url
// const frame = await page.frame({url: 'https://demo.automationtesting.in/SingleFrame.html'});
// await frame?.fill("//input[@type='text']", 'S and S and M');

//3- switch to iframe by locater
// const frame = await page.frame('#singleframe');
// await frame?.locator("//input[@type='text']").fill('S and S and M');


//nested iframe

//1- select by locator 
// await page.locator(".analystic[href='#Multiple']").click();
// const parentFrame = await page.frameLocator("//iframe[@src='MultipleFrames.html']")
// const childfFame = parentFrame.frameLocator("iframe")
// await childfFame.locator("//input[@type='text']").fill("suport yourself")

//2- select by childFrame method  This way Not working with me
 const parentframe = await page.frame({url: "https://demo.automationtesting.in/SingleFrame.html"});
 const childFrames = await parentframe?.childFrames();
 await childFrames?.[0].locator("//input[@type='text']").fill('S and S and M');







});



test.only('Alerts', async ({page})=> {
await page.goto('https://testautomationpractice.blogspot.com/')
//1-Alert
// await page.on ('dialog', async dialog => {
// await expect (dialog.message()).toContain('I am an alert box!');
// await dialog.accept();

// });
// await page.locator('#alertBtn').click();

//2-confirm
// await page.on ('dialog', async dialog => {
// await expect (dialog.message()).toContain('Press a button!');
// await dialog.dismiss();

// });
// await page.locator('#confirmBtn').click();
// await expect(page.locator('#demo')).toContainText('You pressed Cancel!');


//3-promt
await page.on ('dialog', async dialog => {
await expect (dialog.message()).toContain('Please enter your name:');
await expect (dialog.defaultValue()).toContain('Harry Potter');
await dialog.accept('Shimaa Elsayed');

});
await page.locator('#promptBtn').click();
await expect(page.locator('#demo')).toContainText('Hello Shimaa Elsayed! How are you today?');





});















});