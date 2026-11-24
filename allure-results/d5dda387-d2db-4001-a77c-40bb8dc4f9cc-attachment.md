# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FirstScript.spec.ts >> login test >> Invaild login
- Location: tests\FirstScript.spec.ts:17:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div[id=\'flash\'] b')
Expected substring: "Your used password is invalid!"
Received string:    "Your password is invalid!"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('div[id=\'flash\'] b') with timeout 5000ms
  - waiting for locator('div[id=\'flash\'] b')
    12 × locator resolved to <b>Your password is invalid!</b>
       - unexpected value "Your password is invalid!"

```

```yaml
- text: Your password is invalid!
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test.describe('login test', ()=>{
  4  |    test('Vaild login', async ({page}, testinfo)=> {
  5  | 
  6  |     await page.goto('https://practice.expandtesting.com/login');
  7  |     await page.locator("//input[@id='username']").fill("practice")
  8  |     await page.locator("//input[@id='password']").fill("SuperSecretPassword!")
  9  |     await page.screenshot({path: 'screenshots/Login.png'})
  10 |     testinfo.attach('${testinfo:title }', {path: 'screenshots/Login.png'})
  11 |     await page.locator("//button[@id='submit-login']").click()
  12 |     await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!")
  13 | });
  14 | 
  15 | 
  16 | 
  17 | test('Invaild login', async ({page})=> {
  18 | 
  19 |     await page.goto('https://practice.expandtesting.com/login');
  20 |     await page.locator("//input[@id='username']").fill("practice")
  21 |     await page.locator("//input[@id='password']").fill("SuperSecretPword!")
  22 |     await page.locator("//button[@id='submit-login']").click()
> 23 |     await expect(page.locator("div[id='flash'] b")).toContainText("Your used password is invalid!")
     |                                                     ^ Error: expect(locator).toContainText(expected) failed
  24 | });
  25 |  
  26 | 
  27 | test.skip('Skipped Invaild login', async ({page})=> {
  28 | 
  29 |     await page.goto('https://practice.expandtesting.com/login');
  30 |     await page.locator("//input[@id='username']").fill("practice")
  31 |     await page.locator("//input[@id='password']").fill("SuperSecretPword!")
  32 |     await page.locator("//button[@id='submit-login']").click()
  33 |     await expect(page.locator("div[id='flash'] b")).toContainText("Your password is invalid!")
  34 | });
  35 |  
  36 | 
  37 | 
  38 | 
  39 | })
  40 | 
  41 | 
```