
import { test, expect } from '@playwright/test';

test.describe('login test',{  
          tag: ['@ui','@smoke'],} ,() => {
  test('Verify profile name after changing name', async ({ page }) => {

        await page.goto('/');
        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin123");
        await page.getByRole('button', { name: 'Login' }).click();
        // await page.getByText("My Info").click();
        // await page.getByPlaceholder('First Name').clear();
        // await page.getByPlaceholder("First Name").fill('Sofian');
        // await page.getByPlaceholder('Middle Name').clear();
        // await page.getByPlaceholder("Middle Name").fill('Mohamed');
        // await page.getByPlaceholder('Last Name').clear();
        // await page.getByPlaceholder("Last Name").fill('Ahmed');
        // await page.locator("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']").click()
        await page.reload();
        await expect(page.locator("//p[@class='oxd-userdropdown-name']")).toHaveText("Sofian Ahmed");

    });

  test('Verify admin record after changing name', async ({ page }) => {
        await page.goto('/');
        await page.locator("//input[@name='username']").fill("Admin");
        await page.locator("//input[@name='password']").fill("admin123");
        await page.getByRole('button', { name: 'Login' }).click();
    //     await page.getByText("My Info").click();
    //     await page.getByPlaceholder("First Name").fill('Sofian');
    //     await page.getByPlaceholder("Middle Name").fill('Mohamed');
    //     await page.getByPlaceholder("Last Name").fill('Ahmed');
    //    // await page.locator("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']").click()
        await page.getByText("Admin").nth(0).click()
        console.log(await page.locator('body').innerText());

     await expect(page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)")).toHaveText("Sofian Ahmed");
   // expect(page.getByText('Sofian Ahmed', { exact: true })).toBeVisible();


    });

    });