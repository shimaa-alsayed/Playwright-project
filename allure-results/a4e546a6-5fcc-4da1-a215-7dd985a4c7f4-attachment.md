# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hocks.spec.ts >> login test >> Invalid login
- Location: tests\hocks.spec.ts:18:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-alert-content-text')
Expected: "Invalid credentials"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.oxd-alert-content-text') with timeout 5000ms
  - waiting for locator('.oxd-alert-content-text')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e12]:
          - alert [ref=f1e13]:
            - generic [ref=f1e14]:
              - generic [ref=f1e15]: 
              - paragraph [ref=f1e16]: Invalid credentials
          - generic [ref=f1e18]:
            - paragraph [ref=f1e19]: "Username : Admin"
            - paragraph [ref=f1e20]: "Password : admin123"
        - generic [ref=f1e21]:
          - generic [ref=f1e23]:
            - generic [ref=f1e24]:
              - generic [ref=f1e25]: 
              - generic [ref=f1e26]: Username
            - textbox "Username" [active] [ref=f1e28]
          - generic [ref=f1e30]:
            - generic [ref=f1e31]:
              - generic [ref=f1e32]: 
              - generic [ref=f1e33]: Password
            - textbox "Password" [ref=f1e35]
          - button "Login" [ref=f1e37] [cursor=pointer]
          - paragraph [ref=f1e39] [cursor=pointer]: Forgot your password?
      - generic [ref=f1e40]:
        - generic [ref=f1e41]:
          - link [ref=f1e42]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e45]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e48]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e51]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e54]:
          - paragraph [ref=f1e55]: OrangeHRM OS 5.9
          - paragraph [ref=f1e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e57]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e59]
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test.describe('login test', () => {
  5  | 
  6  |     test('Valid login', async ({ page }) => {
  7  | 
  8  |         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  9  | 
  10 |         await page.locator("//input[@name='username']").fill("Admin");
  11 |         await page.locator("//input[@name='password']").fill("admin123");
  12 | 
  13 |         await page.getByRole('button', { name: 'Login' }).click();
  14 | 
  15 |         await expect(page.getByAltText("profile picture")).toBeVisible();
  16 |     });
  17 | 
  18 |     test('Invalid login', async ({ page }) => {
  19 | 
  20 |         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  21 | 
  22 |         await page.locator("//input[@name='username']").fill("Admin");
  23 |         await page.locator("//input[@name='password']").fill("admin12");
  24 | 
  25 |         await page.getByRole('button', { name: 'Login' }).click();
  26 | 
> 27 |         await expect(page.locator('.oxd-alert-content-text')).toHaveText("Invalid credentials");
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  28 | 
  29 |     });
  30 | 
  31 | });
  32 | 
```