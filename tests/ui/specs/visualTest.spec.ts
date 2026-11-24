import {test, expect} from '@playwright/test'
test('Visual comparison login', async ({page})=> {

    await page.goto('https://qa-practice.netlify.app/auth_ecommerce');
    await expect(page).toHaveScreenshot();

});

test.only('Visual comparison for dynamic elements', async ({page})=> {

    await page.goto('https://qa-practice.netlify.app/visual');
    await expect(page).toHaveScreenshot();

});


