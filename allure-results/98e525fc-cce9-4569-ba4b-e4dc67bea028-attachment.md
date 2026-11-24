# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FirstScript.spec.ts >> login test >> Vaild login
- Location: tests\FirstScript.spec.ts:4:8

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'submit-login\']')
    - locator resolved to <button type="submit" id="submit-login" name="submit-login" class="btn btn-bg btn-primary d-block w-100">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Try Dev Tools" [ref=e5] [cursor=pointer]
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - insertion [ref=e33]:
      - generic [ref=e36]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e38]: Discover more
        - link "Try Cloud Tools" [ref=e39] [cursor=pointer]
        - link "Try Dev Tools" [ref=e44] [cursor=pointer]
        - link "Browse Reference" [ref=e49] [cursor=pointer]
    - paragraph [ref=e55]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e56] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e59]:
      - generic [ref=e60]:
        - navigation "breadcrumb mb-2" [ref=e61]:
          - list [ref=e62]:
            - listitem [ref=e63]:
              - link "Home" [ref=e64]:
                - /url: /
            - listitem [ref=e65]: / Login Page
        - heading "Test Login page for Automation Testing Practice" [level=1] [ref=e66]
        - generic [ref=e68]:
          - paragraph [ref=e69]: This Test Login page is designed for automation testing practice. Test various positive and negative login scenarios in a testing environment.
          - paragraph [ref=e70]:
            - text: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
            - link "Cypress testing course" [ref=e71] [cursor=pointer]
          - paragraph [ref=e75]:
            - text: Register
            - link "here" [ref=e76]:
              - /url: /register
            - text: "or Log in to the secure area with these credentials:"
          - list [ref=e77]:
            - listitem [ref=e78]: "Username: practice"
            - listitem [ref=e79]: "Password: SuperSecretPassword!"
          - paragraph
        - generic [ref=e84]:
          - generic [ref=e85]:
            - generic [ref=e86]:
              - generic [ref=e87]: Username
              - textbox "Username" [ref=e88]: practice
            - generic [ref=e89]:
              - generic [ref=e90]: Password
              - textbox "Password" [active] [ref=e91]: SuperSecretPassword!
          - button "Login" [ref=e92] [cursor=pointer]
        - generic [ref=e93]:
          - heading "How to test the login page?" [level=2] [ref=e94]
          - generic [ref=e95]:
            - paragraph [ref=e96]: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
            - insertion [ref=e98]:
              - generic [ref=e101]:
                - heading "These are topics related to the article that might interest you" [level=2] [ref=e103]: Discover more
                - link "Secure Networks" [ref=e104] [cursor=pointer]
                - link "Audit Security" [ref=e109] [cursor=pointer]
                - link "Source Robotics" [ref=e114] [cursor=pointer]
            - paragraph [ref=e119]:
              - text: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - link "Browse Reference" [ref=e120] [cursor=pointer]
            - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e124]
            - paragraph [ref=e125]: "Take a look at this diagram and review the different steps:"
            - img "How Does Form-Based Authentication Work" [ref=e126]
            - list [ref=e127]:
              - listitem [ref=e128]: "Step 1: A client requests access to a protected resource"
              - listitem [ref=e129]:
                - text: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - link "Browse Reference" [ref=e130] [cursor=pointer]
              - listitem [ref=e134]: "Step 3: The client submits the login form to the server"
              - listitem [ref=e135]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
      - generic [ref=e137]:
        - heading "Login Automation Test Cases" [level=2] [ref=e138]
        - paragraph [ref=e139]:
          - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
          - link "Try Dev Tools" [ref=e140] [cursor=pointer]
        - paragraph [ref=e144]:
          - text: To perform these tests, please navigate to this
          - link "page" [ref=e145]:
            - /url: /login
        - heading "Login Automation Test Cases" [level=2] [ref=e146]
        - 'heading "Test Case 1: Successful Login" [level=3] [ref=e147]'
        - list [ref=e148]:
          - listitem [ref=e149]: Launch the browser.
          - listitem [ref=e150]:
            - text: Navigate to the
            - link "login" [ref=e151]:
              - /url: /login
            - text: page URL.
          - listitem [ref=e152]: Verify that the login page is displayed successfully.
          - listitem [ref=e153]:
            - text: Enter
            - strong [ref=e154]: Username
            - text: ":"
            - code [ref=e155]: practice
            - text: .
          - listitem [ref=e156]:
            - text: Enter
            - strong [ref=e157]: Password
            - text: ":"
            - code [ref=e158]: SuperSecretPassword!
            - text: .
          - listitem [ref=e159]:
            - text: Click the
            - strong [ref=e160]: Login
            - text: button.
          - listitem [ref=e161]:
            - text: Verify that the user is redirected to the
            - code [ref=e162]: /secure
            - text: page.
          - listitem [ref=e163]: Confirm the success message "You logged into a secure area!" is visible.
          - listitem [ref=e164]:
            - text: Verify that a
            - strong [ref=e165]: Logout
            - text: button is displayed.
        - separator [ref=e166]
        - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e167]'
        - list [ref=e168]:
          - listitem [ref=e169]: Launch the browser.
          - listitem [ref=e170]: Navigate to the login page URL.
          - listitem [ref=e171]: Verify that the login page is displayed successfully.
          - listitem [ref=e172]:
            - text: Enter an incorrect
            - strong [ref=e173]: Username
            - text: (e.g.,
            - code [ref=e174]: wrongUser
            - text: ).
          - listitem [ref=e175]:
            - text: Enter
            - strong [ref=e176]: Password
            - text: ":"
            - code [ref=e177]: SuperSecretPassword!
            - text: .
          - listitem [ref=e178]:
            - text: Click the
            - strong [ref=e179]: Login
            - text: button.
          - listitem [ref=e180]: Verify that an error message "Invalid username." is displayed.
          - listitem [ref=e181]: Ensure the user remains on the login page.
        - separator [ref=e182]
        - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e183]'
        - list [ref=e184]:
          - listitem [ref=e185]: Launch the browser.
          - listitem [ref=e186]: Navigate to the login page URL.
          - listitem [ref=e187]: Verify that the login page is displayed successfully.
          - listitem [ref=e188]:
            - text: Enter
            - strong [ref=e189]: Username
            - text: ":"
            - code [ref=e190]: practice
            - text: .
          - listitem [ref=e191]:
            - text: Enter an incorrect
            - strong [ref=e192]: Password
            - text: (e.g.,
            - code [ref=e193]: WrongPassword
            - text: ).
          - listitem [ref=e194]:
            - text: Click the
            - strong [ref=e195]: Login
            - text: button.
          - listitem [ref=e196]: Verify that an error message "Invalid password." is displayed.
          - listitem [ref=e197]: Ensure the user remains on the login page.
    - insertion [ref=e199]:
      - iframe [ref=e201]:
        - iframe [ref=f5e1]:
          - generic:
            - generic [ref=f6e1]:
              - generic [ref=f6e2]:
                - generic:
                  - generic [ref=f6e3] [cursor=pointer]
                  - button [ref=f6e8] [cursor=pointer]
              - insertion [ref=f6e16]:
                - generic [ref=f6e17]:
                  - link [ref=f6e18] [cursor=pointer]:
                    - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CiSQYb7PnapyeNfSTvNkPku722AzepO_WhwGIiari6xSYkviHswIQASCVlJmjAWCrzfOF8B6gAZ7Hms8-yAEJqAMByAObBKoEngJP0F5dh1xCtSFTjN_GMCU_yVmqv4W2Yx8NDxoQ8kh11p9ioxyT0HG6ZqKYWtbwTGpVdfGhZhMOAdVqMCfLqJZpmrolSGkqj53o9Z1y-rEpYnrxm8T6BL7z4mH7nTSELYZTk2xqLvhHi3TgRepwXuB8kA1hlC6ta0K9jSRP5yiPgEGDT4sDLvVl00UBKNct7yHqpwjcXSXkhV-pdzL5kwOvSjxz6Im2tlSzb5rmAPYHfAgl-D89u_AE5nZzguo8bVuUuHcDN1dqX0plyokQkTuH4G7lirOqz62o057YrU9qCqzLjlWfHjfbFC4eDCYr2kt7Q5ggLLv4KRAITZ9qev5QuiLzVzVkp1olmoAX87nY5H5tAaSc25tgVodA5s6WwASogo3nqgXgBAOIBfvWr4JVkAYBoAZNgAee_-quGagHqeuxAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOliK5PbN3-eXA2ABgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJTQeoNEwiZlffN3-eXAxX0CS8FHRK3HcvwDQGIDgmwE_-aoybQEwDYEw3YFAHQFQHKFgIKAPgWAYAXAbIXEBgCKgoyNDA2MzM1NzQzUAaqGBcJAAAAAMBS_0ASCjI0MDYzMzU3NDMYAbIYCRICnWMYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQSnwIAQM4h3FxiRebCesfGoq58oVC4OdkmV6xXhNRmLYIiStSZO3_VxYQOHN7ZR_daZ9arBIL9poHkPwsBJsCosZyhheA6jPBkEwyTYMP553yK2DX87r0_XqJI4wTkpWVdYTrv1uedLPzUxJMkKWHmyiIGCEmQQ_CRkg50AiJmWmjcNQsbM9mJj6uSGix20rolLJYsgGYaXpO0-gscS50f44heaTIcUzn5T3S2sNydcGb0mNoWCclqE0xCGrIp2QaKZ2Sc_jzLjGnshDKSsyfMUTytyPpyT47Dy_fNydd1OOKrz07ZoxLdHvzu_Dcuo5bCKEextooouN-eGMcUbjMfi56ma-_MjTbLs97nfdVOhhE4s87EyEBnZAu4TVqej7xFsBgB&sig=AOD64_3fAY60moCD4SqjdIoiwon2qMlfhQ&dbm_c=AKAmf-Bleyzgl_dVBPbmDBAng3xSrZS-Rmm3bK9L6qoiShwd-GnDy5C-tYid7cCVQ4aDCwqXFmAWeg-3Bfj_g7YDwO-YdOWgFT2vq5BRglE9yEWM5sFGYRjoGSJkglKSGwV5zqDHeWewKKClzJBGsEVnwRBdU_u-TBrw9lYCz02r8wpNErC44UlG_PtULGaWRCTtgcCCzQb-RZBsll_5YioMy1a_dkY3ImAK5292OCCuo0MnS3pxc5eF7MIMpyp9RXQX3h7HFPDi2OPde-g59SHCretVRXKV7zXdNSkI9yDWb_rvfCrUTZ3hHoOfUKr2imCqv8SBnX6p&cry=1&dbm_d=AKAmf-BI-YU9RbGrnS4ADBR4Psago9-MKGHT9aRK0Ur6S98tbhyMIvVfuBZknkrTYeWchHcRgpZ3sDtoW8ueo8lOvVTlC8deVnu3-cWgACPbpQmrtPdoCXn0OaaD6KcOsAotKNzCcjq4IrnoUmK2ggYkOhBmlC4sqbmTj9Lls95w0QAsyJH23nqvhkaZzQImIhyDDE1f7UnYSU2pJxfRy-opRpRlpuxK2G5ODz2rphEIhyaaDo2YGuXbHt_mFOXMt3h5lqvAZcjBnzYp1W78zdnI8rRXzY2KGLPjjofDZjdYAi6blWxuiSXQKlmwN_mmucNRPAB4OwSCZyzocjrm45RF2MxRwj8-xl2D8yrd2dhFLPDbQmDPIHdccMoxPKDLmXy8mOTxx3RdH4a5z9qTHH2Szad6WlJMWB7M1yLmtSVp-eOeWZ9OSFAlQxRvV-ohUDoQP4biN0swkWuXqhaQKQH4eufRNFKf8zXPEclQtF0Bp2ycrdDrXOmt1iTCgpQWftmH5kGrvvc45vD-OX5xQAftT0dpLmxdi2vDcYDy8sL9d756MA3-ZcZHCCtxTelNtYtykZifk8nYHp_FJqrdJB-b4TH-31GKli7WoBIZsa_0v39arH_1SBSIhYBCfMn1dJXGDbUdr0isuHQGOApUYeea3YKH8ICBkduoaSRL8io9gWfAR_1nkRhL0tt-yVUiZcZGBo7eqVBVqVbi57mSKOUNAdRXrV2eWf7a2E3xlzphROo676MIxhFonX_scsTPnFJhfi9PoIip&adurl=https://servedby.flashtalking.com/click/1/275018;9762682;4762577;211;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0imqCDziakl0a4mpB9Oa7sf&ft_impID=B200A2F8-04B0-54AC-CF2F-93ED6DFF8698&g=68799EBD0FB9E0&random=26714.602173097355&ft_width=160&ft_height=600&url=https://www.adobe.com/acrobat/free-trial-download.html?sdid=91BF4QZZ&mv=display&mv2=display
                  - iframe [ref=f6e19]
                  - link [ref=f6e21]:
                    - /url: https://www.flashtalking.com/consumer-privacy
                    - img "AdChoices arrow" [ref=f6e22]
                  - link "Privacy Notification" [ref=f6e24]:
                    - /url: https://www.flashtalking.com/consumer-privacy
                  - link "Privacy Notification" [ref=f6e27]:
                    - /url: https://www.flashtalking.com/consumer-privacy
            - iframe
  - insertion [ref=e203]
  - contentinfo [ref=e205]:
    - generic [ref=e210]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e211]
      - paragraph [ref=e212]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e213]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e214] [cursor=pointer]
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
> 11 |     await page.locator("//button[@id='submit-login']").click()
     |                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  23 |     await expect(page.locator("div[id='flash'] b")).toContainText("Your used password is invalid!")
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