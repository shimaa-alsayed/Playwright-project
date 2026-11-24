import {test, expect} from '@playwright/test';

test.describe('Interacting with check boxes and radio buttons', ()=>{
   



test('Checkboxes', async ({page})=> {
 await page.goto('https://practice.expandtesting.com/checkboxes')

 //using click
//  await page.locator('#checkbox1').click()
//  await page.locator('#checkbox2').click()

 // using check method
//  await page.locator('#checkbox1').check({force: true});
//  await page.locator('#checkbox2').uncheck();
//  await expect(page.locator('#checkbox1')).toBeChecked();
//  await expect(page.locator('#checkbox2')).not.toBeChecked();



 const checkboxesLocators = [
    page.locator('#checkbox1'),
    page.locator('#checkbox2')
];

for(const checkbox of checkboxesLocators){
    await checkbox.check();
    await expect(checkbox).toBeChecked();

}

});

test.only('RadioButtons', async ({page})=> {
 await page.goto('https://practice.expandtesting.com/radio-buttons')



 await page.locator('#red').click();
 await page.getByLabel('Black').check();

 await expect(page.locator('#red')).not.toBeChecked();
 await expect(page.getByLabel('Black')).toBeChecked();


});
});